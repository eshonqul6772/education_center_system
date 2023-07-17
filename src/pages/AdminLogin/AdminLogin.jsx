import React from 'react'
import { Input, Button } from "antd"

import "./AdminLofin.scss"

const AdminLogin = () => {
    return (
        <>
            <div className='wrapper'>
                <form action="">
                    <h2>admin Login</h2>

                    <div className='form__box'>
                        <Input placeholder="Tel Number" />
                        <Input.Password placeholder="password" />
                    </div>

                    <Button className='btn__submit' type="primary">Primary Button</Button>
                </form>
            </div>
        </>
    )
}

export default AdminLogin;