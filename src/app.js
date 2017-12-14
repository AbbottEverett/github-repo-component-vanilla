const root = document.getElementById('root');
const apiUrl = 'https://api.github.com/users/';
const user = 'abbotteverett';
let repoList = [];

function loadAllRepos(apiUrl, user, array, callback) {
  const repoEndPoint = apiUrl + user + '/repos';
  getRepoDataForUser(repoEndPoint, callback);
}

function renderAllRepos(repoList) {
  let currentRepoList = document.getElementById('repoList');
  if (currentRepoList) {
    currentRepoList.remove();
  }
  let div = document.createElement('div');
  div.id = "repoList";
  root.append(div);
  repoList.forEach((repo) => {
    div.append(repo.renderRepo());
  });
}

loadAllRepos(apiUrl, user, repoList, renderAllRepos);
