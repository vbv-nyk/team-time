import { RootState } from "@/app/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function TeamImage() {
  const { img } = useSelector((state: RootState) => state.teamSlice);

  return (
    <div className="flex items-center justify-center">
      <Image
        src={
          img ||
          `https://storage.googleapis.com/pai-images/b5db887d057b40178ca2bbdf8cb7510d.png`
        }
        height={2000}
        width={2000}
        className="w-full sm:w-[300px]"
        alt="Image describing project"
      />
    </div>
  );
}
