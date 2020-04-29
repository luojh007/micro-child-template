
const initState = {
  name: '我是第一个页面的reducer',
  userId: 1,
  data: {},
}

export const pageOne = (state = initState, action) => {
  if (action.type == 'getData') {
    return state;
  }
  else if (action.type == 'saveData') {
    let { data } = action;
    return { ...state, data }
  }
  return state
}