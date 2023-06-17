"use client";
import { useSelector } from "react-redux";
import SelectTheme from "../Components/SelectTheme/SelectTheme";
import { RootState } from "@/app/redux/store";

export default function Page() {
  return <SelectTheme />;
}
