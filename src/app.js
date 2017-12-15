class App {
  constructor() {
    this.form = null;
    this.userList = [];
    this.docRoot = document.getElementById('root');
  }
  init() {
    this.createForm();
  }
  createForm() {
    this.form = new Form(this.createUser.bind(this));
    this.form.renderForm(this.docRoot);
  }
  createUserList(userList) {
    // Clears existing container
    if (userList.length > 1) {
      document.getElementById('userListContainer').remove();
    }
    let userContainer = document.createElement('div');
    userContainer.id = 'userListContainer';
    userList.forEach((user) => {
      userContainer.appendChild(this.renderUser(user));
    });
    this.docRoot.appendChild(userContainer);
  }
  createUser(user) {
    this.userList.push(user);
    this.createUserList(this.userList);
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
}

let app = new App();
app.init();
