export default function Navbar() {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 id="Logo" className="text-3xl font-bold">
          Team Time
        </h1>
        <div className="flex items-center gap-2">
          <a href="#" id="about">
            About
          </a>
          <a href="#" id="teams">
            Teams
          </a>
          <button className="p-2 font-bold text-white bg-blue-600 border">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
