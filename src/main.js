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
    this.fork = repoData.fork;
    this.name = repoData.name;
    this.language = repoData.language;
    this.html_url = repoData.html_url;
    this.star_count = repoData.stargazers_count;
    this.watchers = repoData.watchers_count;
    this.forks_count = repoData.forks_count;
    this.description = repoData.description;
  }
  createElement(tag, textContent, classList) {
    let el = document.createElement(tag);
    if (textContent !== undefined) {
      el.textContent = textContent;
    }
    if (classList !== undefined) {
      el.classList = classList;
    }
    return el;
  }
  createIcon(classNames) {
    let icon = document.createElement('i');
    icon.classList = classNames;
    return icon;
  }
  renderRepo() {
    let repo = document.createDocumentFragment();
    let div = this.createElement('div', undefined, 'repo');
    let ul = this.createElement('ul');
    repo.append(div);
    div.append(ul);
    Object.keys(this).forEach((key, i) => {
      let li = this.createElement('li');
      switch(key) {
        case 'fork':
          if(this[key]) {
            li.append(this.createIcon('fa fa-code-fork'));
          } else {
            li.append(this.createIcon('fa fa-book'));
          }
          break;
        case 'name':
          let header = this.createElement('h2');
          let link = this.createElement('a', this[key]);
          link.setAttribute('href', this.html_url);
          header.append(link);
          li.append(header)
          li.classList = 'header';
          break;
        case 'language':
          if (this[key]) {
            li.append(this.createElement('h3', this[key]));
          }
          break;
        case 'forks_count':
        case 'watchers':
        case 'star_count':
          li.append(this.createIcon('fa fa-star'));
          li.append(this.createElement('span', this[key]));
          break;
        case 'html_url':
        case 'id':
          break;
        default:
          li.textContent = this[key];
          break;
      }
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
    div.append(repo.renderRepo());
  });
}

loadAllRepos(apiUrl, user, repoList, renderRepos);

button.addEventListener('click', () => {
  repoList.reverse();
  renderRepos(repoList);
});
