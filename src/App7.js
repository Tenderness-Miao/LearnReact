import React, { Component } from 'react'

class Header extends Component {

    static defaultProps = {
        backgroundColor: "skyblue",
        title: "默认标题"
    }

    render() {
        return (
            <header style={{ width: "100%", height: 40, lineHeight: "40px", backgroundColor: this.props.backgroundColor }}>
                {this.props.title}
                {this.props.children}
            </header>
        )
    }
}

export default class App7 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "首页标题"
        }
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} backgroundColor="#cff" />
                <Header title="列表页标题" />
                <Header>子元素</Header>
            </div>
        )
    }
}
