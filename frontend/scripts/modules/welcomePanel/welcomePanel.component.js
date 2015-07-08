import { node } from 'utils/dom'
import React from 'react'
import Card from 'components/card.component'

class WelcomePanel extends Card {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="welcome-panel">
         <Card content={this.props.content} />
      </div>
      )
  }

  initPanel(el,content){
    React.render( <WelcomePanel content={content} />, el);   
  }
}

module.exports = WelcomePanel;