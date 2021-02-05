import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const CreateType = ({show, onHide}) => {
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
                    onClick={() => {}}
                    variant="outline-success"
                >Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}
