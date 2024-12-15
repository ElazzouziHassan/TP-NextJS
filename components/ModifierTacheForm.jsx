"use client";
/* eslint-disable no-console */

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ModifierTacheForm({ id, titre, description }) {
  const [newTitre, setNewTitre] = useState(titre || '');
  const [newDescription, setNewDescription] = useState(description || '');
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 

    try {
      const res = await fetch(`http://localhost:3000/api/taches/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ 
          titre: newTitre,     
          description: newDescription, 
        }),
      });

      if (!res.ok) {
        throw new Error("Tâche n'est pas modifier !");
      }
      router.refresh();
      router.push("/"); 
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <input
      onChange={(e) => setNewTitre(e.target.value)}
      value={newTitre}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Tâche Title"
      disabled={isLoading} 
    />
    <input
      onChange={(e) => setNewDescription(e.target.value)}
      value={newDescription}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Tâche Description"
      disabled={isLoading} 
    />
    <button
      className={`bg-green-600 font-bold text-white py-3 px-6 w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={isLoading}
    >
      {isLoading ? 'Modification en cours...' : 'Modifier Tâche'} 
    </button>
  </form>
  );
}