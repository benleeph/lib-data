class Queue<T> {

    private _data: T[] = [];

    constructor() {
    }

    clear(): void {
        this._data.splice(0, this._data.length);
    }

    isEmpty() {
        return this._data.length === 0;
    }

    get length() {
        return this._data.length;
    }

    enqueue(element: T) {
        this._data[this._data.length] = element;
    }

    dequeue(): T {
        if (this._data.length === 0) {
            throw new Error('Invalid action: no element in queue');
        }

        return this._data.shift();
    }

    front(): T {
        if (this._data.length === 0) {
            throw new Error('Invalid action: no element in queue');
        }

        return this._data[0];
    }

    rear(): T {
        if (this._data.length === 0) {
            throw new Error('Invalid action: no element in queue');
        }

        return this._data[this._data.length - 1];
    }

}