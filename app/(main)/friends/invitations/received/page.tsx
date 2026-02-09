"use client";

import EmptyState from "@/components/myComponents/friends/EmptyState";
import Link from "next/link";

export default function ReceivedInvitationsPage() {
  const invitations: any[] = []; // empty

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Invitations</h1>

        <Link
          href="/friends/invitations/sent"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          Voir les invitations envoyées
        </Link>

        {invitations.length === 0 && (
          <p className="text-gray-500 text-sm mt-2">
            Aucune nouvelle invitation
          </p>
        )}
      </div>

      {/* Content */}
      {invitations.length === 0 ? (
        <EmptyState
          title="Invitations"
          description="Quand vous recevrez des invitations et des suggestions d’ami(e)s, vous les verrez ici."
        />
      ) : (
        <div>{/* invitations list */}</div>
      )}
    </div>
  );
}
