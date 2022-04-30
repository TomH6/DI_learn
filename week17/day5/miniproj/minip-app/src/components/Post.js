import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import { deletePost } from '../action/postActions';
import { useNavigate } from 'react-router';

const Post = (props) => {
    
        const params = useParams();
        console.log(props.posts);
        const posts = props.posts
        const postToShow = (posts).find(post => post.id === params.post_id);
        
        
            let navigate = useNavigate();

            const handleClick = () => {
                props.deletePost();   
                navigate('/home')
            }
        
        
        return(
            <div className='post'>
                <div className='postBody'>
                    <h3>{postToShow.title}</h3>  
                    <p>{postToShow.body}</p>
                    <button onClick={()=>handleClick(postToShow.id-1)}>Delete Post</button>
                </div>
            </div>
        )
        
    
}
const mapStateToProps = (state) => {
    return{
        posts : state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        deletePost : (id)=> dispatch(deletePost(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);