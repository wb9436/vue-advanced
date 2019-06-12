const app = {
  state: {
    windowHeight: document.documentElement.clientHeight,
    isWeiXin: window.navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1,
    logInfo: ''
  },
  mutations: {
    SET_LOGIN_INFO: (state, logInfo) => {
      state.logInfo = logInfo
    }
  },
  actions: {
    SaveLogInfo ({ commit }, logInfo) {
      commit('SET_LOGIN_INFO', logInfo)
    }
  }
}

export default app
