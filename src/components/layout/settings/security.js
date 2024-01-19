const password_change = [
  {
    label: 'Old Password',
    type: 'password',
    name: 'old_password',
    validation: 'required|length:8,20',
    validation_messages: {
      required: 'Old Password is Required',
      length: 'Password should be between 8 and 20 Characters',
    },
  },
  {
    label: 'New Password',
    type: 'password',
    name: 'password',
    validation: 'required|length:8,20',
  },
  {
    label: 'Re-Type Password',
    type: 'password',
    name: 'confirm_password',
    validation: 'required|confirm',
    validation_messages: {
      required: 'Confirm Password is Required',
      confirm: 'Passwords does not Match',
    },
  },
]

const email_change = [
  {
    label: 'Enter Your Email',
    type: 'email',
    name: 'email',
    validation: 'required|email',
    autocomplete: 'email',
    validation_messages: { required: 'Enter a valid Email' },
  },
  {
    label: 'Enter Your New Email',
    type: 'email',
    name: 'new_email',
    validation: 'required|email',
    autocomplete: 'new_email',
    validation_messages: {
      required: 'Enter a valid Email',
      email: 'Email must be a valid email',
    },
  },
  {
    label: 'Enter Password',
    type: 'password',
    name: 'password',
    validation: 'required|length:8,20',
  },
]

export { password_change, email_change }

