import { teamInterface } from "@/app/services/types";
import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { ChangeEvent, CSSProperties } from "react";

interface teamCardInterface extends teamInterface {
  viewStyle: string;
  isEditing: boolean;
}

export default function TeamCard(props: teamCardInterface) {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: props.viewStyle === "list" ? "row" : "column",
    width: props.isEditing ? "450px" : "100%",
  };

  const imageRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string>(props.img);

  // Convert a file to base64 string
  const toBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  async function changeImage(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const base64: string = await toBase64(e.target.files[0]);
    setImageSrc(base64);
  }

  const tags = props.reqs.map((req, i) => (
    <div key={i} className="px-3 py-1 bg-blue-800 rounded-full">
      {req}
    </div>
  ));

  return (
    <div
      style={containerStyle}
      className="flex flex-col items-center gap-4 py-2 break-all shadow-sm h-max shadow-neutral-600"
    >
      <div className="flex items-center gap-2 text-sm">
        <h1 className="font-semibold">{props.name}: </h1>
        <div> Posted By {props.createdBy}</div>
      </div>
      <div>
        <p className="px-1 text-xl hyphens-auto"> {props.title}</p>
      </div>
      {props.isEditing && (
        <label
          htmlFor="image-picker"
          className="relative self-end px-4 py-2 mb-[-48px] text-xs font-bold text-white bg-blue-600 hover:cursor-pointer"
        >
          Edit
          <input
            type="file"
            id="image-picker"
            className="hidden"
            ref={imageRef}
            accept=".webp, .png, .apng, .avif, .gif, .jpeg, .svg"
            onChange={changeImage}
          />
        </label>
      )}
      <div>
        <Link href={`/teams/${props.name}`}>
          <Image
            // src={imageSrc.toString()}
            src={`https://storage.googleapis.com/pai-images/b5db887d057b40178ca2bbdf8cb7510d.png`}
            height={1000}
            width={1000}
            className="w-full h-full"
            alt="Image For Your Project/Team"
          />
        </Link>
        <div className="flex flex-wrap justify-center gap-3 mt-2 text-xs font-bold text-white ">
          {tags}
        </div>
      </div>
    </div>
  );
}
