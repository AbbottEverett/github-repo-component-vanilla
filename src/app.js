class App {
  constructor() {
    this.form = null;
    this.userList = null;
    this.docRoot = document.getElementById('root');
  }
  init() {
    this.createForm();
  }
  createForm() {
    this.form = new Form();
    this.form.renderForm(this.docRoot);
  }
  receiveSearchInput() {
    this.searchVal = this.form.submitVal;
  }
}

let app = new App();
app.init();
