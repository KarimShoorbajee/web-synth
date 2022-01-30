import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';



class Keys extends React.Component {
    render() {
        return (
            <div className='keys-container'>
                <Key color='white' note='c'/>      
                <Key color='black' note='c_sharp'/>
                <Key color='white' note='d'/>
                <Key color='black' note='d_sharp'/>
                <Key color='white' note='e'/>      
                <Key color='white' note='f'/>     
                <Key color='black' note='f_sharp'/>
                <Key color='white' note='g'/>      
                <Key color='black' note='g_sharp'/>
                <Key color='white' note='a'/>      
                <Key color='black' note='a_sharp'/>
                <Key color='white' note='b'/>      
            </div>
        );
    }
}

  class Key extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: 'key'
        };
    } 
    render() {
      return (
        <div className={`${this.state.class} ${this.props.color} ${this.props.note}`}></div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Keys />,
    document.getElementById('root')
  );
  