import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';


class App extends Component {
  constructor(props){
    super(props)
    // creating a state
    this.state = {
      users: [],
      loading: false
    }
    //bind functions
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getuser()
    {
      this.setState({
        loading: true
      })
      axios('https://randomuser.me/api/?nat=US&results=5')
      .then(response => this.setState({
        users: [...this.state.users, ...response.data.results],
        loading: false
      }));
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.getuser();
      console.log('more user loaded');
    }

  componentWillMount(){ // now componentDidMount is used
      this.getuser();
  }


  render() { 
    const {Loading, users} = this.state;
    return <div className="App">
      <form onSubmit={this.handleSubmit}>
            <input type= "submit" value="load users"/>
          </form>
        {!Loading ? 
         users.map(user => 
        (<div key={user.id.value}>
          <h3 style={{color: 'red'}}>{user.name.first}</h3>
          <p>{user.email}</p>
          <hr/>
          
        </div>)) : <Loading message="hello guys"/>
        }
    </div>;
  }
}
 
export default App;