import { sectionTypes } from "@/app/services/types";
import {
  updateAchieveReq,
  updateContactReq,
  updateSources,
} from "@/app/redux/teamSlice";
import Requirements from "../Common/requirements";
import TeamCreatedBy from "../Common/teamCreatedBy";
import HeaderTextArea from "../Common/headerTextArea";
import { avaniColors } from "../../../../../../services/colors";
import TeamImage from "../Common/teamImage";

export default function Avani() {
  return (
    <div
      style={{ backgroundColor: avaniColors.background }}
      className="flex flex-col gap-2 p-2"
    >
      <TeamCreatedBy
        teamNameColor={avaniColors.largeHeader}
        createdByColor={avaniColors.smallHeader}
        titleColor={avaniColors.mediumHeader}
      />
      <TeamImage />
      <HeaderTextArea
        header={sectionTypes.ABOUT}
        onChangeFunction={updateAchieveReq}
        headerColor={avaniColors.mediumHeader}
        paragraphColor={avaniColors.paragraph}
      />
      <HeaderTextArea
        header={sectionTypes.CONTACT}
        onChangeFunction={updateContactReq}
        headerColor={avaniColors.mediumHeader}
        paragraphColor={avaniColors.paragraph}
      />
      <HeaderTextArea
        header={sectionTypes.SOURCES}
        onChangeFunction={updateSources}
        headerColor={avaniColors.mediumHeader}
        paragraphColor={avaniColors.paragraph}
      />

      <div className="flex flex-col gap-3">
        <div
          style={{ color: avaniColors.mediumHeader }}
          className="text-xl font-extrabold"
        >
          What We&apos;re Looking For In Our Teammates
        </div>
        <Requirements
          reqDescColor={avaniColors.paragraph}
          reqNameColor={avaniColors.smallHeader}
        />
      </div>
    </div>
  );
}
