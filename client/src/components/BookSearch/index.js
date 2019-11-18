import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
const styling={
    searchbar: {
        margin: "20px auto",
        width: '100%'
    },
    books: {
        margin: "10px 20px",
        padding: "10px 20px",
        backgroundColor: "#929195",
        color: "black"
    },
    cardImage:{
        maxHeight: '200',
        maxWidth: '200px',
        margin: '10px auto'
    }

}


function BookSearch(){

    const [book, setBook] = useState('');
    const [results, setResults] = useState([]);
    const [APIKey, setAPIKey] = useState('AIzaSyDz2jlBCa3uarUkN6NL7pia07KhtHKGEBc');

    function handleChange(event){

        const book = event.target.value;

        setBook(book);

    };
    function handleSubmit(event){

        event.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+APIKey+"&maxResults=40")
        .then(data =>{
            setResults(data.data.items);
            console.log(data.data.items)
            return results;
        })

    };
    function handleClick(event){
        
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    style={styling.searchbar}
                    type='text'
                    name='search'
                    placeholder="Book Name"
                    onChange={handleChange}></input>
                </div>
                <div>
                    <button 
                    type="submit"
                    className="btn btn-primary"
                    >
                    Search</button>
                </div>
            </form>
            <div className='container' style={styling.container}>
                {
                    results.map(book =>(
                        <div className='card' style={styling.books}>
                            <a
                            style={{color: "black"}} 
                            href={book.volumeInfo.previewLink}className='card-header'>{book.volumeInfo.title}</a>
                            <img 
                            style={styling.cardImage}
                            src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
                            <p>{book.volumeInfo.description}</p>
                            <button type="button"
                            onClick={handleClick}>Save</button>
                        </div>
                    ))
                } 
                  
            </div>
        </div>      
    )
}

export default BookSearch