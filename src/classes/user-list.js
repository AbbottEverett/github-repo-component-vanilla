class UserListComponent {
  constructor(parent) {
    this.userList = [];
    this.parent = parent;
  }
  addToUserList(user) {
    this.userList.push(user);
    this.renderUserListComponent(this.parent);
  }
  removeFromUserList(card) {
    const cardId = parseInt(card.id.replace('card', ''));
    this.userList.splice(cardId, 1);
    this.renderUserListComponent(this.parent);
  }
  renderUserListComponent(parent) {
    const currentContainer = document.getElementById('userListContainer');
    // Clears existing container
    if (currentContainer !== null) {
      document.getElementById('userListContainer').remove();
    }
    let userContainer = document.createElement('div');
    userContainer.id = 'userListContainer';
    this.userList.forEach((user, i) => {
      let userCard = document.createElement('div');
      userCard.classList = 'card user-card';
      userCard.id = 'card' + i;

      userCard.appendChild(this.renderUser(user, userCard));
      userCard.appendChild(this.renderRepoCarousel(user, i));
      //userCard.addEventListener('click', ()=>{this.removeFromUserList(userCard)}, false);
      userContainer.appendChild(userCard);
    });
    parent.appendChild(userContainer);
  }
  renderUser(user, userCard) {
    // Consider restructuring the header

    // Create User Elements
    let userSummary = document.createElement('div');
    let userTitleContainer = document.createElement('div');
    let userTitle = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('h2');
    let location = document.createElement('div');
    let button = document.createElement('button');
    let bio = document.createElement('div');

    // Set Element Attributes
    userSummary.classList = 'card-header user-card-header';
    userTitleContainer.classList = 'user-card-title';
    img.setAttribute('src', user.userInfo.avatar_url);
    img.classList = 'user-icon';
    name.textContent = user.userInfo.name;
    location.textContent = user.userInfo.location;
    button.classList = 'btn btn-danger remove-card-button';
    button.textContent = 'X';
    bio.textContent = user.userInfo.bio;
    bio.classList = 'user-card-bio';

    button.addEventListener('click', ()=>{this.removeFromUserList(userCard)}, false);

    // Append Elements to User Card
    userTitle.appendChild(name);
    userTitle.appendChild(location);
    userTitleContainer.appendChild(img);
    userTitleContainer.appendChild(userTitle);
    userTitleContainer.appendChild(button);
    userSummary.appendChild(userTitleContainer);
    userSummary.appendChild(bio);

    return userSummary;
  }
  renderRepos(repoList, parent) {
    repoList.forEach((repo, i) => {
      // Create elements
      let itemContainer = document.createElement('div');
      let item = document.createElement('div');
      let name = document.createElement('p');
      let language = document.createElement('p');
      let description = document.createElement('p');


      itemContainer.classList = 'carousel-item repo-container';
      if (i === 0) {
        itemContainer.classList.add('active');
      }
      item.classList = 'd-block w-100 repo-item';

      name.textContent = repo.name;
      language.textContent = repo.language;
      description.textContent = repo.description;

      item.appendChild(name);
      item.appendChild(language);
      item.appendChild(description);
      itemContainer.appendChild(item);
      parent.appendChild(itemContainer);
    });
  }
  renderRepoCarousel(user, i) {
    // Extract out sections into functions
    // add more carousel data
    let repoListContainer = document.createElement('div');
    let repoCarousel = document.createElement('div');
    let repoCarouselInner = document.createElement('div');
    let carouselControlLeft = document.createElement('a');
    let prevIcon = document.createElement('span');
    let carouselControlRight = document.createElement('a');
    let nextIcon = document.createElement('span');

    repoListContainer.classList = 'card-body';
    repoCarousel.classList = 'carousel slide';
    repoCarousel.setAttribute('data-interval', 'false');
    repoCarousel.id = i;
    repoCarouselInner.classList = 'carousel-inner';

    carouselControlLeft.classList = 'carousel-control-prev';
    carouselControlLeft.setAttribute('href', `#${i}`);
    carouselControlLeft.setAttribute('role', 'button');
    carouselControlLeft.setAttribute('data-slide', 'prev');
    prevIcon.classList = 'carousel-control-prev-icon';
    prevIcon.setAttribute('aria-hidden', 'true');

    carouselControlRight.classList = 'carousel-control-next';
    carouselControlRight.setAttribute('href', `#${i}`);
    carouselControlRight.setAttribute('role', 'button');
    carouselControlRight.setAttribute('data-slide', 'next');
    nextIcon.classList = 'carousel-control-next-icon';
    nextIcon.setAttribute('aria-hidden', 'true');

    this.renderRepos(user.repoList, repoCarouselInner);

    carouselControlLeft.appendChild(prevIcon);
    carouselControlRight.appendChild(nextIcon);

    repoCarousel.appendChild(repoCarouselInner);
    repoCarousel.appendChild(carouselControlLeft);
    repoCarousel.appendChild(carouselControlRight);
    repoListContainer.appendChild(repoCarousel);

    return repoListContainer;
  }
}
