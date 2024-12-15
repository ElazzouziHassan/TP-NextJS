/* eslint-disable no-console */

import Link from "next/link";
import SupprimerBtn from "./SupprimerBtn";

const getTaches = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/taches", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("List des tâches n'est pas trouvé !");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading taches: ", error);
  }
}

export default async function TachesList() {
  const { taches } = await getTaches();

  return (
    <>
      {taches.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.titre}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <SupprimerBtn id={t._id} />
            <Link href={`/modifier-tache/${t._id}`}>
              Modifier
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
