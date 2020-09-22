import React from 'react';
// import './App.css';

class SubApp extends React.Component {
  render() {
    const value = this.props.store.getState();
    return (
      <div className="App">
        <p>值：{value}</p>
        <select ref="num">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <button onClick={()=>this.increment()}>+</button>
        <button onClick={()=>this.decrement()}>-</button>
      </div>
    )
  };
  increment(){
    var num = Number(this.refs.num.value);
    this.props.store.dispatch( 
      {number:num,type:"INCREMENT"}
      )
  }
  decrement(){
    var num = Number(this.refs.num.value);
    this.props.store.dispatch( 
      {number:num,type:"DECREMENT"}
      )
  }
}
export default SubApp;
