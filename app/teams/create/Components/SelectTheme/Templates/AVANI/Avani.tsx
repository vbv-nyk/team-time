import { sectionTypes, teamInterface } from "@/app/services/types";
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
      className="flex flex-col gap-8 p-1 rounded-lg sm:p-4 "
    >
      <TeamCreatedBy
        createdByColor={avaniColors.mediumHeader}
        teamNameColor={avaniColors.largeHeader}
        titleColor={avaniColors.mediumHeader}
      />
      <div className="flex flex-col items-center grid-cols-3 gap-8 lg:grid">
        <TeamImage />
        <HeaderTextArea
          header={sectionTypes.ABOUT}
          onChangeFunction={updateAchieveReq}
          headerColor={avaniColors.mediumHeader}
          paragraphColor={avaniColors.paragraph}
        />
      </div>

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
