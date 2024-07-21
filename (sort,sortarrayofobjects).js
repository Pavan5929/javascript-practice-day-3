let arr=[700,20,60,80,10]

let a2=arr.sort(
    (a,b) =>{
        return a<b?-1:1;

    }
);

console.log(arr)

let products = [
    {
        names:"real me 8 pro",
        price:20000,
        category:"mobiles"
    },
    {
        name:"lenovo thinkpad",
        price:20000,
        category:"laptops"
    },
    {
        name:"red me note11",
        price:400000,
        category:"mobiles"
    }
]

products.sort(

    (p1,p2)=>
    {
        return p1.price>p2.price ? 1:-1
    }
)

console.log(products)

products.sort(

    (p1,p2)=>
    {            
        return p1.price<p2.price ? 1:-1
    }
)

console.log(products)