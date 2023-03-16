fetch('https://jsonplaceholder.typicode.com/users')
     .then((res) => res.json())
     .then((result) => console.log(result))
     .catch((err) => console.error(err));

     async function cau5(url) {
          try{
               let res = await fetch(url);
               let json1 = await res.json();
               console.log(json1);
               console.log(result);

          }catch(err)
          {
               console.log(err);
          }
     }
     cau5('https://jsonplaceholder.typicode.com/users')
