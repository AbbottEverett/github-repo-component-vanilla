/**************** SERVICE SUMMARY ******************/
/* The getDataForUser(user) service functionality is to
   return user data and repository data from Github.
   Parameter of (user) is expected to be a string. */

function getDataForUser(user) {
  // Set all Endpoints
  const repoEndPoint = `https://api.github.com/users/${user}/repos`;
  const userEndPoint = `https://api.github.com/users/${user}`;

  // Create all Promises
  const repoPromise = axios.get(repoEndPoint);
  const userPromise = axios.get(userEndPoint);

  /* Return resolution of all promises and construct a
     data object for the user. */
  return Promise.all([userPromise, repoPromise]).then((responses) =>{
    // Add additional properties to data for each GET request you make.
    let data = {};
    data.userInfo = responses[0].data;
    data.repoList = responses[1].data;
    return data;
  });
}
