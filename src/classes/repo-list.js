class RepoList {
  constructor() {
    this.repoList: [],
    this.user: '',
    this.apiUrl: `https://api.github.com/users/${this.user}/repos`,
  }
  createNewRepo(repoData, index) {
    return new Repo(repoData, index);
  }
  loadAllRepos(apiUrl, array, callback) {
    //getRepoDataForUser(apiUrl, array, callback);
  }
  renderAllRepos(repoList) {
    let div = document.createElement('div');
    this.repoList.forEach((repo) => {
      div.append(repo.renderRepo());
    });
    root.append(div);
  }
}
