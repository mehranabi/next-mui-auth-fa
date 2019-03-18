export default class AuthService {
  isLoggedIn = () => {
    const token = this.getToken()
    return token && token != undefined && token != ''
  }

  setToken = jwt => {
    localStorage.setItem('jwt_token', jwt)
  }

  removeToken = jwt => {
    localStorage.setItem('jwt_token', '')
  }

  getToken = () => {
    return localStorage.getItem('jwt_token')
  }

  getAuth = () => {
    return {
      token: this.getToken(),
      profile: {
        first_name: 'مهران',
        last_name: 'عبقری',
      },
    }
  }
}
