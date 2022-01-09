import React, { Component } from 'react';
import {list} from "./apiuser";
import avatar from "../images/avatar.jpg";
import {Link} from 'react-router-dom';
class Users extends Component {

    constructor() {
        super()
        this.state = {
            Users: []
        }
    }
  
    componentDidMount() {
        list().then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({Users: data})
            }
        })
    }


    renderusers = Users => (
        <div className='row'>
                    {Users.map((user, i) => 
                        <div className="card mr-2" style={{width: '18rem'}} key={i}>
                        <img src={avatar} 
                        className="card-img-top" 
                        alt={user.name}
                        style={{width: '100%' , height: '15vw', objectFit: 'cover'}}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{user.name}</h5>
                          <p className="card-text">{user.email}</p>
                          <Link to={`/user/${user._id}`} className="btn btn-raised btn-primary btn-sm">View Profile</Link>
                        </div>
                      </div>
                    )}
                </div>
    );

    render() { 
        const {Users} = this.state;
        return(
            <div className='container'>
                <h2 className='mt-5 mb-5'>Users</h2>

               { this.renderusers(Users)}
            </div>
        )
    }
}
 
export default Users;