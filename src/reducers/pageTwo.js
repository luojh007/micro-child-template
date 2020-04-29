
const initState = {
  name: '我是第二个页面的reducer',
  userId: 1,
}

export const pageTwo = ( state = initState, action)=>{
  if ( action.type == 'getData'){
    return state;
  }else if(action.type == 'PAGETWO_GET'){
  }
  return state
}