const root = document.getElementById('root');
const input = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let user = input.value;
  const newRepoList = new RepoList(user);
  newRepoList.loadAllRepos(newRepoList.apiUrl, newRepoList.repoList, newRepoList.renderAllRepos);
});
