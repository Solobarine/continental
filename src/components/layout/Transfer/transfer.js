const transfer_inputs = [
  {
    label: 'Enter Amount',
    type: 'number',
    name: 'amount',
    pattern: '^[0-9]{6}$',
    autocomplete: 'amount',
    required: true,
    error_message: 'Enter a Valid Amount',
  },
]

export default transfer_inputs
