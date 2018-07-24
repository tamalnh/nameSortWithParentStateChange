import React, {Component} from 'react';

class Alphabet extends Component {

    btnClickHandler = (event) => {
        this.props.sortNames(event.target.value)
    }
   
    showAlpha () {
        let newArr = []
        for(let x=0; x<this.props.alpha.length; x++){
          newArr.push(this.props.alpha[x])
          
       }
       if(newArr){
        return newArr.map((word, index) => {
          return (
            <button key={index} onClick={this.btnClickHandler} value={word}> {word} </button>
          )
        })
       }
       
      }

    render(){
        return(
            <div className="alpha">

                {this.showAlpha()}
            </div>
        )
    }
}

export default Alphabet;