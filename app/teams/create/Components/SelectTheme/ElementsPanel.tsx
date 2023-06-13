export default function ElementsPanel() {
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      <div>
        <button className="px-2 py-1 border-2 border-gray-600 rounded-full">
          Paragraph
        </button>
      </div>
      <div>
        <button className="px-2 py-1 border-2 border-gray-600 rounded-full">
          Large Header
        </button>
      </div>
      <div>
        <button className="px-2 py-1 border-2 border-gray-600 rounded-full">
          Medium Header
        </button>
      </div>
      <div>
        <button className="px-2 py-1 border-2 border-gray-600 rounded-full">
          Small Header
        </button>
      </div>
    </div>
  );
}
