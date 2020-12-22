import React, { Component } from 'react'

class Test extends Component {
  state={
    title:'',
    body:'',
  };
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => this.setState({
    title: data.title,
    body:data.body
  }))
  }



  render(){
    const{title,body}= this.state;

    return (
    <div>
    <h1 className='display-4'>Test Component</h1>
      <ul className="list-items">
      <li className="list-item"><h1>Title: </h1>{this.state.title}</li>
      {body}
      </ul>
    </div>
    );
  }
}


export default Test;