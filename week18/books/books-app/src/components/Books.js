
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
const Books = (props) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');

   
    const search = () => {
        console.log(query);
        fetch(`https://www.googleapis.com/books/v1/volumes?q="${query}"`)
        .then(res =>res.json())
        .then(data=> {
            setBooks(data);
            setLoading(false);
        })
        .catch(error=> {
            console.log(error);
        })
    };
    return(
        <div>
            <div className='head'>
            <h1>Books</h1>
                <input type='text' onChange={(e)=>setQuery(e.target.value)} placeholder='Search Books' />
                <button onClick={search}>SEARCH</button>
            </div>
            <div className='book_store'>
            {
                loading ? null : 
                books.items.map(item=>{
                    return(
                        <>
                        {/* <div key={item.id} className='book'>
                            <h2>{item.volumeInfo.title}</h2>
                            <p>{item.volumeInfo.publishedDate}</p>
                            <p>{item.volumeInfo.description}</p>
                            <div><img src={item.volumeInfo.imageLinks.thumbnail} alt={item.id}></img></div>
                        </div> */}
                        <div key={item.id} className='book'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.volumeInfo.imageLinks.thumbnail} />
                        <Card.Body>
                          <Card.Title>{item.volumeInfo.title}</Card.Title>
                          <Card.Text>{item.volumeInfo.description}</Card.Text>
                          <p>{item.volumeInfo.publishedDate}</p>
                          <p>{item.volumeInfo.description}</p>
                        </Card.Body>
                      </Card>
                      </div>
                      </>
                    )
                })
            }
            </div>
        </div>
    )
};

export default Books;