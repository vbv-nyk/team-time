import { FormEvent, useRef } from "react";

interface tagComponentProps {
  tags: string[];
  setTags: Function;
}

export default function TagsComponent(props: tagComponentProps) {
  const tagFieldRef = useRef<HTMLInputElement>(null);
  const { tags, setTags } = props;

  function addTag(e: FormEvent) {
    e.preventDefault();
    if (tags.length > 5) return;
    console.log(tagFieldRef);
    if (tagFieldRef.current?.value) {
      const tagFieldValue = tagFieldRef.current.value.toLowerCase();
      if (!tags.includes(tagFieldValue))
        setTags([...props.tags, tagFieldValue]);
      tagFieldRef.current.value = "";
    }
  }

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="team-reqs" className="text-xs font-semibold w-max">
        Add Tags
      </label>
      <input
        id="team-reqs"
        maxLength={30}
        type="text"
        ref={tagFieldRef}
        className="bg-transparent max-w-[200px] border-b outline-none border-b-black text-center"
      />
      <button
        id="team-reqs"
        className="px-2 py-1 font-bold rounded-full hover:text-white hover:bg-blue-800 bg-slate-300"
        onClick={addTag}
      >
        Add
      </button>
    </div>
  );
}
