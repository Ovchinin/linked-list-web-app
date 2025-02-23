class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addToHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    addToTail(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    remove(data) {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.data === data) {
                if (previous === null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return;
            }
            previous = current;
            current = current.next;
        }
    }

    display() {
        let current = this.head;
        let str = "";
        while (current) {
            str += current.data;
            if (current.next) {
                str += " -> ";
            }
            current = current.next;
        }
        return str;
    }
}

const linkedList = new LinkedList();
const newValueInput = document.getElementById("newValue");
const deleteValueInput = document.getElementById("deleteValue");
const addToHeadButton = document.getElementById("addToHead");
const addToTailButton = document.getElementById("addToTail");
const deleteButton = document.getElementById("deleteButton");
const listDisplay = document.getElementById("listDisplay");

addToHeadButton.addEventListener("click", () => {
    const value = newValueInput.value;
    linkedList.addToHead(value);
    newValueInput.value = "";
    updateDisplay();
});

addToTailButton.addEventListener("click", () => {
    const value = newValueInput.value;
    linkedList.addToTail(value);
    newValueInput.value = "";
    updateDisplay();
});

deleteButton.addEventListener("click", () => {
    const value = deleteValueInput.value;
    linkedList.remove(value);
    deleteValueInput.value = "";
    updateDisplay();
});

function updateDisplay() {
    listDisplay.textContent = linkedList.display();
}