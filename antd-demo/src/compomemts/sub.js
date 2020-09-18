import React, {Component} from 'react';

export default class Parent extends Component {
    render() {
        return(
            <div>
                <Child onRef={this.onRef} />
                <button onClick={this.click} >click</button>
            </div>
        )
    }

    onRef = (ref) => {
        this.child = ref
    }

    click = (e) => {
        this.child.myName()
    }

}



class Child extends Component {
    componentDidMount(){
        this.props.onRef(this)
    }

    myName = () => alert('xiaohesong')

    render() {
        return ('woqu')
    }
}
