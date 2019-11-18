import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
const styling={
    searchbar: {
        margin: "20px auto",
        width: '100%'
    },

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
                    <h4> Or </h4>
                </div>
                <div>
                    <input 
                    style={styling.searchbar}
                    type='text'
                    name='search'
                    placeholder="Author Name"></input>
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
                <div className='card' style={styling.books}>
                {
                    results.map(book =>(
                        <div>
                            <a href={book.volumeInfo.previewLink}className='cardHeader'>{book.volumeInfo.title}</a>
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
                            <p>{book.volumeInfo.description}</p>
                        </div>
                    ))
                } 
                </div>   
            </div>
        </div>      
    )
}

export default BookSearch