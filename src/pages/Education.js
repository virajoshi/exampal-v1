import React from "react";

function Education() {
    return (
        <React.Fragment>
            <div className="min-h-screen text-primary">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Education</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5 back-col">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Bachlor of Engineering <span className="h6">from Silver Oak University</span></h5>
                                    <p className="mb-0">Mar 2021 - Dec 2025</p>
                                    <small>I am currently study in B.Tech field. In b.tech, I am student of I.T. branch. I have a very much interest in i.t. field that why i choose this field.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3 back-col">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Master of Engineering <span className="h6">from Silver Oak University</span></h5>
                                    <p className="mb-0">Jan 2026 - Dec 2028</p>
                                    <small>This is the future plan. I am currently study in bachlor's degree.I have some few choose about my future study line like Web Developer , Designing , Cyber Security.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Education;