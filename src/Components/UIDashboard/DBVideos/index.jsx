import React from 'react';
import './DBVideos.css'

function DBVideos(props) {
    return (
        <div className="col col-sm-12 col-md-6 db-videos list-header-msg">
            <h2>Vidoes</h2>
            <ul className="list-unstyled rounded">
                <li className="media shadow mb-2 bg-white rounded">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    <img width="150" height="75" controls/>
                    </button>
                    <div className="media-body">
                        <h5 className="list-header-msg mt-0 mb-1">How do I update your beneficairy?</h5>
                    </div>
                </li>
                <li className="media shadow mb-2 bg-white rounded">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    <img width="150" height="75" controls/>
                    </button>
                    <div className="media-body">
                        <h5 className="list-header-msg mt-0 mb-1">How can I file a claim?</h5>
                    </div>
                </li>
                <li className="media shadow mb-2 bg-white rounded">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        <img width="150" height="75" controls/>
                    </button>
                    <div className="media-body">
                        <h5 className="list-header-msg mt-0 mb-1">How do I check the status of a claim?</h5>
                    </div>
                </li>
            </ul>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <iframe id="cartoonVideo" className="embed-responsive-item" width="560" height="315" src="//www.youtube.com/embed/YE7VzlLtp-4" allowfullscreen></iframe>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DBVideos;