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

        
    }
}


export {
    node,
    linkedList
};