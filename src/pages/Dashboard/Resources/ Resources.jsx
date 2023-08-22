import React from 'react';


import ResourcesCard from 'components/ResourcesCard';
import Upload from './Upload';
import Button from 'components/Button/Button';
import { Navigate } from 'react-router-dom';

const Resources = () => {
    return (
        <div className='table__box'>
            <div className='row'>
                <Upload/>


                <Button title='Add' variant='primary' onClick={()=> Navigate("/resources/upload")}/>
            </div>
        </div>
    );
};

export default Resources;