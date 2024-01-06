const login_inputs = [
  {
    label: 'Enter Your Email',
    type: 'email',
    name: 'email',
    autocomplete: 'email',
    required: true,
    error_message: 'Enter a valid Email'
  },
  {
    label: 'Enter Your Password',
    type: 'password',
    name: 'password',
    pattern: '^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,20}$',
    autocomplete: 'password',
    required: true,
    error_message: 'Password should be 8-20 characters long with at least 1 letter and 1 number'
  }
]

const register_inputs = [
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
    pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',
    autocomplete: 'email',
    required: true,
    error_message: 'Enter a valid Email'
  },
  {
    label: 'Enter Your Password',
    type: 'password',
    name: 'password',
    pattern: '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,20}$',
    autocomplete: 'password',
    required: true,
    error_message: 'Password should be 8-20 characters long with at least 1 letter and 1 number'
  },
  {
    label: 'Confirm Password',
    type: 'password',
    name: 'confirm_password',
    pattern: '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,20}$',
    autocomplete: 'password',
    required: true,
    error_message: 'Password should be 8-20 characters long with at least 1 letter and 1 number'
  }
]

export { login_inputs, register_inputs }
