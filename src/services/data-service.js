function getRepoDataForUser(repoEndPoint, array, callback) {
  axios.get(repoEndPoint)
    .then((response) => {
      array = response.data.map((repoData, i) => {
        return new Repo(repoData, i);
      });
      callback(array);
    })
    .catch((error) => {
      console.log(error);
    }
  );
}
