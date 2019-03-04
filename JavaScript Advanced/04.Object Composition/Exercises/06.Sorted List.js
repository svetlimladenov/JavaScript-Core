function solve() {
    let list = [];

    let functions = {
        size : 0,
        add: function (element) {
            list.push(element);
            this.sort();
            this.size++;
        },
        remove : function (index) {
            if (index < 0 || index >= list.length) {
                throw new Error('Invalid index');
            }
            list.splice(index, 1);
            this.sort();
            this.size--;
        },
        get : function get(index) {
            if (index < 0 || index >= list.length) {
                throw new Error('Invalid index');
            }
            return list[index];
        },
            sort : function () {
            list.sort((a, b) => a - b);
        },
    };
    return functions;
}
