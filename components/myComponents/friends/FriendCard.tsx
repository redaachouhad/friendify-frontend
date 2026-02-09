"use client";

import Image from "next/image";

interface Props {
  name: string;
  mutual?: string;
  image: string;
}

export default function FriendCard({ name, mutual, image }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <Image
        src={image}
        alt={name}
        className="h-40 w-full object-cover"
        width={138}
        height={138}
      />

      <div className="p-3">
        <p className="font-semibold text-gray-900 truncate">{name}</p>
        {mutual && <p className="text-sm text-gray-500 mb-3">{mutual}</p>}

        <div className="flex flex-col gap-2">
          <button className="bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700">
            Ajouter ami(e)
          </button>
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-300">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
