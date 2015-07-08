import React , { Component } from 'react'
class Card extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="card">
           <div className="card__content">
             <label>{this.props.content}</label>
           </div>
      </div>
      )
  }

  initPanel(el,content){
    React.render( <Card content={content} />, el);   
  }
}

module.exports = Card;