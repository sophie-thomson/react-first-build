import React from "react";

// Arrow function below does same as vanilla function above
const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello, {props.name}. {props.greeting} How does it feel to be {props.age}?</h1>;
}

export default FunctionalGreetingWithProps;