export class RepoOwner {
  constructor(login, avatar_url) {
    this.login = login ?? '';
    this.avatar_url = avatar_url ?? '';
  }
}

export class Repo {
  constructor(id, name, description, stargazers_count, owner) {
    this.id = id ?? null;
    this.name = name ?? '';
    this.description = description ?? '';
    this.stargazers_count = stargazers_count ?? 0;
    this.owner = owner ?? new RepoOwner('', '');
  }
}
