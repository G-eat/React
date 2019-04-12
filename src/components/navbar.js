import React, {
  Component
} from 'react';

class Navbar extends Component{
  render(){
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="/"><span className="badge badge-info">{this.props.produktet.filter(c=>c.nr>0).length}</span> Elementet</a>
      </nav>
    )
  }
}

export default Navbar;
