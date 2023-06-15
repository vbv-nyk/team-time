export interface teamInterface {
  name: string;
  desc?: string;
  img: string;
  title: string;
  createdBy: string;
  reqs: string[];
  placeholder: placeholderInterface;
  id: string;
}

export interface frontPostInterface {
  name: string;
  img: string;
  title: string;
  createdBy: string;
  reqs: string[];
}

export interface mainPostInterface extends frontPostInterface {
  desc?: string;
  placeholder: any;
}

export interface teamsInterface {
  teams: teamInterface[];
}

export interface placeholderInterface {
  "What Are We Trying To Achieve": string;
  "How To Contact Us": string;
  "Sources for More Information": string;
}
