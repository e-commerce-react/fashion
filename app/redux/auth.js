import axios from 'axios'

const AUTHENTICATED = 'AUTHENTICATED'


export const authenticated = user => ({
  type: AUTHENTICATED,
  user
})

export const login = (email, password) => dispatch => {
  return axios.post('/api/auth/local/login', {
    email: email,
    password: password
  })
    .then(() => dispatch(whoami()))
    .catch(() => dispatch(whoami()))
}
  // dispatch =>
  //   axios.post('/api/auth/local/login', {
  //     email: email,
  //     password: password
  //   })
  //     .then(() => dispatch(whoami()))
  //     .catch(() => dispatch(whoami()))


export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))



export default (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}
