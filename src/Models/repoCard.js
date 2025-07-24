export class RepoOwner {
  constructor(login, avatar_url) {
    this.login = login;
    this.avatar_url = avatar_url;
  }
}

export class Repo {
  constructor(id, name, description, stargazers_count, owner) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.stargazers_count = stargazers_count;
    this.owner = owner;
  }
}
