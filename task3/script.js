//Write a Programme to Take the product Information asssociated with Customer Information and Show them in a table
const Customer = [{
    firstName: "vishnu",
    lastName: "choudhary",
    age: "20",
    products: [{
        productName: "toy",
        sku: "1538e2",
        price: "$480"
    },
    {
        productName: "sempo",
        sku: "1538e3",
        price: "$120"
    }]
},
{
    firstName: "narendra",
    lastName: "choudhary",
    age: "19",
    products: [{
        productName: "toothpaste",
        sku: "fc1653",
        price: "$45"
    },
    {
        productName: "t-shirt",
        sku: "hf7398",
        price: "$99"
    }]
},
{
    firstName: "Saif",
    lastName: "ali",
    age: "24",
    products: [{
        productName: "lover",
        sku: "hus7612",
        price: "$123"
    },
    {
        productName: "sports",
        sku: "dhu623",
        price: "$230"
    }] 
}]
Customer.forEach((item)=>{
    console.log(item)
})