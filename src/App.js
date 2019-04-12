import React, {
  Component
} from 'react';
import Navbar from './components/navbar';
import Elementet from './components/elementet';
import './App.css';


class App extends Component {
  state = {
    name : '',
    users :[],
    userIsActive :false,
    produktet:[
      {
        id: 1,
        emri: 'Produkti 1',
        nr : 1
      },
      {
        id: 2,
        emri: 'Produkti 2',
        nr : 0
      },
      {
        id: 3,
        emri: 'Produkti 3',
        nr : 2
      }
    ]
  }

  handleNewProjekt = (e) =>{
    // console.log(this.refs.name.value);
    e.preventDefault();
    if (this.refs.name.value.trim().length && this.refs.name.value.trim().length < 50) {
      const produktet = [ ...this.state.produktet];
      let newProjekt = {
        id: this.state.produktet.length + 1,
        emri: this.refs.name.value,
        nr : 0
      }
      this.refs.name.value=''
      produktet.push(newProjekt);
      this.setState({ produktet });
    }else if (this.refs.name.value.trim().length >= 50) {
      alert('To many characters.\n Not allowed more then 50.');
    }else {
      alert('Add a new product.\n Not empty.');
    }
  };

  handleAddNr = produktiRrites =>{
    const produktet = [ ...this.state.produktet];
    const index = produktet.indexOf(produktiRrites);
    produktet[index] = { ...produktiRrites };
    produktet[index].nr++;
    // console.log(index);
    this.setState({produktet});
  };

  handleRemNr = produktiZbrites =>{
    const produktet = [ ...this.state.produktet];
    const index = produktet.indexOf(produktiZbrites);
    produktet[index] = { ...produktiZbrites };
    if(produktet[index].nr){
      produktet[index].nr--;
    }
    // console.log(index);
    this.setState({produktet});
  };

  handleResNr = produktiReset =>{
    const produktet = [ ...this.state.produktet];
    const index = produktet.indexOf(produktiReset);
    produktet[index] = { ...produktiReset };
    produktet[index].nr = 0;
    // console.log(index);
    this.setState({produktet});
  };

  handleDel = produktiDelete =>{
    const pytja = prompt('Delete Y/y for Yes.');
    if(pytja === 'Y' || pytja ===  'y'){
      const produktet = [ ...this.state.produktet];
      const index = produktet.indexOf(produktiDelete);
      produktet[index] = { ...produktiDelete };
      produktet.splice(index,1);
      // console.log(index);
      this.setState({produktet});
      alert('You Deleted It');
    }
  };

  handleResetAllNr = () =>{
    for (var i = 0; i < this.state.produktet.length; i++) {
      const produktet = [ ...this.state.produktet];
      produktet[i].nr = 0;
      this.setState({ produktet });
    }
  };

  handleDeleteAll = () =>{
    const pytja = prompt('Delete all ? \n Y/y for Yes.');
    if(pytja === 'Y' || pytja ===  'y'){
    const produktet  = [];
    this.setState({produktet});
    }
  };

  handleUsers = () => {
    if (this.state.userIsActive === true) {
      this.setState({userIsActive:false});
      // console.log('a');
    }else{
       this.setState({userIsActive:true});
       // console.log('b');
    }

    fetch("https://jsonplaceholder.typicode.com/users")
          .then( res => res.json())
          .then( res =>{
            this.setState({ users : res})
          });

  };

  render() {
    let buton=[];
    if (this.state.produktet.length > 0) {
      buton = <div><button className='btn btn-info'> {this.state.produktet.length}</button>
              <button className='btn btn-danger pull-right' onClick={this.handleDeleteAll} >Delete all</button>
              <button className='btn btn-warning pull-right mr' onClick={this.handleResetAllNr} >Reset all</button></div>
    };

    let users;
    users = this.state.users.map(user => {
      //console.log(this.state.userIsActive);
      return (<ul key={user.id} className='list-group'><li className='form-group-item'>
                                            <p className='bold'>{user.id}.{user.name} - <span className='text-primary'>{user.username}</span></p>
                                            <p className='bold'>{user.email} : <span className='text-primary'>{user.phone}</span></p>
                                            <p className='bold'>Company Name : <span className='text-primary'>{user.company.name}</span></p>
                                          </li>
              </ul>);
    });

    return(
      <div className='container'>
        <Navbar produktet = {this.state.produktet}/>
        <form onSubmit={this.handleNewProjekt}>
          <input className='form-control' type="text" ref="name" placeholder="Ender a new product." />
        </form>
        {/* <div id='scroll'> */}
          <Elementet produktet={this.state.produktet} addQuality={this.handleAddNr} remQuality={this.handleRemNr} resQuality={this.handleResNr} del={this.handleDel}/>
        {/* </div> */}
        { buton }
        <br />
        <div><button className='btn btn-success' onClick={this.handleUsers} >Users</button></div>
        <br />
        { this.state.userIsActive === true && <span>{users}</span>}
      </div>
     );
    }
  }

  export default App;
