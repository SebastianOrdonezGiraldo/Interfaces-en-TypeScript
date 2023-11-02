interface product {
    id:number;
    name: string;
    price: number;
}
interface Inventory {
    products: product[];
    addProduct(product: product): void;
    findProductById(id: number): product | undefined;
}
class SimpleInventory implements Inventory {
    products: product[] = [];
  
    addProduct(product: product): void {
      this.products.push(product);
    }
  
    findProductById(id: number): product | undefined {
      return this.products.find((product) => product.id === id);
    }
  }
  const inventory = new SimpleInventory();

  inventory.addProduct({ id: 1, name: "Product A", price: 10.99 });
  inventory.addProduct({ id: 2, name: "Product B", price: 19.99 });
  
  const foundProduct = inventory.findProductById(1);
  if (foundProduct) {
    console.log("Product found:", foundProduct);
  } else {
    console.log("Product not found");
  }