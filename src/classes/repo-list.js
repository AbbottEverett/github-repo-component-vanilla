// class RepoList {
//   constructor(user) {
//     this.repoList = [];
//     this.user = user;
//     this.apiUrl = `https://api.github.com/users/${this.user}/repos`;
//   }
//   createNewRepo(repoData, index) {
//     return new Repo(repoData, index);
//   }
//   loadAllRepos(apiUrl, array, callback) {
//     getRepoDataForUser(apiUrl, array, callback);
//   }
//   renderAllRepos(repoList) {
//     // let currentRepoList = document.querySelector('.repoList');
//     // if (currentRepoList) {
//     //   currentRepoList.remove();
//     // }
//     let div = document.createElement('div');
//     div.classList = 'repoList';
//     repoList.forEach((repo) => {
//       div.append(repo.renderRepo());
//     });
//     root.append(div);
//   }
// }
