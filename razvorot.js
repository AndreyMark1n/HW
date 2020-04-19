Array.prototype.reverse = function(){
    let arr = [];
    for( let i = this.length; i--; ){
        arr.push( this[i] );
    };
    return arr;
};

let a = [1, 2, 3, 4, 5, 6, 7, 8,];
let b = a.reverse();

alert(a);
alert(b);
