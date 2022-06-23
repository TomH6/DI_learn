
export const setNames = (value1,value2) => {
  return{
    type:value1,
    payload:value2
  }
}


export const fetchResults = () => (dispatch, getState) => {
  
  console.log(getState())
  const {fname, sname} = getState().name_reducer;
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${fname}&fname=${sname}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c"
      }
    })
    .then(res => {
     return res.json()
    })
    .then(data => {
      dispatch ({
        type: 'FETCH_RES',
        payload: data
      })
    })
    .catch(err => {
      console.log(err);
    })
}
