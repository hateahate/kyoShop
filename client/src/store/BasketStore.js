import { makeAutoObservable } from "mobx";

export default class BasketStore {
    constructor() {
        this._items = {}
        makeAutoObservable(this)
    }

    setItems() {
        // Пока так
    }

    get items() {
        return this._items
    }
}