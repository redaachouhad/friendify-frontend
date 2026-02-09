"use client";

import { Users } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <div className="bg-gray-200 rounded-full p-6 mb-4">
        <Users size={40} className="text-gray-500" />
      </div>

      <p className="text-gray-700 font-medium max-w-md">{description}</p>
    </div>
  );
}
