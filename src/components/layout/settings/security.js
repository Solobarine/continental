const password_change = [
    {
        label: 'Old Password',
        type: 'password',
        name: 'old_password',
        pattern: "^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,20}$",
        autocomplete: 'old_password',
        required: true,
        error_message: 'Password should be 8-20 characters long with at least 1 letter and 1 number'
    },
    {
        label: 'New Password',
        type: 'new_password',
        name: 'new_password',
        pattern: "^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,20}$",
        autocomplete: 'new_password',
        required: true,
        error_message: 'Password should be 8-20 characters long with at least 1 letter and 1 number'
    },
    {
        label: 'Re-Type New Password',
        type: 'password',
        name: 'confirm_new_password',
        pattern: "^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,20}$",
        autocomplete: 'new_password',
        required: true,
        error_message: 'Password should be 8-20 characters long with at least 1 letter and 1 number'
    }
]

const email_change = [
    {
        label: 'Enter Your Email',
        type: 'email',
        name: 'email',
        pattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$',
        autocomplete: 'email',
        required: true,
        error_message: 'Enter a valid Email'
    },
    {
        label: 'Enter Your New Email',
        type: 'email',
        name: 'new_email',
        pattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$',
        autocomplete: 'new_email',
        required: true,
        error_message: 'Enter a valid Email'
    },
    {
        label: 'Enter Password',
        type: 'password',
        name: 'password',
        pattern: "^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,20}$",
        autocomplete: 'password',
        required: true,
        error_message: 'Password should be 8-20 characters long with at least 1 letter and 1 number'
    }
]

export { password_change, email_change }