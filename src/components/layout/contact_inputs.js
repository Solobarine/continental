const contact_inputs = [
    {
        label: 'First Name',
        type: 'text',
        name: 'first_name',
        pattern: '^[A-Za-z]{3,16}$',
        autocomplete: 'first_name',
        required: true,
        error_message: 'First Name should be 3-16 characters long with no special characters',
    },
    {
        label: 'Last Name',
        type: 'text',
        name: 'last_name',
        pattern: '^[A-Za-z]{3,16}$',
        autocomplete: 'last_name',
        required: true,
        error_message: 'Last Name should be 3-16 characters long with no special characters',
    },
    {
        label: 'Enter Your Email',
        type: 'email',
        name: 'email',
        pattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$',
        autocomplete: 'email',
        required: true,
        error_message: 'Enter a valid Email'
    }
]

export default contact_inputs