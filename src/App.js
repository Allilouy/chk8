import React from 'react';
import './App.css';
import Button from './sarra.js';
import Aloolooy from './Aloolooy.jpg';
import kacem from './b1.jpg';
import harold from './kacem.JPG';
import Content from './content';

const person = [
  {
    name: "Aloolooy",
    imgsrc: Aloolooy,
    description: "this is ali's profile"
  },
  {
    name: "harold",
    imgsrc: harold,
    description: "this is harold's profile "
  },
  {
    name: "kacem",
    imgsrc: kacem,
    description: "this is kacem's profile"
  }

]

class App extends React.Component {
  state= {
    index:0
  }

  render() {
    return (<div>
      <div>
      {person.map((e, i) => <Button onClick={()=>this.setState({
        index: i
      
      }) } children={e.name} />)


  } </div>
  <Content 
  children={person[this.state.index].name} title={person[this.state.index].name} src={person[this.state.index].imgsrc} descri={person[this.state.index].description}
  />
   </div>)
  }
}

export default App;
