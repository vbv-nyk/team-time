import { sectionTypes } from "@/app/services/types";
import HeaderTextArea from "../Common/headerTextArea";
import Requirements from "../Common/requirements";
import TeamCreatedBy from "../Common/teamCreatedBy";
import TeamImage from "../Common/teamImage";
import {
  updateAchieveReq,
  updateContactReq,
  updateSources,
} from "@/app/redux/teamSlice";
import { darkColors } from "@/app/services/colors";

export default function Dark() {
  return (
    <div
      style={{ backgroundColor: darkColors.background }}
      className="flex flex-col gap-2 p-2"
    >
      <TeamCreatedBy
        teamNameColor={darkColors.largeHeader}
        createdByColor={darkColors.smallHeader}
        titleColor={darkColors.mediumHeader}
      />
      <TeamImage />
      <HeaderTextArea
        header={sectionTypes.ABOUT}
        onChangeFunction={updateAchieveReq}
        headerColor={darkColors.mediumHeader}
        paragraphColor={darkColors.paragraph}
      />
      <HeaderTextArea
        header={sectionTypes.CONTACT}
        onChangeFunction={updateContactReq}
        headerColor={darkColors.mediumHeader}
        paragraphColor={darkColors.paragraph}
      />
      <HeaderTextArea
        header={sectionTypes.SOURCES}
        onChangeFunction={updateSources}
        headerColor={darkColors.mediumHeader}
        paragraphColor={darkColors.paragraph}
      />
      <div className="flex flex-col gap-3">
        <div
          style={{ color: darkColors.mediumHeader }}
          className="text-xl font-extrabold"
        >
          What We&apos;re Looking For In Our Teammates
        </div>
        <Requirements
          reqDescColor={darkColors.paragraph}
          reqNameColor={darkColors.smallHeader}
        />
      </div>
    </div>
  );
}
