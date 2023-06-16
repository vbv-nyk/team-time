export default function ThemeControls(props: { setStep: Function }) {
  return (
    <div className="flex flex-wrap items-center content-around justify-center col-start-1 gap-3 text-xs">
      <div className="flex gap-2">
        <button className="px-4 py-1 font-bold border-2 border-red-600 hover:cursor-pointer hover:bg-red-600 hover:border-transparent hover:text-white">
          Save As Draft
        </button>
        <button className="px-4 py-1 font-bold border-2 border-green-600 hover:cursor-pointer hover:bg-green-600 hover:border-transparent hover:text-white">
          Create Team
        </button>
      </div>
      <div onClick={() => props.setStep(1)}>
        <label className="px-4 py-1 font-bold border-2 border-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:border-transparent hover:text-white">
          Go Back
        </label>
      </div>
    </div>
  );
}
