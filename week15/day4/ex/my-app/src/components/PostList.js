import students from './Students.json';

const PostList = (props) => { 
    console.log(props);

    return(
        <div>
           {
               students.map(item=>{
                   return(
                       <>
                       <h2>{item.title}</h2> 
                       <h5>{item.content}</h5> <br/>
                       </>
                   )
               })
           }
        </div>   
    )
}
export default PostList