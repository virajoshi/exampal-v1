import React from "react";
import avtar from "./../image/logo-search-grid-1x (2).png";

function Home() {
    return (
        <div className="min-h-screen text-primary">
            <div className="container pt-3 d-flex flex-column align-items-center">
                <img src={avtar} width={200} alt="viraj joshi"/>
                <h2>Viraj Joshi</h2>
                <h5>(Software  Engineer)</h5> 
                <p className="text-center border-bottom pb-3">
                I am begining of web devlopment. I am a study in silver oak university. in silver oak,i chose a b,tech and and my branch is information techmology. i have a always interest in computer profestion. I am also star the learning about the design the poster design.
                </p>
                <p className="text-center">
                    <span className="d-mobile-block pe-3">Email: jviraj585@gmail.com</span>
                    <span className="d-mobile-block">Phone: +91-9601586749</span>
                </p>
                <p className="text-center">C-2/1,Simandhar Nagar,opp.chhaya flat,Ghatlodia,Ahmdabad-380061
                </p>
            </div>
            <hr />
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body back-col">
                                <h5 className="card-title fw-bold pb-3">Skills</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">HTML</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "90%" }}>90%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">CSS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "78%" }} >78%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">Python</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }}>50%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">REACTJS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "40%" }} >40%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container col-md-4 pt-3 pb-3">
                <div className="card ">
                    <div className="card-body back-col">
                        <h5 className="card-title fw-bold pb-3">Hobby</h5>
                        <span class="badge bg-primary me-3 mb-3 p-2">Cricket</span>
                        <span class="badge bg-primary me-3 mb-3 p-2">Badminton</span>
                        <span class="badge bg-primary me-3 mb-3 p-2">Painting</span>
                        <span class="badge bg-primary me-3 mb-3 p-2">poster designing</span>
                    </div>
                 </div> 
            </div>
        </div>
    );
}


export default Home;