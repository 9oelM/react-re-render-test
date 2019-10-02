## Points to make
- Every single time you click on the parent component, 
`Child1` and `Child2` are going to re-render. You are welcome to download and test it.
- If you use `PureComponent` for children components, they are not going to re-render anymore. 

## Conclusion
- React does not care if the props/states in children components changed or not (there are not even props or states in children components)

```js
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
```