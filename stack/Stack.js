class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    push(element){
        this.items.push(element);
        this.count++;
    }
    pop() {
        if (this.isEmpty()) {  
        return undefined;
        }
        this.count--;
        const result = this.items[this.count]; 
        delete this.items[this.count];  
        return result; 
        }
        
    peek() {
        if (this.isEmpty()) {
        return undefined;
        }
        return this.items[this.count - 1];
        }
            
    isEmpty(){
        return this.count === 0;
    }
    size(){
        return this.count;
    }
    clear(){
        while (!this.isEmpty()) {
            this.pop();
            }
        this.count = 0;
    }
    toString() {
        if (this.isEmpty()) {
        return '';
        }
        let objString = `${this.items[0]}`; // {1}
        for (let i = 1; i < this.count; i++) { // {2}
        objString = `${objString},${this.items[i]}`; // {3}
        }
        return objString;
        }
        
}
module.exports = Stack;