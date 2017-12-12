let root = document.getElementById('root');

function loadAllRepos(apiUrl, user, array, callback) {
  const repoEndPoint = apiUrl + user + '/repos';
  axios.get(repoEndPoint)
    .then((response) => {
      response.data.forEach((repo) => {
        array.push(repo);
      });
      callback(array);
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

function renderRepos(repoList) {
  repoList.forEach((repoData, i) => {
    let r = new Repo(repoData, i);
    console.log(r);
  });
}

loadAllRepos('https://api.github.com/users/', 'AbbottEverett', [], renderRepos);
