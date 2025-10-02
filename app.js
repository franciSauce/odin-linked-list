// Node factory function
const node = (value = null) => {
    return {
        value,
        nextNode: null
    };
};

// LinkedList factory function
const linkedList = () => {
    return {
        head: null,

        // functions
        append(value) {
            const newNode = node(value);

            if (!this.head) {
                this.head = newNode;
                return;
            }

            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }

            current.nextNode = newNode;
        },

        prepend(value) {
            const newNode = node(value);
            newNode.nextNode = this.head;
            this.head = newNode;
        },

        size() {
            let count =0;
            let current = this.head;

            while (current) {
                count++;
                current = current.nextNode;
            }

            return count;
        },

        head() {
            return this.head;
        },

        tail() {
            if (!this.head) return null;

            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }

            return current;
        },

        at(index) {
            if (index < 0 || !this.head) return null;

            let current = this.head;
            let count = 0;

            while (current && count < index) {
                current = current.nextNode;
                count++;
            }

            return current || null;
        },

        pop() {
            if (!this.head) return;

            if (!this.head.nextNode) {
                this.head = null;
                return;
            }

            let current = this.head;
            let previous = null;

            while (current.nextNode) {
                previous = current;
                current = current.nextNode;
            }

            previous.nextNode = null;
        },

        contains(value) {
            let current = this.head;

            while (current) {
                if (current.value === value) {
                    return true;
                }
                current = current.nextNode;
            }

            return false;
        },

        find(value) {
            let current = this.head;
            let index = 0;

            while (current) {
                if (current.value === value) {
                    return index;
                }
                current = current.nextNode;
                index++;
            }

            return null;
        },

        toString() {
            let result = "";
            let current = this.head;

            while (current) {
                result += `( ${current.value} ) -> `;
                current = current.nextNode;
            }

            result += "null"
            return result;
        },



    }
}


export {
    node,
    linkedList
};