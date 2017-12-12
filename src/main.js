let root = document.getElementById('root');

function loadAllRepos(apiUrl, user, array, callback) {
  const repoEndPoint = apiUrl + user + '/repos';
  axios.get(repoEndPoint)
    .then((response) => {
      const repoList = response.data;
      repoList.forEach((repoData, i) => {
        let r = new Repo(repoData, i);
        callback(r);
      });
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
    this.description = repoData.description;
    this.stars = repoData.stargazers_count;
  }
}

function createUlList (parent, text, bool) {
  let ul = document.createElement('ul');
  ul.id = text;
  if (bool) {
    ul.textContent = text;
  }
  parent.append(ul);
}

function createLiItem (parent, text) {
  let li = document.createElement('li');
  li.id = text;
  li.textContent = text;
  parent.append(li);
}

function renderRepos(repo) {
  createUlList(root, repo.id, true);
  let ulParent = document.getElementById(repo.id);
  let idChild = repo.id + 0.1;
  createUlList(ulParent, idChild, false);
  let ulChild = document.getElementById(idChild);
  Object.keys(repo).forEach((key, i) => {
    let textContent = key + ': ' + repo[key];
    if (i !== 0) {
      createLiItem(ulChild, textContent);
    }
  });
}

loadAllRepos('https://api.github.com/users/', 'AbbottEverett', [], renderRepos);
