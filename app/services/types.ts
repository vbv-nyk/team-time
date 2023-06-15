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
  nameColor: string;
  paragraphColor: string;
}

export interface placeholderInterface {
  "What Are We Trying To Achieve": string;
  "How To Contact Us": string;
  "Sources for More Information": string;
  [key: string]: string;
}
