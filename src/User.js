import React from 'react'

const User = (props) => {
  // console.log(props);
    
    return(
        <>
            <h1>{props.username}</h1>
            <p> {props.mess} </p>
            <hr></hr>
        </>
    )
}

export default User
