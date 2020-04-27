
const initState = {
  name: '我是第一个页面的reducer',
  userId: 1,
}

export const pageOne = ( state = initState, action)=>{
  if ( action.type == 'getData'){
    return state;
  }
  return state
}