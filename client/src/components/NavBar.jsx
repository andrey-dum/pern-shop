import React, {useContext} from 'react'
import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';


export const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to="/">Shop</NavLink>
                
                {user.isAuth ? 
                    <Nav className="ml-auto">
                        <Button variant="outline-light">Админ панель</Button>
                        <Button variant="outline-light" className="ml-2">Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})
