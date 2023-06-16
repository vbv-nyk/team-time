import {
  updateAchieveReq,
  updateContactReq,
  updateSources,
} from "@/app/redux/teamSlice";
import TeamCreatedBy from "../Common/teamCreatedBy";
import { cleanColors } from "@/app/services/colors";
import Requirements from "../Common/requirements";
import HeaderTextArea from "../Common/headerTextArea";
import { sectionTypes } from "@/app/services/types";
import TeamImage from "../Common/teamImage";

export default function Clean() {
  // const { img } = useSelector((state: RootState) => state.teamSlice);
  // const dispatch = useDispatch();
  return (
    <div
      style={{ backgroundColor: cleanColors.background }}
      className="flex flex-col gap-2 p-2"
    >
      <TeamCreatedBy
        teamNameColor={cleanColors.largeHeader}
        createdByColor={cleanColors.smallHeader}
        titleColor={cleanColors.mediumHeader}
      />
      <TeamImage />
      <HeaderTextArea
        header={sectionTypes.ABOUT}
        onChangeFunction={updateAchieveReq}
        headerColor={cleanColors.mediumHeader}
        paragraphColor={cleanColors.paragraph}
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
      <div className="flex flex-col gap-3">
        <div
          style={{ color: cleanColors.mediumHeader }}
          className="text-xl font-extrabold"
        >
          What We&apos;re Looking For In Our Teammates
        </div>
        <Requirements
          reqDescColor={cleanColors.paragraph}
          reqNameColor={cleanColors.smallHeader}
        />
      </div>
    </div>
  );
}
