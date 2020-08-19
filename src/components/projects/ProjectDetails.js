import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

function ProjectDetails(props) {
    const { project } = props;
    console.log(project)
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted By The Author {project.authorFirstName + " " + project.authorLastName}</div>
                        <div>{project.createdAt}</div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <p>Loading.....</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownParams) => {
    const id = ownParams.match.params.id;
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project
    }
}
export default compose(connect(mapStateToProps), firestoreConnect([{
    collection: "projects"
}]))(ProjectDetails)
