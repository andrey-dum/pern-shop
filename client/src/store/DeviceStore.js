import {makeAutoObservable} from 'mobx'


export default class DeviceStore {
    constructor() {
        this._types = [
            // {id: 1, name: 'Смартфоны'},
            // {id: 2, name: 'Ноутбуки'},
            // {id: 3, name: 'Телевизоры'},
            // {id: 4, name: 'Холодильники'},
        ]
        this._brands = [
            // {id: 1, name: 'Apple'},
            // {id: 2, name: 'Samsung'},
            // {id: 3, name: 'Lenovo'},
            // {id: 4, name: 'LG'},
        ]
        this._devices = [
            // {id: 1, name: '12 pro', price: 25000, rating: 5, img: "https://i.citrus.ua/imgcache/size_500/uploads/shop/d/2/d21fc7834096ee92025677dcd757bb81.jpg"},
            // {id: 2, name: '10 pro', price: 10000, rating: 5, img: "https://i.citrus.ua/imgcache/size_500/uploads/shop/d/2/d21fc7834096ee92025677dcd757bb81.jpg"},
            // {id: 3, name: '11 pro', price: 20000, rating: 5, img: "https://i.citrus.ua/imgcache/size_500/uploads/shop/d/2/d21fc7834096ee92025677dcd757bb81.jpg"},
        ]
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}
