const transfer_inputs = [
    {
        label: 'Amount',
        type: 'number',
        name: 'amount',
        pattern: '^[0-9]{6}$',
        autocomplete: 'amount',
        required: true,
        error_message: 'Enter a Valid Amount',
    },
    {
        label: 'Description',
        type: 'text',
        name: 'description',
        pattern: undefined,
        autocomplete: 'description',
        required: false,
        error_message: undefined
    }
]

export default transfer_inputs