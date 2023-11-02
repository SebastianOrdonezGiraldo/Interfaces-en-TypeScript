interface BaseObject {
    id: number;
  }
  
  interface User1 extends BaseObject {
    name: string;
    age: number;
  }
  
  interface Product extends BaseObject {
    name: string;
    price: number;
  }
  
  interface Order extends BaseObject {
    products: Product[];
    user1: User1; 
  }
  
  function imprimirDatos<T extends BaseObject>(obj: T): void {
    console.log(obj);
  }
  
  const user1: User1 = { id: 1, name: "John", age: 30 }; 
  const product: Product = { id: 2, name: "Product A", price: 19.99 }; 
  const order: Order = {
    id: 3,
    products: [product], 
    user1: user1, 
  };
  
  imprimirDatos(user1);
  imprimirDatos(product);
  imprimirDatos(order);
  
