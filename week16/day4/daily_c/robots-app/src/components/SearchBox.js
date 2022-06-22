const SearchBox = (props)=> {
  return(
    <input type='text' onChange={(e)=>props.setSearchText(e.target.value)}/>
  )
}

export default SearchBox;