




class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // Initialize next as null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        } else {
            const node = new Node(value);
            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                let prev = this.head;
                for (let i = 0; i < index - 1; i++) {
                    prev = prev.next;
                }
                node.next = prev.next;
                prev.next = node;
            }
            this.size++;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let curr = this.head;
            let listValue = "";
            while (curr) {
                listValue += `${curr.value} `;
                curr = curr.next; // Fix here: traverse the list using curr.next
            }
            console.log(listValue.trim());
        }
    }
}

const list = new LinkedList();

list.insert(30, 0);
list.insert(40, 1);
list.insert(50, 2);
list.print();
