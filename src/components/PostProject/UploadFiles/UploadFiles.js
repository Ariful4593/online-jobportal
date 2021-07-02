import React from 'react';
import './UploadFiles.css';
const UploadFiles = () => {
    return (
        <div className="file-area">
            <div className="row ">
                <div className="col-md-4 file-type">
                    <input className="w-100" type="file" name="" id="" />
                </div>
                <div className="col-md-8 file-content">
                    <span> Drag & drop any images or documents that might be helpful in explaining your brief here (Max file size: 25 MB). </span>
                </div>
            </div>
        </div>
    );
};

export default UploadFiles;