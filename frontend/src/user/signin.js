import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
class Signin extends Component {

    constructor() {
        super()
        this.state = {
            
            email: "",
            password: "",
            error: "",
            redirectToRefer: false,
            loading: false
        };
    }

    handleChange = (name) => (event) => {
        this.setState({error: ""})
        this.setState({[name]: event.target.value});
    };

    authenticate  (jwt, next) {
        if(typeof window !== "undefined") {
            localStorage.setItem("jwt" , JSON.stringify(jwt))
            next()
        };
    }
    clickSubmit = event => {
        event.preventDefault();
        this.setState({loading: true})
        const {email, password} = this.state
        const user = {
            
            email,
            password
        };

        //console.log(user);
        this.signin(user)
        .then(data => {
            if(data.error) {
                this.setState({error: data.error, loading: false})
            }
                else {
                    //authenticate
                    this.authenticate(data, () => {
                        this.setState({redirectToRefer: true})
                    })
                    //redirect

                };
        });
    };

    signin = user => {
        return fetch("http://localhost:8080/signin", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
    };

    render() {
        const {email, password, error, redirectToRefer, loading} = this.state
        if(redirectToRefer) {
            return <Redirect to="/" />
        }
        return (
            
            <div className='container'>
                <h2>SIGN IN</h2>
                <div className='alert alert-danger' style={{display: error ? "" : "none"}}>
                    {error}
                </div>
               {loading ?( <div className='jumbotron text-center'>
                   <h2>Loading...</h2>
               </div>):(
                   ""
               )}
                <form>
                   
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input onChange={this.handleChange("email")} type="email" className="form-control" value={email}/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input onChange={this.handleChange("password")} type="password" className="form-control" value={password} />
                    </div>

                    <button onClick={this.clickSubmit} type="submit" className="btn btn-primary" >Login</button>
                </form>
                
            </div>
        );
    }
}

export default Signin;