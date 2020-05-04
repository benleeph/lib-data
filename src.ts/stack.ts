export class Stack<T> implements Iterable<T> {

    private _data: T[] = [];
    private _top: number = -1;

    constructor() {
    }

    [Symbol.iterator](): Iterator<T, any, undefined> {
        let index = this._top;
        return {
            next: () => {
                if (this._data.length > 0 && index >= 0) {
                    return { value: this._data[index--], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }

    clear() {
        this._data.splice(0, this._data.length);
        this._top = -1;
    }

    purge(): void {
        this._data.splice(this._top + 1, this._data.length);
    }

    isEmpty() {
        return this._top < 0;
    }

    get length() {
        return this._top + 1;
    }

    push(element: T) {
        if (typeof element !== "undefined") {
            this._data[++this._top] = element;
        }
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new Error('Invalid action: no element in stack');
        }
        return this._data[this._top--];
    }

    top(): T {
        if (this.isEmpty()) {
            throw new Error('Invalid action: no element in stack');
        }
        return this._data[this._top];
    }

    bottom(): T {
        if (this.isEmpty()) {
            throw new Error('Invalid action: no element in stack');
        }
        return this._data[0];
    }

    toString() {
        let vals = '';
        for (let idx = this._top; idx >= 0; --idx) {
            if (vals) {
                vals += ', ';
            }
            vals += this._data[idx];
        }
        return `[${vals}]`;
    }

}