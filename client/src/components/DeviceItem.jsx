import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { FaRegStar } from 'react-icons/fa';

export const DeviceItem = ({device}) => {
    return (
        <Col md={3} className="mt-3">
            <Card 
                style={{cursor: 'pointer', width: 150}} 
                border={'light'}
                key={device.id} 
                className={`p-3`}
            >
                <Image style={{width: 150, maxWidth: '100%', height: 'auto'}} src={device.img} />
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
