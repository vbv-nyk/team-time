import { RootState } from "@/app/redux/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function TeamImage() {
  const { img } = useSelector((state: RootState) => state.teamSlice);
  const dispatch = useDispatch();

  return (
    <div>
      <Image
        src={
          img ||
          `https://storage.googleapis.com/pai-images/b5db887d057b40178ca2bbdf8cb7510d.png`
        }
        height={2000}
        width={2000}
        className="col-start-1 "
        alt="Image describing project"
      />
    </div>
  );
}
