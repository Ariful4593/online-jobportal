import React from 'react';
import './ProjectType.css';
import projectTypeData from '../../../fakedata/postProjectData/projectTypeData';
import PostReview from '../PostReview/PostReview';
const ProjectType = ({projectTypeBgColor, file, currentCategory, handleProjectType }) => {




    const categoryArray = ['standard-project', 'recruiter-contest']
    return (
        <React.Fragment>
            <div className="project-posting-area">
                <div className="row project-posting-area-block">
                    {
                        <React.Fragment>
                            <h4 className="project-posting-title">{projectTypeData.title}</h4>
                            {
                                projectTypeData.category.map((data, index) => (
                                    <div className={`col-md-6 ${categoryArray[index]}`}
                                        key={index}
                                        onClick={() => handleProjectType(categoryArray[index], data)}
                                        style={{background: `${projectTypeBgColor === categoryArray[index] ? '#f0f0f0' : ''}`}}
                                    >
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-4 text-center">
                                                <img src={data.img} alt="" />
                                            </div>
                                            <div className="col-md-8">
                                                <h6 className="project">{data.chooseProjectTitle}</h6>
                                                <small className="project-hints">{data.description}</small>
                                                <p className="project-status">{data.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </React.Fragment>
                    }
                </div>
            </div>
            {
                currentCategory === 'standard-project' && <PostReview file={file} />
            }
            {
                currentCategory === 'recruiter-contest' && <PostReview file={file} currentCategory={currentCategory} />
            }
        </React.Fragment>
    );
};

export default React.memo(ProjectType);