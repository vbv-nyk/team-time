import { RootState } from "@/app/redux/store";
import {
  updateAchieveReq,
  updateContactReq,
  updateSources,
} from "@/app/redux/teamSlice";
import { useDispatch, useSelector } from "react-redux";
import TeamCreatedBy from "../Common/teamCreatedBy";
import { cleanColors } from "@/app/services/colors";
import Requirements from "../Common/requirements";
import HeaderTextArea from "../Common/headerTextArea";
import { sectionTypes } from "@/app/services/types";

export default function Clean() {
  const { img } = useSelector((state: RootState) => state.teamSlice);
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: cleanColors.background }} className="p-2">
      <TeamCreatedBy
        teamNameColor={cleanColors.largeHeader}
        createdByColor={cleanColors.smallHeader}
        titleColor={cleanColors.mediumHeader}
      />
      <HeaderTextArea
        header={sectionTypes.CONTACT}
        onChangeFunction={updateContactReq}
        headerColor={cleanColors.mediumHeader}
        paragraphColor={cleanColors.paragraph}
      />
      <HeaderTextArea
        header={sectionTypes.SOURCES}
        onChangeFunction={updateSources}
        headerColor={cleanColors.mediumHeader}
        paragraphColor={cleanColors.paragraph}
      />
      <HeaderTextArea
        header={sectionTypes.ABOUT}
        onChangeFunction={updateAchieveReq}
        headerColor={cleanColors.mediumHeader}
        paragraphColor={cleanColors.paragraph}
      />
      <Requirements
        reqDescColor={cleanColors.paragraph}
        reqNameColor={cleanColors.mediumHeader}
      />
    </div>
  );
}
