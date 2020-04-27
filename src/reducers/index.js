import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { login } from './login'
import { pageOne } from './pageOne'
export default combineReducers({
  login,
  pageOne,
  router: routerReducer  //将 reducer 声明到 store 里面的 router 键
})