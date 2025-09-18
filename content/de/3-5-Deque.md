## 3.5. Stack, Queue, Deque

```js
class Stack {
  constructor() {
    this.last = null;
  }

  push(item) {
    const prev = this.last;
    const element = { prev, item };
    this.last = element;
  }

  pop() {
    const element = this.last;
    if (!element) return null;
    this.last = element.prev;
    return element.item;
  }
}
```

```js
const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };
const list = new Stack();
list.push(obj1);
list.push(obj2);
list.push(obj3);
```

```js
console.dir(list.pop()); // { name: 'third' }
console.dir(list.pop()); // { name: 'second' }
console.dir(list.pop()); // { name: 'first' }
console.dir(list.pop()); // null
```

> Queue

```js
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  put(item) {
    const last = this.last;
    const element = { next: null, item };
    if (last) {
      last.next = element;
      this.last = element;
    } else {
      this.first = element;
      this.last = element;
    }
  }

  pick() {
    const element = this.first;
    if (!element) return null;
    if (this.last === element) {
      this.first = null;
      this.last = null;
    } else {
      this.first = element.next;
    }
    return element.item;
  }
}
```

```js
const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };

const queue = new Queue();
queue.put(obj1);
queue.put(obj2);
queue.put(obj3);

console.dir(queue.pick()); // { name: 'first' }
console.dir(queue.pick()); // { name: 'second' }
console.dir(queue.pick()); // { name: 'third' }
console.dir(queue.pick()); // null
```

> Dequeue

```js
class Dequeue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  push(item) {
    const last = this.last;
    const element = { prev: last, next: null, item };
    if (last) {
      last.next = element;
      this.last = element;
    } else {
      this.first = element;
      this.last = element;
    }
  }

  pop() {
    const element = this.last;
    if (!element) return null;
    if (this.first === element) {
      this.first = null;
      this.last = null;
    } else {
      this.last = element.prev;
    }
    return element.item;
  }

  unshift(item) {
    const first = this.first;
    const element = { prev: null, next: first, item };
    if (first) {
      first.prev = element;
      this.first = element;
    } else {
      this.first = element;
      this.last = element;
    }
  }

  shift() {
    const element = this.first;
    if (!element) return null;
    if (this.last === element) {
      this.first = null;
      this.last = null;
    } else {
      this.first = element.next;
    }
    return element.item;
  }
}
```

```js
const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };

const list = new Dequeue();
list.push(obj1);
list.push(obj2);
list.unshift(obj3);

console.dir(list.pop()); // { name: 'second' }
console.dir(list.shift()); // { name: 'third' }
console.dir(list.shift()); // { name: 'first' }
```
