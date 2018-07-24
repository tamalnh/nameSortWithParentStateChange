import React, { Component } from 'react';
import './App.css';

import Alphabet from './controller/Alphabet'

class App extends Component {
    state = {
      names : ['ability', 'travel', 'able', 'pretty',  'event', 'million', 'raise', 'understand', 'security', 'final', 'give', 'offer', 'sense', 'owner', 'increase', 'kind', 'issue','zeep', 'military', 'value', 'billion', 'young', 'blue', 'campaign', 'think', 'whatever', 'catch', 'data', 'crime'],
      isSort: false,

      alpha : 'abcdefghijklmnopqrstuvwxyz'
    }


  sortNames = (word) =>{
    if(word && this.state.isSort === false){
        let newWord = []
        for(let x=0; x<this.state.names.length; x++ ){

            for(let i=0; i<this.state.names[x].length; i++){
              if(this.state.names[x][0] === word){
                newWord.push(this.state.names[x]);
                break;

              }
            }
        }

        this.setState({
            names: newWord,
            isSort: true
        })
        word=null
      } 

  }

  showWord () {
    return this.state.names.map((word, index) => {
      return(
          <span key={index} className="word"> {word} </span>
      )
    })
  }


  render() {
    return (
      <div className="App">
        {this.showWord()}
        

        <Alphabet alpha={this.state.alpha} sortNames={this.sortNames} />
      </div>
    );
  }
}

export default App;
