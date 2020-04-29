import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { login } from './login'
import { pageOne } from './pageOne'
import { pageTwo } from './pageTwo'
import { subComponentOne } from './subComponentOne'
import { subComponentTwo } from './subComponentTwo'
export default combineReducers({
  login,
  pageOne,
  pageTwo,
  subComponentOne,
  subComponentTwo,
  router: routerReducer  //将 reducer 声明到 store 里面的 router 键
})