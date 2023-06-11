import { FormEvent } from "react";

interface AddedTagsProps {
  tags: string[];
  setTags: Function;
}
export default function AddedTags(props: AddedTagsProps) {
  const { tags, setTags } = props;
  function removeTag(e: FormEvent, index: number) {
    e.preventDefault();
    const newTags = tags.filter((tag, i) => i !== index);
    setTags(newTags);
  }

  const addedTags = tags.map((tag, i) => (
    <div className="flex items-start px-1 py-2" key={i}>
      <div className="px-2 py-2 text-xs font-extrabold text-white bg-indigo-600 ">
        {tag}
      </div>
      <button
        onClick={(e) => removeTag(e, i)}
        className="px-2 py-2 text-xs font-extrabold text-white bg-red-500"
      >
        {"x"}
      </button>
    </div>
  ));

  return (
    <div className="flex flex-col items-center self-start w-full gap-4 sm:items-start">
      <div className="flex flex-wrap">{addedTags}</div>
    </div>
  );
}
