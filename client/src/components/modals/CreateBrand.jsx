import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { createBrand } from '../../http/deviceApi'

export const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('');

    const addBrand = async() => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Название"}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    onClick={onHide}
                    variant="outline-danger"
                >Close
                </Button>
                <Button 
                    onClick={addBrand}
                    variant="outline-success"
                >Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}
