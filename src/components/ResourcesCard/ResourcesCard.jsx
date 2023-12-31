import React from 'react';


import CardImg from 'assets/imgs/channels4_profile.jpg'

const ResourcesCard = () => {
    return (
        <div className='col-md-3'>
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src={CardImg} alt={CardImg} className="img-fluid"/>
                    <a href="#!">
                        <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-black">Card_title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" className="btn btn-primary">Button</a>
                </div>
            </div>
        </div>
    );
};

export default ResourcesCard;