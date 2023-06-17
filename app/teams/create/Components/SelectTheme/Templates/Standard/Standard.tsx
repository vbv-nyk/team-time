import { sectionTypes } from "@/app/services/types";
import {
  updateAchieveReq,
  updateContactReq,
  updateSources,
} from "@/app/redux/teamSlice";
import Requirements from "../Common/requirements";
import TeamCreatedBy from "../Common/teamCreatedBy";
import HeaderTextArea from "../Common/headerTextArea";
import TeamImage from "../Common/teamImage";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/app/redux/store";
import themeSlice from "@/app/redux/themeSlice";

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
