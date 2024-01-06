const update_inputs = [
  {
    label: 'First Name',
    type: 'text',
    name: 'first_name',
    pattern: '^[A-Za-z]{3,16}$',
    autocomplete: 'first_name',
    required: true,
    error_message: 'First Name should be 3-16 characters long with no special characters'
  },
  {
    label: 'Last Name',
    type: 'text',
    name: 'last_name',
    pattern: '^[A-Za-z]{3,16}$',
    autocomplete: 'last_name',
    required: true,
    error_message: 'Last Name should be 3-16 characters long with no special characters'
  },
  {
    label: 'Enter Your Email',
    type: 'email',
    name: 'email',
    pattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    autocomplete: 'email',
    required: true,
    error_message: 'Enter a valid Email'
  },
  {
    label: 'Enter Your Password',
    type: 'password',
    name: 'password',
    pattern: '^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,20}$',
    autocomplete: 'false',
    required: true,
    error_message: 'Password should be 8-20 characters long with at least 1 letter and 1 number'
  },
  {
    label: 'Date of Birth',
    type: 'date',
    name: 'dob',
    pattern: undefined,
    autocomplete: 'dob',
    required: true,
    error_message: 'Enter a valid Date'
  }
]

const select_fields = [
  {
    label: 'Select Country',
    name: 'country',
    required: true,
    pattern: '',
    data: [],
    autocomplete: 'country'
  },
  {
    label: 'Select State',
    name: 'state',
    required: true,
    pattern: '',
    data: [],
    autocomplete: 'state'
  },
  {
    label: 'Select City',
    name: 'city',
    required: true,
    pattern: '',
    data: [],
    autocomplete: 'city'
  }
]

export { update_inputs, select_fields }
