import React from 'react';

class Child1 extends React.Component {
  render(){
    console.log('Child1 rendered')
    return <div style = {{border: '1px solid red'}}>
      Child1
    </div>
  }
}
class Child2 extends React.Component {
  render(){
    console.log('Child2 Rendered')
    return <div style = {{border: '1px solid blue'}}>
      Child2
    </div>
  }
}
class Parent extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicked: false,
    }
  }
  handleClick(){
    this.setState((prevState) => ({clicked: !prevState.clicked}));
  }
  render(){
    console.log('Parent rendered')

    return <div onClick={this.handleClick} style = {{border: '1px solid black'}}>
      Parent
      <Child1/>
      <Child2/>
    </div>
  }
}

function App() {
  return <Parent/>
}

export default App;