import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { createType } from '../../http/deviceApi'

export const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('');

    const addType = async() => {
        createType({name: value}).then(data => {
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
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Название"}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
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
                    onClick={addType}
                    variant="outline-success"
                >Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}
