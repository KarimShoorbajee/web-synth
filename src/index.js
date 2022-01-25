import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
  
  class Keys extends React.Component {
    render() {
      return (
          <div className='Keys'>
            <Key sharp="White"/>
            <Key sharp="Black"/>
            <Key sharp="White"/>
            <Key sharp="Black"/>
            <Key sharp="White"/>
            <Key sharp="White"/>
            <Key sharp="Black"/>
            <Key sharp="White"/>
            <Key sharp="Black"/>
            <Key sharp="White"/>
            <Key sharp="Black"/>
            <Key sharp="White"/>
          </div>
      );
    }
  }

  class Key extends React.Component {
    constructor(props) {
        super(props);
    } 
    render() {
      return (
        <div className={this.props.sharp}></div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Keys />,
    document.getElementById('root')
  );
  