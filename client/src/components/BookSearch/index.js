import React from 'react'
const styling={
    searchbar: {
        margin: "20px auto",
        width: '100%'
    },

}


function BookSearch(){
    return(
        <div className="container">
            <div>
                <input 
                style={styling.searchbar}
                type='text'
                name='search'
                placeholder="Book Name"></input>
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
        </div>      
    )
}

export default BookSearch