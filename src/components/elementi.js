import React, {
  Component
} from 'react';

class Elementi extends Component{
  onAdd = () =>{
    let produktiNr = this.props.produkti;
    this.props.addNr(produktiNr)
  }

  onRem = () =>{
    let produktiNr = this.props.produkti;
    this.props.remNr(produktiNr)
  }

  onRes = () =>{
    let produktiNr = this.props.produkti;
    this.props.resNr(produktiNr)
  }

  onDel = () =>{
    let produktiNr = this.props.produkti;
    this.props.Del(produktiNr)
  }

  render(){
    // console.log(this.props.produkti);
    return (
      <li className='form-control form-group' ><span className='badge badge-info'>{this.props.produkti.nr}</span><span className='text-info bold'> {this.props.produkti.emri}</span>
      <a className='btn btn-danger btn-xs pull-right' onClick={this.onDel}> Del</a>
      <a className='btn btn-warning btn-xs pull-right mr' onClick={this.onRes}> Reset</a>
      <a className='btn btn-primary btn-xs pull-right mr' onClick={this.onRem}> Remove</a>
      <a className='btn btn-info btn-xs pull-right mr' onClick={this.onAdd}> Add</a></li>
    );
  }
}

export default Elementi;
