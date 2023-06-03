enum genre {
  software,
  hackathon,
  music,
  gaming,
}

export default function Team(
  name: String,
  desc: String,
  reqs: [String],
  type: genre,
  id: String
) {
  function updateName(newName: String) {
    name = newName;
  }

  function updateDesc(newDesc: String) {
    desc = newDesc;
  }

  function updateReqs(newReqs: [String]) {
    reqs = newReqs;
  }

  function updateGenre(newType: genre) {
    type = newType;
  }

  function getName() {
    return name;
  }

  function getDesc() {
    return desc;
  }

  function getReqs() {
    return reqs;
  }

  function getType() {
    return type;
  }

  function getId() {
    return id;
  }

  return {
    updateName,
    updateDesc,
    updateReqs,
    updateGenre,
    getName,
    getDesc,
    getReqs,
    getType,
    getId,
  };
}
