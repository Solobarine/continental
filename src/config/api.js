const status = 'development'

const domain = (status === 'development') ? 'http://localhost:8000/api' : 'https:whatever.com'

export default domain