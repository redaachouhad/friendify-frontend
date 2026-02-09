"use client";

import { Cake, UserPlus, Users } from "lucide-react";
import Link from "next/link";

const items = [
  { label: "Tou(te)s les ami(e)s", href: "/friends/all", icon: Users },
  {
    label: "Invitations Envoyées",
    href: "/friends/invitations/sent",
    icon: UserPlus,
  },
  {
    label: "Invitations Reçus",
    href: "/friends/invitations/received",
    icon: UserPlus,
  },
  { label: "Suggestions", href: "/friends/suggestions", icon: UserPlus },
  { label: "Anniversaires", href: "/friends/birthdays", icon: Cake },
];

export default function FriendsSidebar() {
  return (
    <aside className="w-64 p-4 space-y-1">
      <h2 className="font-bold text-lg mb-3">Ami(e)s</h2>

      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          <item.icon size={20} />
          <span className="font-medium">{item.label}</span>
        </Link>
      ))}
    </aside>
  );
}
