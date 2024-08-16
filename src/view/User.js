import { Component } from "react";

class User extends Component {
    constructor(props) {
        super();
        this.state = {
            name: props.name,
            age: props.age,
        };
                
        // console.log(this.state)
        // console.log(this.props)
    }
    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h2>Age: {this.state.age}</h2>
            </div>
        );
    }
}

export default User;