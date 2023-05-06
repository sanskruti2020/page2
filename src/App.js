import './App.css';
import college from './images/college.png';
import logout from './images/logout.png';
import profile from './images/profile.png';

function App() {
  return (
  <div>
    <div className="page-2">
        {/* <!-- navbar --> */}
        <div className="group5">
            <img src={profile} alt="Bootstrap" width="30" height="24" className="profile-img"/>
            <img src={college} alt="Bootstrap" width="30" height="24" className="college-img"/>
        </div>

        {/* <!-- The sidebar --> */}
        <div className="sidebar">
            <a href="#home">Home</a>
            <a href="#profile">Fill Profile</a>
            <a href="#projects">My Projects</a>

            <div className="log">
                <img className="logout" src={logout} alt="sign off"/>
            </div>
        </div>

        {/* <!--  attachmemts row --> */}

        <div className="flex-row-1">
            <div className="flex-col-1 flex-col-4">
                <div className="overlap-group2">

                    <div className="overlap-group6">
                        <div className="attachments">
                            <h4>Attachments</h4>
                        </div>
                    </div>

                    <div className="flex-row-2">
                        <div className="file">File</div>
                        <button type="button" className="btn btn-outline-secondary btn-sm">Download</button>
                    </div>

                    <div className="flex-row-3">
                        <div className="file">Details Of Project</div>
                        <button type="button" className="btn btn-outline-secondary btn-sm">Download</button>
                    </div>
                </div>

                {/* <!--  Description row --> */}

                <div className="overlap-group2">

                    <div className="overlap-group6">
                        <div className="attachments">
                            <h4>Description</h4>
                        </div>
                    </div>

                    <div className="text">
                        <div className="file">Title : Machine Learning Project with Data Analytics</div>
                    </div>

                    <div className="text">
                        <div className="file">Description : </div>
                    </div>
                </div>

                {/* <!--  rectangle 1 --> */}
                <div className="rectangle">
                    <div className="box1">
                        <div className="small-rect">
                            <h4 className="head">Details</h4>
                        </div>
                        <div className="text-box">
                            <p>
                                <h6>Duration : 3 months </h6>
                                <br/>
                                <h6>Skills Required : </h6>
                                Data Science, Machine Learning, Data Analytics
                            </p>
                        </div>
                    </div>

                    <div className="box2">
                        <div className="small-rect">
                            <h4 className="head">Eligibility</h4>
                        </div>
                        <div className="text-box">
                            <p>
                                <h6>Department  Year </h6>
                                <br/>
                                <h6>Skills Required : </h6>
                                Data Science, Machine Learning, Data Analytics
                            </p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
  </div>
  );
}

export default App;
