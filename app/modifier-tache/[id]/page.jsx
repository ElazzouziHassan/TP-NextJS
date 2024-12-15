import ModifierTacheForm from "@/components/ModifierTacheForm";

const getTacheById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/taches/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Tâche n'est pas trouvé !");
    }

    const data = await res.json();
    return data.tache;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default async function ModifierTache({params}) {
  const { id } = params;
  const tache = await getTacheById(id);
  if (!tache) {
    return <div>Tâche non trouvée ou une erreur s'est produite !</div>;
  }
  const { titre, description } = tache;
  return <ModifierTacheForm id={id} titre={titre} description={description} />;
  
}