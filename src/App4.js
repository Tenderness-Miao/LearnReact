import React, { Component } from 'react'



// export default class App4 extends Component {
//     handleClick() {
//         console.log("点击了按钮");
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>按钮</button>
//             </div>
//         )
//     }
// }
export default class App4 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num: 20
        }
    }

    handleClick() {
        // console.log("点击了按钮");
        this.setState({
            num: this.state.num + 1
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handleClick.bind(this)}>按钮</button>
            </div>
        )
    }
}