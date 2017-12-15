class App {
  constructor() {
    this.form = null;
    this.docRoot = document.getElementById('root');
  }
  init() {
    this.createForm();
  }
  createForm() {
    this.form = new Form(this.createUser.bind(this));
    this.form.renderForm(this.docRoot);
  }
  createUser(user) {
    console.log(this);
    console.log(user);
  }
  receiveSearchInput() {
    this.searchVal = this.form.submitVal;
  }
}

let app = new App();
app.init();
