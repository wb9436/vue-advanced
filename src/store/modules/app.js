import Cookies from 'js-cookie'

const TokenKey = 'LOGIN_TOKEN' //登录Token缓存Key

const app = {
  state: {
    windowHeight: document.documentElement.clientHeight,
    isWeiXin: window.navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1,
    token: Cookies.get(TokenKey),
    logInfo: ''
  },
  mutations: {
    SET_LOGIN_TOKEN: (state, token) => {
      state.token = token
      Cookies.set(TokenKey, token)
    },
    SET_LOGIN_INFO: (state, logInfo) => {
      state.logInfo = logInfo
    }
  },
  actions: {
    SaveLoginToken ({ commit }, token) {
      commit('SET_LOGIN_TOKEN', token)
    },
    SaveLogInfo ({ commit }, logInfo) {
      commit('SET_LOGIN_INFO', logInfo)
    }
  }
}

export default app
