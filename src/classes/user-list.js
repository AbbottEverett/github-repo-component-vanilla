class UserListComponent {
  constructor(parent) {
    this.userList = [];
    this.parent = parent;
  }
  addToUserList(user) {
    this.userList.push(user);
    this.renderUserListComponent(this.parent);
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
    // Extract out sections into functions
    // Get id for each user for carousel functionality
    // add more carousel data
    let repoListData = user.repoList;
    let repoListContainer = document.createElement('div');
    let repoCarousel = document.createElement('div');
    let repoCarouselInner = document.createElement('div');
    let carouselControlLeft = document.createElement('a');
    let prevIcon = document.createElement('span');
    let carouselControlRight = document.createElement('a');
    let nextIcon = document.createElement('span');

    repoListContainer.classList = 'card-body';
    repoCarousel.classList = 'carousel slide';
    repoCarousel.setAttribute('data-ride', 'carousel');
    repoCarousel.id = 0;
    repoCarouselInner.classList = 'carousel-inner';

    carouselControlLeft.classList = 'carousel-control-prev';
    carouselControlLeft.setAttribute('href', '#0');
    carouselControlLeft.setAttribute('role', 'button');
    carouselControlLeft.setAttribute('data-slide', 'prev');
    prevIcon.classList = 'carousel-control-prev-icon';
    prevIcon.setAttribute('aria-hidden', 'true');

    carouselControlRight.classList = 'carousel-control-next';
    carouselControlRight.setAttribute('href', '#0');
    carouselControlRight.setAttribute('role', 'button');
    carouselControlRight.setAttribute('data-slide', 'next');
    nextIcon.classList = 'carousel-control-next-icon';
    nextIcon.setAttribute('aria-hidden', 'true');

    repoListData.forEach((repo, i) => {
      let itemContainer = document.createElement('div');
      let item = document.createElement('div');
      itemContainer.classList = 'carousel-item repo-container';
      if (i === 0) {
        itemContainer.classList.add('active');
      }
      item.classList = 'd-block w-100';
      item.textContent = repo.name;
      itemContainer.appendChild(item);
      repoCarouselInner.appendChild(itemContainer);
    });

    carouselControlLeft.appendChild(prevIcon);
    carouselControlRight.appendChild(nextIcon);

    repoCarousel.appendChild(repoCarouselInner);
    repoCarousel.appendChild(carouselControlLeft);
    repoCarousel.appendChild(carouselControlRight);
    repoListContainer.appendChild(repoCarousel);

    return repoListContainer;
  }
}
