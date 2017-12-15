class Form {
  constructor(callback) {
    this.formGroup = document.createElement('form');
    this.createUser = callback;
  }

  formSubmit(event) {
    event.preventDefault();
    let input = document.getElementById('search-input');
    // Run data service here
    getDataForUser(input.value).then(this.createUser);
  }

  renderForm(parent) {
    // Create Form Elements
    const formContainer = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const button = document.createElement('button');

    // Add Form Attributes (bootstrap)
    formContainer.classList = 'form-group';
    label.textContent = 'Search for GitHub User';
    input.classList = 'form-control';
    input.setAttribute('type', 'text');
    input.id = 'search-input';
    button.classList = 'btn btn-primary';
    button.setAttribute('type', 'submit');
    button.textContent = 'Find User';

    // Add Event Listeners
    this.formGroup.addEventListener('submit', this.formSubmit.bind(this));

    // Append Elements to parent
    formContainer.appendChild(label);
    formContainer.appendChild(input);
    formContainer.appendChild(button);
    this.formGroup.appendChild(formContainer);
    parent.appendChild(this.formGroup);
  }

}
