var products=[

    {id:1,title:"samsungs23ultra",price:130000,brand:"samsung"},
    {id:2,title:"m32",price:35000,brand:"samsung"},
    {id:3,title:"opporeno",price:27000,brand:"oppo"},
    {id:4,title:"mi21note",price:23000,brand:"mi"},
    {id:5,title:"moto edge 40",price:230000,brand:"moto"},
    {id:6,title:"moto ede40 neo",price:250000,brand:"moto"},
    {id:7,title:"iphone13",price:14000,brand:"apple"},
    {id:8,title:"iphone13pro",price:15000,brand:"apple"},
  
]
//total number of products

// console.log(products.length);

//print all products title
// var productNames=products.map(p=>p.title)

// console.log(productNames);

//print all mobile names available under rs 35k

//var mobilePriceFilter=products.filter(p=>p.price<35000).
// console.log(mobilePriceFilter);

//print all samsung mobiles available under rs 50k

//var samsungMobileFilter=products.filter(p=>p.brand == "samsung" && p.price < 50000).map(p=>p.title)
// console.log(samsungMobileFilter);

//var costlyProduct=products.reduce((p1,p2)=>p1.price>p2.price?p1.title:p2.title)
// console.log(costlyProduct);map(p=>p.title)

//sort products wrt price order by desc

//products.sort((p1,p2)=>p2.price-p1.price)
//console.log((products));

// console.log(products.map(p=>p.title));

//print product names btw 25k and 35k

var productRange=products.filter(p=>p.price>25000 && p.price <= 35000).map(p=>p.title)
console.log(productRange);