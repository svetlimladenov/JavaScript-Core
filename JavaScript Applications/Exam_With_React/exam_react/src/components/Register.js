import React, { Component } from 'react'

export default class Register extends Component {
    state = {
        firstName : '',
        lastName : '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
        fetch('https://baas.kinvey.com/user/kid_HkUljNOc4/', {
        method: 'POST',
        body: data,
        }).then(x => x.json()).then(j => console.log(j));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="text-center p-5 form-layout">     
                <p className="h4 mb-4">Sign up</p>
                <div className="form-row mb-4">
                    <div className="col">  
                        <input type="text" id="defaultRegisterFormFirstName" className="form-control" name="firstName"
                            placeholder="First name"/>
                    </div>
                    <div className="col">
                        <input type="text" id="defaultRegisterFormLastName" className="form-control" name="lastName"
                            placeholder="Last name"/>
                    </div>
                </div>
        
                <input type="text" id="defaultRegisterFormUsername" className="form-control mb-4" name="username"
                    placeholder="Username"/>
                <input type="password" id="defaultRegisterFormPassword" className="form-control" name="password"
                    placeholder="Password"/>
                <hr/>
                <input type="password" id="defaultRegisterRepeatPassword" className="form-control" name="repeatPassword"
                    placeholder="Repeat Password"/>
                <button className="btn btn-danger my-4 btn-block w-25 m-auto" type="submit">Sign up</button>
            </form>
        )
    }
}
