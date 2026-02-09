import FriendsSidebar from "@/components/myComponents/friends/FriendsSidebar";

export default function FriendsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 min-h-0 bg-gray-100">
      <FriendsSidebar />

      {/* 🔴 THIS WAS MISSING */}
      <div className="flex-1 flex flex-col min-h-0 p-6">{children}</div>
    </div>
  );
}
