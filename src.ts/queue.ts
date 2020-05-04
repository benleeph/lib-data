export class Queue<T> {

    private _data: T[] = [];
    private _frontIndex: number = 0;

    constructor() {
    }

    clear(): void {
        this._data.splice(0, this._data.length);
        this._frontIndex = 0;
    }

    purge(): void {
        this._data.splice(0, this._frontIndex);
        this._frontIndex = 0;
    }

    isEmpty() {
        return this._data.length === 0 || this._frontIndex > this._data.length;
    }

    get length() {
        return this._data.length - this._frontIndex;
    }

    enqueue(element: T) {
        if (typeof element !== "undefined") {
            this._data[this._data.length] = element;
        }
    }

    dequeue(): T {
        if (this.isEmpty()) {
            throw new Error('Invalid action: no element in queue');
        }

        const elem = this._data[this._frontIndex++];
        if (this._frontIndex >= this._data.length) {
            this.clear();
        }
        return elem;
    }

    front(): T {
        if (this.isEmpty()) {
            throw new Error('Invalid action: no element in queue');
        }

        return this._data[this._frontIndex];
    }

    rear(): T {
        if (this.isEmpty()) {
            throw new Error('Invalid action: no element in queue');
        }

        return this._data[this._data.length - 1];
    }

}