"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
 
export default function AjouterTache() {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titre || !description) {
      alert('les champs vide !');
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/taches',{
        method:"POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({titre, description}),
      });
      if (res.ok){
        router.push('/');
      }else{ throw new Error("Tâche n'est pas creé")};
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        onChange={e => setTitre(e.target.value)}
        value={titre}
        className='border border-slate-500 w-full px-8 py-2' type="text" placeholder='Titre' 
      />
      <input 
        onChange={e => setDescription(e.target.value)}
        value={description}
        className='border border-slate-500 w-full px-8 py-2' type="text" placeholder='Description' 
      />
      <button 
        type="submit"
        className='bg-green-600 font-bold text-white py-3 px-6 w-full'
      >Ajouter</button>
    </form>
  )
}