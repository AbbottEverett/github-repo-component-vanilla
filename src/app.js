class App {
  constructor() {
    this.form = null;
    this.userList = null;
    this.docRoot = document.getElementById('root');
    this.searchVal = '';
  }
  init() {
    this.createForm();
  }
  createForm() {
    this.form = new Form();
    this.form.renderForm(this.docRoot);
  }
}

let app = new App();
app.init();
