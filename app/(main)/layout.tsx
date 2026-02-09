import NavBar from "@/components/myComponents/NavBar";

export default function FriendsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      <NavBar />
      {children}
    </div>
  );
}
