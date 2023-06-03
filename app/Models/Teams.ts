import Team from "./Team";

enum genre {
  software,
  hackathon,
  music,
  gaming,
}

interface TeamInterface {
  name: String;
  desc: String;
  reqs: [String];
  id: String;
  type: genre;
}

export default function Teams() {
  const teams: TeamInterface[] = [];

  function addTeam(team: TeamInterface) {
    teams.push(team);
  }

  function removeTeam(teamId: String) {
    const index = teams.findIndex((team) => team.id === teamId);
    if (index !== -1) {
      teams.splice(index, 1);
    }
  }

  function updateTeam(updatedTeam: TeamInterface) {
    const index = teams.findIndex((team) => team.id === updatedTeam.id);
    if (index !== -1) {
      teams[index] = updatedTeam;
    }
  }

  function filterTeam(
    filter: (team: TeamInterface) => boolean
  ): TeamInterface[] {
    return teams.filter(filter);
  }

  return {
    teams,
    addTeam,
    removeTeam,
    updateTeam,
    filterTeam,
  };
}
