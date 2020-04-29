
const initState = {
  name: '我是自组件1',
}

export const subComponentOne = (state = initState, action) => {
  if(action.type == 'SUB_COM_TWO_ADD'){
    return {
      ...state,
      ...action.data
    }
  }
  return state;
}