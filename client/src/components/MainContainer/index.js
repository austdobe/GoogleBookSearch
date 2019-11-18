import React from 'react'
import BookSearch from '../BookSearch'
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
            <nav className="navbar navbar-expand-lg " style={styling.header}>
                <a className="navbar-brand" href="#">Google Book Search</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Saved Books</a>
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
            </div>
        </div>
    )
}

export default MainContainer