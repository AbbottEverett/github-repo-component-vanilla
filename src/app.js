class App {
  constructor() {
    this.form = null;
    this.userListComponent = null;
    this.userList = [];
    this.docRoot = document.getElementById('root');
  }
  init() {
    this.userListComponent = new UserListComponent(this.docRoot);
    this.createForm();
  }
  createForm() {
    // this.form = new Form(this.createUserListComponent.bind(this));
    this.form = new Form(this.userListComponent.addToUserList.bind(this.userListComponent));
    this.form.renderForm(this.docRoot);
  }
  createUserListComponent(user) {
    this.userList.push(user);
    this.userListComponent = new UserList(this.userList);
    this.userListComponent.renderUserList(this.docRoot);
  }
}

let app = new App();
app.init();
