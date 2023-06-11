export interface teamInterface {
  name: string;
  desc: string;
  img: string;
  createdBy: string;
  reqs: string[];
  id: string;
}

export interface teamsInterface {
  teams: teamInterface[];
}
