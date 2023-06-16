import { useState } from "react";

export default function ElementsPanel() {
  function paragraphOptions() {}
  const elementsData = [
    {
      elementName: "Paragraph",
      onclick: paragraphOptions,
    },
    {
      elementName: "Large Header",
    },
    {
      elementName: "Medium Header",
    },
    {
      elementName: "Small Header",
    },
    {
      elementName: "Links",
    },
  ];
  const [elements, setElements] = useState(elementsData);
  function filterElements(e: any) {
    const tempElements = elementsData.filter((element) =>
      element.elementName.includes(e.target.value)
    );
    setElements(tempElements);
  }

  const elementOptions = elements.map((element, i) => (
    <div
      key={i}
      onClick={element.onclick}
      className="flex gap-1 px-3 py-1 font-bold border-2 border-gray-500 rounded-full hover:cursor-pointer hover:text-white hover:bg-blue-500"
    >
      <button className="border-gray-600 ">{element.elementName}</button>
      <div className="text-xl">+</div>
    </div>
  ));
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="filter-elements" className="text-xs ">
          Filter Elements
        </label>
        <input
          id="filter-elements"
          type="text"
          className="p-2 border-2 outline-none bg-slate-100 border-b-black"
          onChange={filterElements}
          placeholder="Filter Elements"
        />
      </div>
      <div className="flex flex-wrap gap-2 text-xs h-max">{elementOptions}</div>
    </div>
  );
}
