export default function ThemeControls(props: { setStep: Function }) {
  return (
    <div className="flex flex-wrap items-center content-around justify-between col-start-1 gap-2 text-xs">
      <div onClick={() => props.setStep(1)}>
        <label className="px-4 py-2 font-bold border-2 border-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:border-transparent hover:text-white">
          Go Back
        </label>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 font-bold border-2 border-red-600 hover:cursor-pointer hover:bg-red-600 hover:border-transparent hover:text-white">
          Save Draft
        </button>
        <button className="px-4 py-2 font-bold border-2 border-green-600 hover:cursor-pointer hover:bg-green-600 hover:border-transparent hover:text-white">
          Create Team
        </button>
      </div>
    </div>
  );
}
