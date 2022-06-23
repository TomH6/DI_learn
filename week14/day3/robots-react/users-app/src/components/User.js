import './User.css';

const User = (props) => { 
    // console.log(props);
    const {user} = props;
    const {name, email, username, id} = user;

    const outerDiv = {
        display:'inline-block',
        margin: '20px',
        padding: '10px',
        border: '1px solid yellow'
    }
    return(
        <div className='dib pa3 ma2 tc bg-light-green grow br3'>
            <div><img src={`https://robohash.org/${id}?size=200x200`}/></div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{username}</div>
        </div>
    )
}
export default User