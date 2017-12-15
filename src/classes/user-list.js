class UserListComponent {
  constructor(parent) {
    this.userList = [];
    this.parent = parent;
  }
  addToUserList(user) {
    this.userList.push(user);
    this.renderUserListComponent(this.parent);
  }
  removeFromUserList(e){
    console.log(userCard.textContent);
  }
  renderUserListComponent(parent) {
    // Clears existing container
    if (this.userList.length > 1) {
      document.getElementById('userListContainer').remove();
    }
    let userContainer = document.createElement('div');
    userContainer.id = 'userListContainer';
    this.userList.forEach((user, i) => {
      let userCard = document.createElement('div');
      userCard.textContent = i;
      userCard.appendChild(this.renderUser(user));
      userCard.appendChild(this.renderRepos(user));
      userCard.addEventListener('click', this.removeFromUserList);
      userContainer.appendChild(userCard);
    });
    parent.appendChild(userContainer);
  }
  renderUser(user) {
    // Create User Elements
    let userCard = document.createElement('div');
    let p = document.createElement('p');
    let img = document.createElement('img');

    // Set Element Attributes
    p.textContent = user.userInfo.name;
    img.setAttribute('src', user.userInfo.avatar_url);
    img.setAttribute('width', '75px;');

    // Append Elements to User Card
    userCard.appendChild(img);
    userCard.appendChild(p);

    return userCard;
  }
  renderRepos(user) {
    let repoListData = user.repoList;
    let repoListContainer = document.createElement('div');
    repoListData.forEach((repo) => {
      let repoBox = document.createElement('span');
      repoBox.textContent = repo.name + '   |   ';
      repoListContainer.appendChild(repoBox);
    });
    return repoListContainer;
  }
}
