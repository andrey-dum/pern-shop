import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import ListGroup from 'react-bootstrap/ListGroup'

export const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <ListGroup as="ul">

            {device.types.map(type => (
                <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    active={type.id === device.selectedType.id}
                    key={type.id} 
                    onClick={() => device.setSelectedType(type)}
                >
                    {type.name}
                </ListGroup.Item>
            ))}
            {/* <ListGroup.Item as="li" active>
                Cras justo odio
            </ListGroup.Item> */}
        </ListGroup>
    )
})
