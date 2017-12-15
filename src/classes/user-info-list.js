class UserInfoList {
  constructor(user) {
    this.user = user;
    this.apiUrl = `https://api.github.com/users/${this.user}`;
    this.userCard = [];
  }
  loadUser(apiUrl, callback) {
    getUserData(apiUrl, callback);
  }
  renderAllUsers(userList) {
    let div = document.createElement('div');
    div.classList = 'repoList';
    userList.forEach((user) => {
      div.append(user.renderUserCard());
    });
    root.append(div);
  }
}
