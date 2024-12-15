'use client';
import { useRouter } from 'next/navigation';

export default function SupprimerBtn({ id }) {
  const router = useRouter();
  const suprimerTache = async () => {
    const confirmed = confirm('Vous êtes sûr ?');
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/taches?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert('Tâche supprimée avec succès.');
        router.refresh(); 
      };
    }
  }
  return (
    <>
      <button onClick={suprimerTache} className='text-red-400 font-bold hover:text-red-600'>
        <span>Suprimer</span>
      </button>
    </>
  )
}