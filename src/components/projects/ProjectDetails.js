import React from 'react'

function ProjectDetails(props) {
    console.log(props)
    const id = props.match.params.id
    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex fugit nesciunt eligendi placeat? Error necessitatibus, doloribus autem expedita fugiat laborum?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, harum.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By The Author Ghana</div>
                    <div>23rd July , 3pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
