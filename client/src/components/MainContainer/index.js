import React from 'react'
import BookSearch from '../BookSearch'
import BookResults from '../BookResults'
const styling = {
    header:{
        backgroundColor: '#F8B195',
        width: '100%'
    },
    content:{
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: '#c06c84',
        marginTop: '20px'
    },
 }
function MainContainer(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg " style={styling.header}>
                <a class="navbar-brand" href="#">Google Book Search</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Saved Books</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container" >
                <div className="card" style={styling.content}>
                    <div className="card-header">
                        <p>Enter a book name or author you are interested in.</p>
                    </div>
                    <BookSearch />
                </div>
                <div className="card" style={styling.content}>
                    
                    <BookResults />
                </div>
            </div>
        </div>
    )
}

export default MainContainer