import React from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
import axios from 'axios';
class Form extends React.Component {
    state = {
        name: '',
        code: '',
        description: '',
        available_units: 0,
        price: 0,
        image: null,
    }
    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.image);
        formData.set('name', this.state.name);
        formData.set('code', this.state.code);
        formData.set('available', this.state.available_units);
        formData.set('price', this.state.price);
        axios({
            method: 'post',
            url: '/sales/product',
            data: formData,
        })
        .then(res => {
            if(res.status == 201){
                return <Redirect to="/inventory" />
            }
        })
        .catch(err => console.log(err));
        
    }
    handleLoadLocalFile = (e) => {
        this.setState({image: e.target.files[0]});
    }
    componentDidMount(){
        if(this.props.actionType === "Edit"){
            console.log(this.props.match)
        }
    }
    render(){
        return(
            <div id={`form-type${this.props.actionType}`}>
                <h3>{this.props.actionType} Item</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label>Item Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Item Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <label>Code:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Item Code"
                            name="code"
                            value={this.state.code}
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Item Description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <label>Available Units:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Available Units"
                            name="available_units"
                            value={this.state.available_units}
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price USD:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Price in USD"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="input-group mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Stock Image</span>
                        </div>
                        <div className="custom-file">
                            <input 
                                type="file" 
                                className="custom-file-input" 
                                name="image"
                                onChange={this.handleLoadLocalFile}
                            />
                            <label className="custom-file-label">Choose file</label>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="mt-3">
                        <Link to="/inventory">
                            Go Back
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Form);