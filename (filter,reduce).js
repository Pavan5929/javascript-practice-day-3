/*let nums=[1000,2000,3000,4000]

let res=nums.filter(

    (ele,ind,arr)=>
    {
        return ele>=3000
    }
)

console.log(res)

let products = [

       {
        name:"red me pro",
        price:2000,
        category:"mobiles"
       },

       {
        name:"iphone",
        price:290299,
        category:"mobiles"
       },

       {
        name:"asus",
        price:30000,
        category:"laptop"
       }
]

  let fproduct = products.filter(

              (p,i,arr)=>
              {
                return p.category=="mobiles"
              }
  )

  console.log(fproduct)

  let products = [

       {
           name:"samsung",
           price:20000,
           category:"mobiles"
       },

       {
          name:"iphone",
          price:40000,
          category:"mobiles"
       },

       {
          name:"dell",
          price:50300,
          category:"laptops"
       }
  ]

  let fproducts=products.filter(

        categories
  )

  function categories(p,index,arr){
         
    return p.category == "laptops"
  }

  console.log(fproducts);*/

  let nums=[1000,2000,3000]

  let res=nums.reduce(

    (val,ele,ind,arr)=>
    {
        return val+ele
    }
    ,0)

    console.log(res)

order=[

    {
        no:10,
        total:5000,
        date:"11/04/2023"
    },

    {
        no:10,
        total:10000,
        date:"10/04/2023"
    },

    {
        no:14,
        total:1000,
        date:"11/04/2023"
    }
]

let order_total=order.reduce(

    (val,orders,ind,arr)=>
    {
        return val+orders.total;
    },0
)

console.log(order_total)

