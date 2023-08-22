import React from 'react';

import ResourcesCard from 'components/ResourcesCard';

const Resources = () => {
    return (
        <div className='table__box'>
            <div className='row'>
                <ResourcesCard/>
                <ResourcesCard/>
                <ResourcesCard/>
                <ResourcesCard/>
            </div>
        </div>
    );
};

export default Resources;