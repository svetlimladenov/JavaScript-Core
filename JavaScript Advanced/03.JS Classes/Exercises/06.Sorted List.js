class SortedList{
    constructor(){
        this.size = 0;
        this._list = [];
    }

    add(element){
        this._list.push(element);
        this.sort();
        this.size++;
    }

    remove(index){
        if (index < 0 || index >= this._list.length){
            throw new Error('Invalid index');
        }
        this._list.splice(index,1);
        this.sort();
        this.size--;
    }

    get(index){
        if (index < 0 || index >= this._list.length){
            throw new Error('Invalid index');
        }
        return this._list[index];
    }

    sort(){
        this._list.sort((a,b) => a - b);
    }

}

var myList = new SortedList();
console.log(myList.hasOwnProperty('size'));
myList.add(5);
console.log(myList.get(0));
myList.add(3);
console.log(myList.get(0));
myList.remove(0);
console.log(myList.get(0));