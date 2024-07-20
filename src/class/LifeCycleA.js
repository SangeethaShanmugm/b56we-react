import React, { Component } from "react";

export default class LifeCycleA extends Component {
    constructor() {
        super();
        this.state = {
            name: "jack",
        };
        console.log("LifeCycleA constructor")
    }


    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <h1>LifeCycleA</h1>
                <p>{this.state.name}</p>
            </div>
        );
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")
        fetch("https://659e6ba547ae28b0bd35caec.mockapi.io/products")
            .then((res) => res.json())
            .then((data) => console.log(data))
    }


}
