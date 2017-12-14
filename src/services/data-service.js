function getRepoDataForUser(repoEndPoint, callback) {
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
    }
  );
}
