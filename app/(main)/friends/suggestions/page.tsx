"use client";

import SuggestionCard from "@/components/myComponents/friends/SuggestionCard";

const suggestions = [
  {
    id: 1,
    name: "Fouad Elkhouk",
    mutual: "3 amis en commun",
    image: "/2.jpg",
  },
  {
    id: 2,
    name: "Imad Agadir",
    mutual: "1 ami en commun",
    image: "/2.jpg",
  },
  {
    id: 3,
    name: "Yassine Jaraf",
    mutual: "58 abonnés",
    image: "/2.jpg",
  },
];

export default function SuggestionsPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Vous connaissez peut-être</h1>
        <button className="text-blue-600 font-semibold hover:underline">
          Voir tout
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {suggestions.map((s) => (
          <SuggestionCard key={s.id} {...s} />
        ))}
      </div>
    </>
  );
}
