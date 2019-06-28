import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavLinks = (props) => {
    if(props.isLoggedIn){
        return (
            <React.Fragment>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">Welcome, {props.username}!</Link>
                <Link className="nav-link" to="/shareRecipe">Share recipe</Link>
                <Link className="nav-link" to="/logout">Logout</Link>
            </React.Fragment>
        )
    }else{
        return (
            <React.Fragment>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/register">Register</Link>    
            </React.Fragment>
        )
    }
}

export class Header extends Component {
    render() {
        return (
            <header className="masthead mb-auto">
                <div className="inner">
                     <h3 className="masthead-brand">CookUni</h3>
                        <nav className="nav nav-masthead justify-content-center">                   
                        <NavLinks isLoggedIn={this.props.isLoggedIn} username={this.props.username}></NavLinks>
                    </nav>
                </div>
             </header>
        )   
    }
}


export default Header;
