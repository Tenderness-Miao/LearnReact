import React, { Component } from 'react'

export default class App8 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{ id: 1, value: "1" }, { id: 2, value: "2" }, { id: 3, value: "3" }]
        }
    }

    handleClick() {
        this.setState({
            list: [{ id: 4, value: "4" }, { id: 1, value: "1" }, { id: 2, value: "2" }, { id: 3, value: "3" }]
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>按钮</button>
                <ul>
                    {
                        this.state.list.map((v, k) => {
                            return (
                                <li key={v.id}>{v.value}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
