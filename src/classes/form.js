class Form {
  constructor(callback) {
    this.formGroup = document.createElement('form');
    this.createUser = callback;
  }

  formSubmit(event) {
    event.preventDefault();
    let input = document.getElementById('search-input');
    let feedback = document.getElementById('form-feedback');
    if (input.value === '') {
      feedback.textContent = 'Please enter a username into the input field.';
    } else {
      feedback.textContent = '';
      // Run data service here
      getDataForUser(input.value).then(this.createUser);
      input.value = '';
    }
  }

  renderForm(parent) {
    // Create Form Elements
    const formContainer = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const feedback = document.createElement('div');
    const button = document.createElement('button');

    // Add Form Attributes (bootstrap)
    formContainer.classList = 'form-group';
    label.classList = 'form-control-label';
    label.textContent = 'Search for GitHub User';
    input.classList = 'form-control';
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Please type in a Github username...');
    input.id = 'search-input';
    feedback.id = 'form-feedback';
    button.classList = 'btn btn-primary';
    button.setAttribute('type', 'submit');
    button.textContent = 'Find User';
    this.formGroup.classList = 'doc-form';
    // Add Event Listeners
    this.formGroup.addEventListener('submit', this.formSubmit.bind(this));

    // Append Elements to parent
    formContainer.appendChild(label);
    formContainer.appendChild(input);
    formContainer.appendChild(feedback);
    formContainer.appendChild(button);
    this.formGroup.appendChild(formContainer);
    parent.appendChild(this.formGroup);
  }

}
