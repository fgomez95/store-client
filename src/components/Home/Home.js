import React from 'react';
import Logo from './Logo';
import LoginForm from './LoginForm';

class Home extends React.Component {
    state = {
        username: '',
        password: ''
    }
    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        this.props.handleAuthentication(true);
    }
    render(){
        return(
            <section id="home">
                <Logo />
                <LoginForm 
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                    username={this.state.username}
                    passowrd={this.state.passowrd}
                />             
            </section>
        );
    }
}

export default Home;