const root = document.getElementById('root');
const button = document.querySelector('button');
const apiUrl = 'https://api.github.com/users/';
const user = 'abbotteverett';
let repoList = [];

function loadAllRepos(apiUrl, user, array, callback) {
  const repoEndPoint = apiUrl + user + '/repos';
  axios.get(repoEndPoint)
    .then((response) => {
      // const repoList = response.data;
      repoList = response.data.map((repoData, i) => {
        return new Repo(repoData, i);
      });
      callback(repoList);
    })
    .catch((error) => {
      console.log(error);
    });
}

class Repo {
  constructor(repoData, id) {
    this.id = id;
    this.name = repoData.name;
    this.language = repoData.language;
    this.html_url = repoData.html_url;
    this.fork = repoData.fork;
    this.star_count = repoData.stargazers_count;
    this.watchers = repoData.watchers_count;
    this.description = repoData.description;
    this.forks_count = repoData.forks_count;
  }
  render() {
    let repo = document.createDocumentFragment();
    let div = document.createElement('div');
    div.classList.add('repo');
    repo.append(div);
    let ul = document.createElement('ul');
    div.append(ul);
    Object.keys(this).forEach((key) =>{
      let li = document.createElement('li');
      li.textContent = key + ': ' + this[key];
      ul.append(li);
    });
    return repo;
  }
}

function renderRepos(repoList) {
  let currentRepoList = document.getElementById('repoList');
  if (currentRepoList) {
    currentRepoList.remove();
  }
  let div = document.createElement('div');
  div.id = "repoList";
  root.append(div);
  repoList.forEach((repo) => {
    div.append(repo.render());
  });
}

loadAllRepos(apiUrl, user, repoList, renderRepos);

button.addEventListener('click', () => {
  repoList.reverse();
  renderRepos(repoList);
});
