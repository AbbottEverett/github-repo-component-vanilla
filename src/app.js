const root = document.getElementById('root');
const input = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let user = input.value;
  const newRepoList = new RepoList(user);
  // const newUserList = new UserInfoList(user);
  // newUserList.loadUser(newUserList.apirUrl, newUserList.userList, newUserList.renderAllUsers);
  newRepoList.loadAllRepos(newRepoList.apiUrl, newRepoList.repoList, newRepoList.renderAllRepos);
});
