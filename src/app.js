const root = document.getElementById('root');
const repoList = new RepoList('abbotteverett');

repoList.loadAllRepos(repoList.apiUrl, repoList.repoList, repoList.renderAllRepos);
