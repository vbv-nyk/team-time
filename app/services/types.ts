export interface teamInterface {
  name: string;
  desc?: string;
  img: string;
  title: string;
  createdBy: string;
  reqs: reqInterface[];
  placeholder: placeholderInterface;
  id: string;
}
export interface reqInterface {
  name: string;
  desc: string;
}

export interface frontPostInterface {
  name: string;
  img: string;
  title: string;
  createdBy: string;
  reqs: reqInterface;
}

export interface mainPostInterface extends frontPostInterface {
  desc?: string;
  placeholder: any;
}

export interface teamsInterface {
  teams: teamInterface[];
}

export interface requirementsColors {
  reqNameColor: string;
  reqDescColor: string;
}

export interface teamCreatedByInterface {
  teamNameColor: string;
  createdByColor: string;
  titleColor: string;
}

export interface headerTextAreaInterface {
  header: string;
  onChangeFunction: Function;
  headerColor: string;
  paragraphColor: string;
}

export enum sectionTypes {
  ABOUT = "What We're Trying To Achieve",
  SOURCES = "Sources for More Information",
  CONTACT = "How To Reach Out To Us",
}

export interface placeholderInterface {
  [key: string]: string;
}

export enum ThemeOption {
  CLEAN = "CLEAN",
  AVANI = "AVANI",
  DARK = "DARK",
  SIRI = "SIRI",
  ADHYA = "ADHYA",
}
