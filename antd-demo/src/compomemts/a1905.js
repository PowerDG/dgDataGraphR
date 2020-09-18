import React from 'react'

import ReactDOM from 'react-dom'

class App extends React.Component{
    render(){
        return(
            console.log(this),//此处的this指的就是App组件，自定义在App上的属性就在this的props上
            <h1>Hello {this.props.name}React!</h1>
        )
    }
}

ReactDOM.render(
    <App name="1905"/>,//在App组件上自定义一个name的属性
    document.getElementById('root')
)