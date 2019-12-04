import React from 'react'
import BookSearch from '../BookSearch'
import navbar from '../Nav'
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
            <navbar />
          
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