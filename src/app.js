(function() {

  /**************** CLASS SUMMARY ******************/
  /* The App class's functionality is for generating
     high level page components and routing data. If
     additional components are created, add references
     to them in the constructor function and instantiate
     them in the App's init function. If you are using this
     component in your own project, consider moving the App
     class ot the classes directory. */

  class App {
    constructor() {
      this.form = null;
      this.userListComponent = null;
      this.docRoot = document.getElementById('root');
    }
    init() {
      this.userListComponent = new UserListComponent(this.docRoot);
      this.createForm();
    }
    createForm() {
      this.form = new Form(this.userListComponent.addToUserList.bind(this.userListComponent));
      this.form.renderForm(this.docRoot);
    }
    createUserListComponent(user) {
      this.userList.push(user);
      this.userListComponent = new UserList(this.userList);
      this.userListComponent.renderUserList(this.docRoot);
    }
  }
  
  // Initialize Application
  let app = new App();
  app.init();

})();
