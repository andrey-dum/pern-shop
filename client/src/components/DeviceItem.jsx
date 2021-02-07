import React from 'react'
import { useHistory } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { FaRegStar } from 'react-icons/fa';
import { DEVICE_ROUTE } from '../utils/consts'

const RACT_APP_API_URL = 'http://localhost:5000/'

export const DeviceItem = ({device}) => {
    const history = useHistory()

    return (
        <Col md={3} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + `/${device.id}`)}>
            <Card 
                style={{cursor: 'pointer', width: 150}} 
                border={'light'}
                key={device.id} 
                className={`p-3`}
            >
                <Image style={{width: 150, maxWidth: '100%', height: 'auto'}} src={RACT_APP_API_URL + device.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>apple</div>
                    <div className="d-flex align-items-center">
                        {device.rating}
                        {/* icon 20x20 */}
                        <FaRegStar style={{fontSize: 16}} />
                    </div>
                </div>
                <div><h5>{device.name}</h5></div>
            </Card>
        </Col>
    )
}
