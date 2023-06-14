export interface teamInterface {
  name: string;
  desc?: string;
  img: string;
  title: string;
  createdBy: string;
  reqs: string[];
  placeholder: any;
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
