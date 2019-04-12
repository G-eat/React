import React, {
  Component
} from 'react';
import Elementi from './elementi';

class Elements extends Component {
  handleAddNr = (a) =>{
    this.props.addQuality(a)
  }

  handleRemNr = (a) =>{
    this.props.remQuality(a)
  }

  handleResNr = (a) =>{
    this.props.resQuality(a)
  }

  handleDel = (a) =>{
    this.props.del(a)
  }

  render(){
    let produktet;
    produktet = this.props.produktet.map(produkti=>{
      return (<Elementi key={produkti.id} produkti={produkti} addNr={this.handleAddNr} remNr={this.handleRemNr} resNr={this.handleResNr} Del={this.handleDel}/>)
    });

    return (
      <div>
        <h1>Elements</h1>
        {produktet}
      </div>
      )
  }
}

export default Elements;
