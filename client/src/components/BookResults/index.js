import React from 'react'

const styling = {
   
    buttonDiv: {
        marginLeft: "20px",
        marginBottom: "10px"
    },
    button: {
        marginRight: '20px',
    },
    books: {
        backgroundColor: '#6c5b7b'
    }
}

function BookResults(){
    return(
        <div className='container' style={styling.container}>
            <div className='card' style={styling.books}>
                <h2 className="card-header">Book Title</h2>
                <div className='row'>
                    <img 
                    src=''
                    alt=''
                    name=''
                    className='col-xs-12 col-s-12 col-md-6 col-lg-6 col-lg-6'>
                    </img>
                    <p className='col-xs-12 col-s-12 col-md-6 col-lg-6 col-lg-6'>Summary</p>
                </div>
                <div className='row'>
                    <div style={styling.buttonDiv}>
                        <button style={styling.button} className='btn btn-secondary'>Save</button>
                        <button style={styling.button}className='btn btn-info'>View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookResults