function getDataForUser(user) {
  const repoEndPoint = `https://api.github.com/users/${user}/repos`;
  const userEndPoint = `https://api.github.com/users/${user}`;
  const repoPromise = axios.get(repoEndPoint);
  const userPromise = axios.get(userEndPoint);
  return Promise.all([userPromise, repoPromise]).then((response) =>{
    let data = {};
    data.userInfo = response[0].data;
    data.repoList = response[1].data;
    return data;
  });
}
