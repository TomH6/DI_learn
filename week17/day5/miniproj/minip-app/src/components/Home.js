import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import blog from '../assets/blog.png';

class Home extends Component {
    render(){
        const {posts} = this.props;
        return(
            <div className="page">
                <h1 className='pageHeader'>Home</h1> 
                {(posts!=0)? 
                    <div className='posts'>
                        { 
                         posts.map((post) =>{
                            return(
                                <div className='post' key={post.id}>
                                    <img src={blog}/>
                                    <div className='postBody' >
                                        <Link to={'/'+ post.id}>
                                            <h3>{post.title}</h3>
                                        </Link>
                                            <p>{post.body}</p>
                                    </div>
                                </div>
                            )
                        })
                        }    
                    </div>
                    :
                    <div className='post'>
                        <h3> Nothing To Show</h3>
                    </div> 
                }  
            </div>  
        )
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }    
}
export default connect(mapStateToProps, null)(Home);