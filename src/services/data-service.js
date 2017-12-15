// function getRepoDataForUser(repoEndPoint, array, callback) {
//   axios.get(repoEndPoint)
//     .then((response) => {
//       array = response.data.map((repoData, i) => {
//         return new Repo(repoData, i);
//       });
//       callback(array);
//     })
//     .catch((error) => {
//       console.log(error);
//     }
//   );
// }



function getDataForUser(user) {
  const repoEndPoint = `https://api.github.com/users/${user}/repos`;
  const userEndPoint = `https://api.github.com/users/${user}`;
  const repoPromise = axios.get(repoEndPoint);
  const userPromise = axios.get(userEndPoint);
  const userData = resolveUserPromises([repoPromise, userPromise]);
  return userData;
}

function resolveUserPromises(promiseArray) {
  let data = [];
  Promise.all(promiseArray).then((responses)=>{
    responses.forEach((response) => {
      data.push(response.data);
    });
  });
  return data;
}
