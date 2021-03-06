import React, { Component } from "react"

let name = "小明", age = 10, list = [10, 20, 30, 40]

export default class App3 extends Component {
    render() {
        return (
            <div>
                <p>姓名：{name}</p>
                <p>年龄：{age}</p>
                <p>是否已经成年：{age >= 18 ? "是" : "否"}</p>
                <ul>
                    {
                        list.map((value, key) => {
                            return (
                                <li key={key}>{value}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}