import axios from 'axios';

const auth = {
    login: function (username, password, cb) {
        if (localStorage.token) {
            if (cb) cb(true)
            return
        }
        this.getToken(username, password, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
            } else {
                if (cb) cb(false)
            }
        })
    },

    logout: () => {
        delete localStorage.token
    },

    loggedIn: () => {
        return !!localStorage.token
    },

    signUp: (request, cb) => {
      axios({
        method: 'POST',
        url: '/api/user/create/',
        data: request
      })
      .then((response) => {
        if (response.headers.authorization) {
          localStorage.token = response.headers.authorization
          // console.log('AUTHENTICATED, TOKEN STORED IN LOCAL STORAGE')
          cb({authenticated:true})
        }
      })
      .catch( (err) => {
        console.log('err', err)
      })
    },

    getUser: (cb) => {
      var token = localStorage.token
      axios({
        method: 'GET',
        url: '/api/token/',
        headers: {
          Authorization: "Token " + `${token}`
        }
      }).then( (res) => {
        // console.log('SUCCESS GETTING USER', res)
        cb(res.data)
      })
      .catch( (err) => {
        console.log('ERROR', err)
      })
    },

    getOtherUser: (id, cb) => {
      var token = localStorage.token
      axios({
        method: 'GET',
        url: "/api/users/" + `${id}`,
        headers: {
          Authorization: "Token " + `${token}`
        }
      })
      .then( (res) => {
        // console.log('RETRIEVED OTHER USER', res)
        cb(res)
      })
      .catch( (err) => {
        console.log('ERROR GETTING OTHER USER', err)
      })
    },

    getToken: (username, password, cb) => {
        axios({
            method: 'POST',
            url: '/api/obtain-auth-token/',
            data: {
                username: username,
                password: password
            }}).then((response) => {
              // console.log(response)
              cb({
                  authenticated: true,
                  token: response.data.token
              })
            })
        }
}

export default auth;
