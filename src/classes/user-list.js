// Write description

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
    // Clears existing container
    const currentContainer = document.getElementById('userListContainer');
    if (currentContainer !== null) {
      document.getElementById('userListContainer').remove();
    }

    // Create new userContainer and set its id
    let userContainer = document.createElement('div');
    userContainer.id = 'userListContainer';

    // Cycle through all users in this.userList array and create
    // a new card for them.
    this.userList.forEach((user, i) => {
      // Create Card
      let userCard = document.createElement('div');
      userCard.classList = 'card user-card';
      userCard.id = 'card' + i;

      // Render User Card
      userCard.appendChild(this.renderUser(user, userCard));
      userCard.appendChild(this.renderRepoCarousel(user, i));

      // Append to the userContainer
      userContainer.appendChild(userCard);
    });

    // Append container to parent
    parent.appendChild(userContainer);
  }
  renderUser(user, userCard) {
    // Create User Elements (parent to child)
    let userSummary = document.createElement('div');
    let userTitleContainer = document.createElement('div');
    let userTitle = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('h2');
    let location = document.createElement('div');
    let button = document.createElement('button');
    let icon = document.createElement('i');
    let bio = document.createElement('div');

    // Set Element Classses & Attributes (parent to child)
    userSummary.classList = 'card-header user-card-header';
    userTitleContainer.classList = 'user-card-title';
    img.classList = 'user-icon';
    img.setAttribute('src', user.userInfo.avatar_url);
    name.textContent = user.userInfo.name;
    location.textContent = user.userInfo.location;
    button.classList = 'btn btn-danger remove-card-button';
    icon.classList = 'fa fa-times';
    icon.setAttribute('aria-hidden', true);
    bio.textContent = user.userInfo.bio;
    bio.classList = 'user-card-bio';

    // Apply Event Listeners
    button.addEventListener('click', ()=>{this.removeFromUserList(userCard)}, false);

    // Append Elements to User Card (child to parent)
    button.appendChild(icon);
    userTitle.appendChild(name);
    // checks if location exists
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
      // Create User Elements (parent to child)
      let itemContainer = document.createElement('div');
      let item = document.createElement('div');
      let header = document.createElement('div');
      let isFork = document.createElement('i');
      let name = document.createElement('h4');
      let subHeader = document.createElement('div');
      let language = document.createElement('h6');
      let lastUpdated = document.createElement('span');
      let description = document.createElement('p');

      // Set Element Classses & Attributes (parent to child)
      itemContainer.classList = 'carousel-item repo-container';
      // Sets the first repo in the list as the active repo
      if (i === 0) {
        itemContainer.classList.add('active');
      }
      item.classList = 'd-block card repo-content';
      header.classList = 'repo-header';
      subHeader.classList = 'repo-sub-header';
      // Sets repo icon depending if the repo is a fork or not
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
      // Formats the date properly
      let date = new Date(repo.updated_at);
      date = date.toString().split(' ').slice(1, 4).join(' ');
      lastUpdated.textContent = 'Updated On: ' + date;
      description.textContent = repo.description;

      // Append Elements to repoCarouselInner (child to parent)
      header.appendChild(isFork);
      header.appendChild(name);
      if (repo.language) {
        subHeader.appendChild(language);
      }
      subHeader.appendChild(lastUpdated);
      item.appendChild(header);
      item.appendChild(subHeader);
      item.appendChild(description);
      itemContainer.appendChild(item);
      parent.appendChild(itemContainer);
    });
  }
  renderRepoCarousel(user, i) {
    // Create User Elements (parent to child)
    let repoListContainer = document.createElement('div');
    let repoCarousel = document.createElement('div');
    let repoCarouselInner = document.createElement('div');
    let carouselControlLeft = document.createElement('a');
    let carouselControlRight = document.createElement('a');
    let prevIcon = document.createElement('span');
    let nextIcon = document.createElement('span');

    // Set Element Classses & Attributes (parent to child)
    repoListContainer.classList = 'card-body repo-list-container';
    repoCarousel.classList = 'carousel slide';
    repoCarousel.id = i;
    repoCarousel.setAttribute('data-interval', 'false');
    repoCarouselInner.classList = 'carousel-inner';

    // Define the Right Control of the Carousel
    carouselControlLeft.classList = 'carousel-control-prev slide-icon';
    carouselControlLeft.setAttribute('href', `#${i}`);
    carouselControlLeft.setAttribute('role', 'button');
    carouselControlLeft.setAttribute('data-slide', 'prev');
    prevIcon.classList = 'carousel-control-prev-icon';
    prevIcon.setAttribute('aria-hidden', 'true');

    // Define the Right Control of the Carousel
    carouselControlRight.classList = 'carousel-control-next slide-icon';
    carouselControlRight.setAttribute('href', `#${i}`);
    carouselControlRight.setAttribute('role', 'button');
    carouselControlRight.setAttribute('data-slide', 'next');
    nextIcon.classList = 'carousel-control-next-icon';
    nextIcon.setAttribute('aria-hidden', 'true');

    // Append all repos to repoCarouselInner
    this.renderRepos(user.repoList, repoCarouselInner);

    // Append Elements to repoListContainer (child to parent)
    carouselControlLeft.appendChild(prevIcon);
    carouselControlRight.appendChild(nextIcon);
    repoCarousel.appendChild(repoCarouselInner);
    repoCarousel.appendChild(carouselControlLeft);
    repoCarousel.appendChild(carouselControlRight);
    repoListContainer.appendChild(repoCarousel);

    return repoListContainer;
  }
}
