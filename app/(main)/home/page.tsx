import { FaSearch } from "react-icons/fa";

function Home() {
  return (
    <div className="w-full h-screen bg-black flex flex-col">
      <div className="flex bg-blue-900 p-2 items-center gap-4">
        <h1 className="text-white text-3xl font-bold">FRIENDIFY</h1>
        <div className="flex items-center bg-white rounded-full w-[70vmin] gap-1 px-2">
          <FaSearch />
          <input type="text" className="flex-1 outline-none p-1" />
        </div>
      </div>
    </div>
  );
}

export default Home;
