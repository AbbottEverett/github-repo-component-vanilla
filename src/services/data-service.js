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

function getUserData (userEndPoint, array, callback) {
  axios.get(userEndPoint)
    .then((response) => {
      array.push(new UserInfoCard(response.data));
      callback(array[array.length-1]);
    })
    .catch((error) => {
        console.log(error);
    });
}
