import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>TODO LIST APP</Link>
      <Link className='bg-white p-2' href={"/ajouter-tache"}>Ajouter une Tâche</Link>
    </nav>
  )
}