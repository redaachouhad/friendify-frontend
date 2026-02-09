"use client";

import EmptyState from "@/components/myComponents/friends/EmptyState";

export default function SentInvitationsPage() {
  const sentInvites: any[] = [];

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-2">Invitations envoyées</h1>

      {sentInvites.length === 0 ? (
        <EmptyState
          title="Invitations envoyées"
          description="Vous n’avez envoyé aucune invitation."
        />
      ) : (
        <div>{/* sent invitations list */}</div>
      )}
    </div>
  );
}
