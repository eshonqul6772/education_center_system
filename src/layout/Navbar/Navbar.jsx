import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Button, Dropdown} from 'antd';
import {LiaUserCircleSolid} from 'react-icons/lia';
import {FiLogOut, FiSettings} from 'react-icons/fi'

import './Navbar.scss';
import {LOGOUT} from 'reducers/types';
import MeServisece from 'services/user.service'

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState('')

    useEffect(() => {
        MeServisece.getUser().then((res) => {
            setUser(res.data)
          // console.log(res.data)
            // if (res.data.status === '200') {
            // }
            // if (res.status === '401') {
            //     navigate('/')
            //     dispatch({type: LOGOUT})
            // }
        })
    }, []);

    const handleLogout = () => {
        navigate('/')
        dispatch({type: LOGOUT})
    };
    const items = [
        {
            key: '1',
            label: <button className="fs-4" onClick={() => navigate('/user')}><LiaUserCircleSolid
                size="30px"/>{user.firstName}</button>,
        },
        {
            key: '2',
            label: <button className="fs-4" onClick={handleLogout}><FiLogOut size="30px" color="red"/>Logout</button>,
        },
    ];

    return (
        <div className="navbar">
            <div className="navbar__content">
                <h2>Category_Title</h2>

                <Dropdown overlayStyle={{width: '200px'}}
                          menu={{
                              items,
                          }}
                          placement="bottomLeft"
                          arrow
                >
                    <Button className="navbar__btn">
                        <FiSettings size="40px"/>
                    </Button>
                </Dropdown>
            </div>
        </div>
    );
};

export default Navbar;
