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
      userCard.classList = 'card user-card';
      userCard.appendChild(this.renderUser(user));
      userCard.appendChild(this.renderRepos(user));
      userCard.addEventListener('click', this.removeFromUserList);
      userContainer.appendChild(userCard);
    });
    parent.appendChild(userContainer);
  }
  renderUser(user) {
    // Create User Elements
    let userSummary = document.createElement('div');
    
    let textTitle = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('h2');
    let location = document.createElement('div');
    let bio = document.createElement('div');

    // Set Element Attributes
    userSummary.classList = 'card-header user-card-header';
    textTitle.classList = 'user-card-title';
    img.setAttribute('src', user.userInfo.avatar_url);
    img.classList = 'user-icon';
    name.textContent = user.userInfo.name;
    location.textContent = user.userInfo.location;
    bio.textContent = user.userInfo.bio;
    bio.classList = 'user-card-bio';

    // Append Elements to User Card
    textTitle.appendChild(name);
    textTitle.appendChild(location);
    userSummary.appendChild(img);
    userSummary.appendChild(textTitle);
    userSummary.appendChild(bio);

    return userSummary;
  }
  renderRepos(user) {
    let repoListData = user.repoList;
    let repoListContainer = document.createElement('div');
    repoListContainer.classList = 'card-body';
    repoListData.forEach((repo) => {
      let repoBox = document.createElement('span');
      repoBox.textContent = repo.name + '   |   ';
      repoListContainer.appendChild(repoBox);
    });
    return repoListContainer;
  }
}
