const initsState = {
  fname:'',
  sname:'',
  results: {}
};

export const name_reducer = (state=initsState, action={}) => {
  switch (action.type) {
    case 'SET_FNAME':
      return {...state, fname:action.payload}
    case 'SET_SNAME':
      return {...state, sname:action.payload}
    default:
      return {...state}
  }
};

export const res_reducer = (state=initsState, action={}) => {
  switch (action.type) {
    
    case 'FETCH_RES':
      return {...state, results:action.payload}
    default:
      return {...state}
  }
};

