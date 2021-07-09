import React from 'react';
import guarantedData from '../../../../fakedata/postProjectData/guarantedData';
import PostReview from '../../PostReview/PostReview';
import './Guaranted.css';
const Guaranted = ({ contestType, file }) => {

    const backgroundColorArray = ['#379e54', '#f57207', '#363f4d', '#30dbe3', '#29b2fe', '#2259b5', '#ffc24e']
    return (
        <React.Fragment>
            <div className="row mt-5">
                <div className="col-12">
                    {
                        guarantedData.map((data, index) => (
                            <div className="row guaranty-area" key={index}>
                                <div className="col-md-3 mt-2">
                                    <h5><input type="checkbox" name="" id="" /> {data.status}</h5>
                                </div>
                                <div className="col-md-3 mt-2">
                                    <div className="guaranty-type" style={{ background: `${backgroundColorArray[index]}` }}>
                                        <h5>{data.type}</h5>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-2">
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <PostReview contestType={contestType} file={file} />
        </React.Fragment>

    );
};

export default React.memo(Guaranted);