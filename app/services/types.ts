export interface teamInterface {
  name: String;
  desc: String;
  img: String;
  reqs: [String];
  id: String;
}

export interface teamsInterface {
  teams: teamInterface[];
}
