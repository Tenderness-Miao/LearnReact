import React, { Component } from "react"
import "./assets/css/style.css"
import Img from "./assets/images/IMG_0127.jpg"

export default class App2 extends Component {
    render() {
        return (
            <div>
                <p style={{ color: "red", fontSize: "30px" }}>jsx 语法糖</p>
                <p className="box">jsx 语法糖</p>
                <img src={Img} alt="" width="100" />
                <br />
                <label htmlFor="username">
                    用户名<input type="text" id="username"/>
                </label>
            </div>
        )
    }
}