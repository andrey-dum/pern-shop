import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { fetchOneDevice } from '../http/deviceApi'
import {useParams} from 'react-router-dom'
const RACT_APP_API_URL = 'http://localhost:5000/'

export const DevicePage = () => {
    // const device = {id: 1, name: '12 pro', price: 25000, rating: 5, img: "https://i.citrus.ua/imgcache/size_500/uploads/shop/d/2/d21fc7834096ee92025677dcd757bb81.jpg"}
    // const description = [
    //     {id: 1, title: 'Оперативная память', description: '5 гб'},
    //     {id: 2, title: 'Камера', description: '12 мп'},
    //     {id: 3, title: 'Процессор', description: 'snapDragon'}
    // ]
    const [device, setDevice] = useState({info: []});
    const params = useParams()

    useEffect(() => {
       fetchOneDevice(params.id).then(data => setDevice(data))
    }, []);

    return (
        <Container className="pt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} src={RACT_APP_API_URL + device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex justify-content-center align-items-center"
                        >
                            <div className="rating" style={{position: 'absolute', fontSize: 60, fontWeight: 700, color: '#333'}}>
                                {device.rating}
                            </div>
                            <div className="icon"><FaStar style={{fontSize: 260, color: '#cecece'}} /></div>
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="p-3 d-flex flex-column align-items-center justify-content-around"
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1 className="mb-3">Характеристики</h1>
                {device.info.map((info, index) => (
                    <Row key={info.id} style={{background: index % 2 === 0 ? '#ececec': 'white', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>
        </Container>
    )
}
