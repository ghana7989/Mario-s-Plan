import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        }
    }
    handleChange = (e) => {
        // console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.createProject(this.state)
    }
    render() {
        return (
            <div className="container">
                <form autoComplete="off" onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Create Project
                    </h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea
                            className="materialize-textarea"
                            type="text"
                            id="content"
                            onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn lighten-1 pink z-depth-0">
                            Create
                        </button>
                    </div>
                </form>
            </div>

        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);  