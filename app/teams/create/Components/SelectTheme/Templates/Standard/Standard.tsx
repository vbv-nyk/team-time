import { RootState } from "@/app/redux/store";
import {
  updateAchieveReq,
  updateContactReq,
  updateSources,
} from "@/app/redux/teamSlice";
import { sectionTypes } from "@/app/services/types";
import { useSelector } from "react-redux";
import HeaderTextArea from "../Common/headerTextArea";
import Requirements from "../Common/requirements";
import TeamCreatedBy from "../Common/teamCreatedBy";
import TeamImage from "../Common/teamImage";

export default function StandardTemplate() {
  const { currentThemeColors } = useSelector(
    (state: RootState) => state.themeSlice
  );

  return (
    <div
      style={{ backgroundColor: currentThemeColors.background }}
      className="flex flex-col gap-2 p-2"
    >
      <TeamCreatedBy
        teamNameColor={currentThemeColors.largeHeader}
        createdByColor={currentThemeColors.smallHeader}
        titleColor={currentThemeColors.mediumHeader}
      />
      <TeamImage />
      <HeaderTextArea
        header={sectionTypes.ABOUT}
        onChangeFunction={updateAchieveReq}
        headerColor={currentThemeColors.mediumHeader}
        paragraphColor={currentThemeColors.paragraph}
      />
      <HeaderTextArea
        header={sectionTypes.CONTACT}
        onChangeFunction={updateContactReq}
        headerColor={currentThemeColors.mediumHeader}
        paragraphColor={currentThemeColors.paragraph}
      />
      <HeaderTextArea
        header={sectionTypes.SOURCES}
        onChangeFunction={updateSources}
        headerColor={currentThemeColors.mediumHeader}
        paragraphColor={currentThemeColors.paragraph}
      />

      <div className="flex flex-col gap-3">
        <div
          style={{ color: currentThemeColors.mediumHeader }}
          className="text-xl font-extrabold"
        >
          What We&apos;re Looking For In Our Teammates
        </div>
        <Requirements
          reqDescColor={currentThemeColors.paragraph}
          reqNameColor={currentThemeColors.smallHeader}
        />
      </div>
    </div>
  );
}
