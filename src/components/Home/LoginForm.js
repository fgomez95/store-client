import React from 'react';

const loginForm = ({username, password, handleInput, handleSubmit}) => {
    return (
        <div id="login-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div>
                    <input 
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );
}

export default loginForm;