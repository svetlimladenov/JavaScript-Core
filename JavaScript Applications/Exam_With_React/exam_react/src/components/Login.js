import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
            <form action="" method="post" className="text-center p-5 form-layout">
                <p className="h4 mb-4">Sign in</p>      
                <input type="text" id="defaultRegisterFormUsername" name="username" className="form-control mb-4"
                    placeholder="Username"/>       
                <input type="password" id="defaultRegisterFormPassword" name="password" className="form-control" placeholder="Password"/>
                <hr/>    
                <button className="btn btn-danger w-25 m-auto my-4 btn-block" type="submit">Sign in</button>      
            </form>
    )
  }
}
