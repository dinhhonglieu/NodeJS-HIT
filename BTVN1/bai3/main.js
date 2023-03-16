let users = [
    { id: 1, name: 'Hung', age: 17, role: 'admin' },
    { id: 32, name: 'HungThu2', age: 71, role: 'admin' },
    { id: 65, name: 'Dung', age: 21, role: 'user' },
    { id: 87, name: 'Quy', age: 99, role: 'user' },
    { id: 123, name: 'Chi', age: 8, role: 'user' },
   ];
   

let Arr = [];
let a = users.length;
for (let i = 0; i< a; i++) {
    let obj = {};
    obj[users[i].id] = users[i];
    Arr.push(obj);
}
   
console.log(Arr);