import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { CreateType } from '../components/modals/CreateType'
import { CreateBrand } from '../components/modals/CreateBrand'
import { CreateDevice } from '../components/modals/CreateDevice'

export const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <Container className="d-flex flex-column pt-3">
        
           <Button
                className="mt-3"
                variant={'outline-dark'}
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
           <Button
                className="mt-3"
                variant={'outline-dark'}
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
           <Button
                className="mt-3"
                variant={'outline-dark'}
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>

            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>

        </Container>
    )
}
