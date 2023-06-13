export default function ThemeControls() {
  return (
    <div className="flex flex-wrap h-[80px]  content-around items-center justify-between gap-2 text-xs">
      <div className="flex gap-2">
        <button className="px-4 py-2 font-bold border-2 border-red-600 hover:bg-red-600 hover:border-transparent hover:text-white">
          Save Draft
        </button>
        <button className="px-4 py-2 font-bold border-2 border-green-600 hover:bg-green-600 hover:border-transparent hover:text-white">
          Create Team
        </button>
      </div>
    </div>
  );
}
