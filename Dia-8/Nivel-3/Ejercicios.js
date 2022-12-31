const users = [
    {
      _id: "ab12ex",
      username: "Alex",
      email: "alex@alex.com",
      password: "123123",
      createdAt: "08/01/2020 9:00 AM",
      isLoggedIn: false,
    },
    {
      _id: "fg12cy",
      username: "Asab",
      email: "asab@asab.com",
      password: "123456",
      createdAt: "08/01/2020 9:30 AM",
      isLoggedIn: true,
    },
    {
      _id: "zwf8md",
      username: "Brook",
      email: "brook@brook.com",
      password: "123111",
      createdAt: "08/01/2020 9:45 AM",
      isLoggedIn: true,
    },
    {
      _id: "eefamr",
      username: "Martha",
      email: "martha@martha.com",
      password: "123222",
      createdAt: "08/01/2020 9:50 AM",
      isLoggedIn: false,
    },
    {
      _id: "ghderc",
      username: "Thomas",
      email: "thomas@thomas.com",
      password: "123333",
      createdAt: "08/01/2020 10:00 AM",
      isLoggedIn: false,
    },
  ];
  
const products = [
  {
      _id: "eedfcf",
      name: "mobile phone",
      description: "Huawei Honor",
      price: 200,
      ratings: [
        { userId: "fg12cy", rate: 5 },
        { userId: "zwf8md", rate: 4.5 },
      ],
      likes: [],
  },
  {
      _id: "aegfal",
      name: "Laptop",
      description: "MacPro: System Darwin",
      price: 2500,
      ratings: [],
      likes: ["fg12cy"],
  },
  {
      _id: "hedfcg",
      name: "TV",
      description: "Smart TV:Procaster",
      price: 400,
      ratings: [{ userId: "fg12cy", rate: 5 }],
      likes: ["fg12cy"],
  },
];
/*
    1.Crea un objeto literal llamado personAccount. Tiene las propiedades firstName, lastName, incomes, expenses y tiene los metodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción.
*/
const personAccount={
    firstname:"",
    lastName:"",
    incomes:{
        ingreso:[],
        descriptionI:[]
    },
    expenses:{
        gasto:[],
        descriptionG:[]
    },
    totalIncome:function(){},
    totalExpense:function(){},
    accountInfo:function(){},
    addIncome:function() {},
    addExpense:function(){},
    accountBalance:function(){}
}
console.log(personAccount);
 /*
    2.Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB. 
 */
    /*
        a.Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
    */
        function userIdGenerator() {
            const nums="0123456789",
            letters="abcdefghijklmnñopqrstuvwxyz",
            lettersUpper=letters.toUpperCase(),
            caracteres=nums.concat(letters,lettersUpper),
            idA=[];
            for (let i = 0; i < 7; i++) {
                let item=caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                idA.push(item);
            }
            return idA.join("");
        }
        const obj=Object.values(users)
        function signUp(email,password,username,) {
            for (const item of obj) {
                if(item.email==email)
                return "Usted ya tiene una cuenta "+item.username;
            }
            users.push({
                "_id":userIdGenerator(),
                "username":username,
                "email":email,
                "password":password,
                "createdAt":new Date(),
                "isLoggedIn":true
            })
            return users;
        }
        console.log(signUp("Bryan@hotmail","123","bryan"));
        console.log(users);
    /*
        b.Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación
    */
        function signIn(email,password) {
            for (const item of obj) {
                if(item.email==email && item.password==password)
                return "Bienvenido "+item.username;
            }
            return "Correo y/o contraseña invalida";
        }
        console.log(signIn("alex@alex.com","123123"));
/*
    3.El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades.
*/
    /*
        a.Crear una función llamada rateProduct que califique el producto
    */
        const objP=Object.values(products);
        function rateProduct(name,userId,rate) {
            for (const item of objP) {
              if(item.name==name){
                  item.ratings.push({
                      "userId":userId,
                      "rate":rate
                  })
                  return objP
              }
            }
            return "El nombre del producto "+name+" no esta disponible";
        }
        console.log(rateProduct("mobile phone","prueba",10));
        console.log(rateProduct("TV","prueba2",10));
    /*
        b.Crear una función llamada averageRating que calcule la valoración media de un producto
    */
        function averageRating(name) {
          for (const item of objP) {
            if(item.name==name){
              const rate=Object.values(item.ratings);
              let sum=0,cont=0;
              for (const i of rate) {
                sum+=i.rate;
                cont++;
              }
              if(cont==0)return "El producto "+name+ " no tiene ratings para realizar el promedio";
              let prom=sum/cont;
              return "El promedio de los ratings del producto "+name+ " es: "+prom;
            } 
          }
          return "El nombre del producto "+name+" no esta disponible";
        }
        console.log(averageRating("TV"));
/*
    4.Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like
*/
    function likeProduct(nameP,userId,isLiked) {
      for (const item of objP) {
        if(item.name==nameP){
            if(isLiked){
              item.likes.push(userId);
            }
            else{
              idx=item.likes.indexOf(userId);
              item.likes.splice(idx,1)
            }
            return objP;
        }
      }
      return "El nombre del producto "+nameP+" no esta disponible";
    }
    console.log(likeProduct("TV","prueba2",true));
    console.log(likeProduct("TV","nueva prueba",true));
    console.log(likeProduct("TV","prueba2",false));
    console.log(likeProduct("TV","prueba2",true));
    console.log(likeProduct("TV","nueva prueba",false));