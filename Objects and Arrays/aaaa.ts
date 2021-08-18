class Product<QuantityType> {
    quantity: QuantityType;
    name: string;
    
    constructor(quantity: QuantityType, name: string) {
      this.quantity = quantity;
      this.name = name
    }
  
  } 
  
  let productNumber = new Product<number>(1,"2");
  let productString = new Product<string>("1","okay");
  
  console.log(productNumber)
  console.log(productString)