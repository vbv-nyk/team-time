import Image from "next/image";

export default function TeamCard() {
  return (
    <div className="break-all flex flex-col items-center w-fit max-w-[250px]">
      <Image
        src="/TeamWork.png"
        width={250}
        height={250}
        alt="Image For Your Project/Team"
      />
      <h1>Team Name</h1>
      <p>This team does so and so and so so lkasdjlaks</p>
      <button className="p-2 bg-gray-500 border">View Details</button>
    </div>
  );
}
