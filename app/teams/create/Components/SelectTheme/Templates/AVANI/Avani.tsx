import { teamInterface } from "@/app/services/types";
import Image from "next/image";
import ElementsPanel from "../../ElementsPanel";
import ThemeControls from "../../ThemeControls";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import {
  updateAchieveReq,
  updateContactReq,
  updateReqDesc,
  updateSources,
} from "@/app/redux/teamSlice";
import Requirements from "../Common/requirements";
import TeamCreatedBy from "../Common/teamCreatedBy";
import { loremIpsum } from "@/app/services/constants";
import HeaderTextArea from "../Common/headerTextArea";
import { avaniColors } from "./AvaniColors";

export default function Avani() {
  const { img, placeholder } = useSelector(
    (state: RootState) => state.teamSlice
  );

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-8 p-1 rounded-lg sm:p-4 bg-avani-background">
      <TeamCreatedBy
        createdByColor={avaniColors.mediumHeader}
        teamNameColor={avaniColors.largeHeader}
        titleColor={avaniColors.mediumHeader}
      />
      <div className="flex flex-col items-center grid-cols-3 gap-8 lg:grid">
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
        <HeaderTextArea
          header="What We're Trying To Achieve"
          onChangeFunction={updateAchieveReq}
          headerColor={avaniColors.mediumHeader}
          paragraphColor={avaniColors.paragraph}
        />
      </div>

      <HeaderTextArea
        header="How To Contact Us"
        onChangeFunction={updateContactReq}
        headerColor={avaniColors.mediumHeader}
        paragraphColor={avaniColors.paragraph}
      />
      <HeaderTextArea
        header="Sources for More Information"
        onChangeFunction={updateSources}
        headerColor={avaniColors.mediumHeader}
        paragraphColor={avaniColors.paragraph}
      />
      <div className="flex flex-col gap-6">
        <h1
          style={{ color: avaniColors.largeHeader }}
          className="text-xl font-medium text-avani-mheader "
        >
          What We Want From Our Teammates
        </h1>
        <div className="flex flex-col gap-4">
          <Requirements
            reqNameColor={avaniColors.mediumHeader}
            reqDescColor={avaniColors.paragraph}
          />
        </div>
      </div>
    </div>
  );
}
