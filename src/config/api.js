const status = 'production'

const domain = (status === 'development') ? 'http://localhost:8000/api' : 'https://morning-refuge-28092-b630b51cff9f.herokuapp.com/api'

export default domain