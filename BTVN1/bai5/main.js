fetch('https://jsonplaceholder.typicode.com/users')
     .then((res) => res.json())
     .then((result) => console.log(result))
     .catch((err) => console.error(err));


     const promise1 = new Promise((resolve) =>{
          fetch('https://jsonplaceholder.typicode.com/users', resolve);

     });
     const promise2 = new Promise((reject) =>{
          fetch('https://jsonplaceholder.typicode.com/users', reject);

     });
     

     async function cau5(url) {
          let res = await fetch(url);
          let json1 = await res.json();
          console.log(json1);
          let res1 = await promise1;
          console.log(promise1);
          let json2 = await promise2;
          console.log(promise2);
     }
     cau5('https://jsonplaceholder.typicode.com/users')
