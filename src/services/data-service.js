function getDataForUser(user) {
  const repoEndPoint = `https://api.github.com/users/${user}/repos`;
  const userEndPoint = `https://api.github.com/users/${user}`;
  const repoPromise = axios.get(repoEndPoint);
  const userPromise = axios.get(userEndPoint);
  return Promise.all([userPromise, repoPromise]).then((responses) =>{
    let data = {};
    data.userInfo = responses[0].data;
    data.repoList = responses[1].data;
    return data;
  });
}
