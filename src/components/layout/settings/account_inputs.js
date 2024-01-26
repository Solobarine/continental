const update_inputs = [
  {
    label: 'First Name',
    type: 'text',
    name: 'first_name',
    validation: 'required|length:2,25',
    autocomplete: 'first_name',
    validation_messages: {
      required: 'First Name is Required',
      length: 'First Name should be between 2 and 25 Characters',
    },
  },
  {
    label: 'Last Name',
    type: 'text',
    name: 'last_name',
    validation: 'required|length:2,25',
    autocomplete: 'last_name',
    validation_messages: {
      required: 'Last Name is Required',
      length: 'Last Name should be between 2 and 25 Characters',
    },
  },
  {
    label: 'Date of Birth',
    type: 'date',
    name: 'date_of_birth',
    validation: 'required|date|date_before:2006-01-01',
    autocomplete: 'date_of_birth',
    validation_messages: {
      required: 'Date of Birth is Required',
      date_before: 'You must be 18 years of Age',
    },
  },
  {
    type: 'text',
    label: 'Enter Your Country',
    name: 'country',
    validation: 'required',
    autocomplete: 'country',
  },
  {
    label: 'Enter Your State',
    name: 'state',
    validation: 'required',
    autocomplete: 'state',
  },
  {
    label: 'Enter Your City',
    name: 'city',
    validation: 'required',
    autocomplete: 'city',
  },
]

export { update_inputs }
