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
    let icon = document.createElement('i');
    let bio = document.createElement('div');

    // Set Element Attributes
    userSummary.classList = 'card-header user-card-header';
    userTitleContainer.classList = 'user-card-title';
    img.setAttribute('src', user.userInfo.avatar_url);
    img.classList = 'user-icon';
    name.textContent = user.userInfo.name;
    location.textContent = user.userInfo.location;
    button.classList = 'btn btn-danger remove-card-button';
    icon.classList = 'fa fa-times';
    icon.setAttribute('aria-hidden', true);
    bio.textContent = user.userInfo.bio;
    bio.classList = 'user-card-bio';

    button.addEventListener('click', ()=>{this.removeFromUserList(userCard)}, false);

    // Append Elements to User Card
    button.appendChild(icon);
    userTitle.appendChild(name);
    if (user.userInfo.location) {
      userTitle.appendChild(location);
    }
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
      let header = document.createElement('div');
      let isFork = document.createElement('i');
      let name = document.createElement('h4');
      let subHeader = document.createElement('div');
      let language = document.createElement('h6');
      let lastUpdated = document.createElement('span');
      let description = document.createElement('p');


      itemContainer.classList = 'carousel-item repo-container';
      if (i === 0) {
        itemContainer.classList.add('active');
      }
      item.classList = 'd-block card repo-content';
      header.classList = 'repo-header';
      subHeader.classList = 'repo-sub-header';
      if (repo.fork) {
        isFork.classList = 'fa fa-code-fork fa-2x repo-icon';
      } else {
        isFork.classList = 'fa fa-book fa-2x repo-icon';
      }

      isFork.setAttribute('aria-hidden', true);
      name.classList = 'card-title';
      name.textContent = repo.name;
      language.classList = 'card-subtitle language';
      language.textContent = repo.language;
      // Formats date properly
      let date = new Date(repo.updated_at);
      date = date.toString().split(' ').slice(1, 4).join(' ');
      lastUpdated.textContent = 'Updated: ' + date;
      description.textContent = repo.description;

      header.appendChild(isFork);
      header.appendChild(name);
      item.appendChild(header);
      if (repo.language) {
        subHeader.appendChild(language);
      }
      subHeader.appendChild(lastUpdated);
      item.appendChild(subHeader);
      item.appendChild(description);
      itemContainer.appendChild(item);
      parent.appendChild(itemContainer);
    });
  }
  renderRepoCarousel(user, i) {

    let repoListContainer = document.createElement('div');
    let repoCarousel = document.createElement('div');
    let repoCarouselInner = document.createElement('div');
    let carouselControlLeft = document.createElement('a');
    let prevIcon = document.createElement('span');
    let carouselControlRight = document.createElement('a');
    let nextIcon = document.createElement('span');

    repoListContainer.classList = 'card-body repo-list-container';
    repoCarousel.classList = 'carousel slide';
    repoCarousel.setAttribute('data-interval', 'false');
    repoCarousel.id = i;
    repoCarouselInner.classList = 'carousel-inner';

    carouselControlLeft.classList = 'carousel-control-prev slide-icon';
    carouselControlLeft.setAttribute('href', `#${i}`);
    carouselControlLeft.setAttribute('role', 'button');
    carouselControlLeft.setAttribute('data-slide', 'prev');
    prevIcon.classList = 'carousel-control-prev-icon';
    prevIcon.setAttribute('aria-hidden', 'true');

    carouselControlRight.classList = 'carousel-control-next slide-icon';
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
