import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Consumer} from '../../context';
// import './contacts.css'
import axios from 'axios'

export default class Contacts extends Component {
  state={
    showContactInfo: false
  };
  //dispaches to context.js
  onDeleteClick = async (id, dispatch) =>{
    
  await axios.delete
(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({type:'DELETE_CONTACT',payload:id})
    };
    // axios.delete
    // (`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then(res=> dispatch({type: 'DELETE_CONTACT',payload: id}))
    // };


   
  


  render() {
    const{id, name, email, phone} = this.props.contact
    const{showContactInfo} = this.state;

    return (
      <Consumer>
        {value =>{
          const {dispatch} = value;
          return(<div className='card card-body mb-3'>
          <h4>
             {name} <i onClick={()=>{
      this.setState({showContactInfo:!this.state.showContactInfo})}} className="fas fa-sort-down" style={{cursor:'pointer'}}/>
      <i className="fas fa-times mx-2" style={{color:'red',cursor:'pointer',float:'right'}} onClick={this.onDeleteClick.bind(this,id,dispatch)}/>

      <Link to = {`contact/edit/${id}`}>
        <i 
        className="fas fa-pencil-alt" 
        style={{
          color:'black',
          cursor:'pointer',
          float:'right',
          marginRight:'1rem'}}/>
      </Link>

          </h4>
          {showContactInfo ? (
          <ul className='list-group'>
            <li className='list-group-item'>Email: {email}</li>
            <li className='list-group-item'>Phone: {phone}</li>
          </ul>
          ):null}
        </div>)
        }}
      </Consumer>


      
    )
  }
}

Contacts.protoTypes ={
  contact: PropTypes.object.isRequired,
 
  
}