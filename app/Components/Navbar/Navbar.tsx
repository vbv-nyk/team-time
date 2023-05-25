export default function Navbar() {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 id="Logo" className="text-lg font-bold">
          Team Time
        </h1>
        <div className="flex gap-2">
          <a href="#" id="about">
            About
          </a>
          <a href="#" id="teams">
            Teams
          </a>
        </div>
      </div>
    </div>
  );
}
