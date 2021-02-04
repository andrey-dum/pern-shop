import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';


export const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to="/">Shop</NavLink>
                
                {user.isAuth ? 
                    <Nav className="ml-auto">
                        <Button 
                            variant="outline-light" 
                            onClick={() => history.push(ADMIN_ROUTE)}
                            >Админ панель
                        </Button>
                        <Button 
                            variant="outline-light" 
                            className="ml-2" 
                            onClick={() => history.push(LOGIN_ROUTE)}
                        >Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button 
                            variant="outline-light" 
                            onClick={() => user.setIsAuth(true)}
                            >Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})
