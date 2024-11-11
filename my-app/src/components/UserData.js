// This is a functional component which is rendered in the NestingComponents parent stateful component
import React from 'react'

function UserData(props) {
    return (
        <div>
            <h1>{props.isLoaded ? 'Data loaded!' : 'Loading ...'}</h1>
        </div>
    )
}

export default UserData