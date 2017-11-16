export default abstract class Option<A> {

    abstract get isEmpty(): boolean;

    get isDefined(): boolean {
        return !this.isEmpty;
    }
    
    abstract get(): A;

    map <B> (f: (a: A) => B): Option<B> {
        if (this.isEmpty) {
            return None();
        } else {
            return Some(f(this.get()));
        }
    }

    getOrElse(_default: A): A {
        if (this.isEmpty) {
            return _default;
        } else {
            return this.get();
        }
    }
}

class Just<A> extends Option<A> {
    private value: A;
    constructor(value: A)  {
        super();
        this.value = value;
    }

    get isEmpty(): boolean {
        return false;
    }

    get(): A {
        return this.value;
    }
}

class Nothing<A> extends Option<A> {
    constructor() {
        super();
    }

    get isEmpty(): boolean {
        return true;
    }

    get(): A {
        throw Error("NoSuchElementException");
    }
}

export function Some<A>(a: A): Option<A>{
    if (a === undefined || a === null) {
        return new Nothing();
    }
    return new Just(a);
}

export function None<A>(): Option<A> {
    return new Nothing();
}
