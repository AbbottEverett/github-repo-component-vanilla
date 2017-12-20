/**************** CLASS SUMMARY ******************/
/* The Form class's functionality is for creating
   and rendering a user input form to a parent div
   (Ex. id="root") and retreaving feedback from the
   data-service. */

class Form {
  constructor(callback) {
    this.formGroup = document.createElement('form');
    /* Callback is utilized for routing returned data to the App class.
       Consider refactoring the class constructor if actions other than
       creating a new user is desired. */
    this.createUser = callback;
  }
  formSubmit(event) {
    // Avoid page reload
    event.preventDefault();

    // Find references to all elements in the form.
    let input = document.getElementById('search-input');
    let feedback = document.getElementById('form-feedback');

    // Check the form input value
    if (input.value === '') {
      feedback.textContent = 'Please enter a username into the input field.';
    } else {
      feedback.textContent = '';

      /* Run data-service.js and execute the callback defined in
         the form constructor based on the returned data object.
         Refer to data-service.js for object structure. */
      getDataForUser(input.value).then(this.createUser);
      input.value = '';
    }
  }
  renderForm(parent) {
    // Takes in a parent element

    // Create Form Elements (parent to child)
    const formContainer = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const feedback = document.createElement('div');
    const button = document.createElement('button');

    // Add Form Classes & Attributes (parent to child)
    this.formGroup.classList = 'doc-form';
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

    // Add Event Listeners (parent to child)

    /* this.formSubmit.bind(this) ensures that this.formSubmit() is
       called from the instance of the class, not from this.formGroup. */
    this.formGroup.addEventListener('submit', this.formSubmit.bind(this));

    // Append Elements to formGroup, then parent (child to parent)
    formContainer.appendChild(label);
    formContainer.appendChild(input);
    formContainer.appendChild(feedback);
    formContainer.appendChild(button);
    this.formGroup.appendChild(formContainer);
    parent.appendChild(this.formGroup);
  }
}
