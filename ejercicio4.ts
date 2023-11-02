interface BaseObject {
    id: number;
  }
  
  class User implements BaseObject {
    id: number;
  
    constructor(id: number) {
      this.id = id;
    }
  }
  
  class Product implements BaseObject {
    id: number;
  
    constructor(id: number) {
      this.id = id;
    }
  }
  
  class Order implements BaseObject {
    id: number;
  
    constructor(id: number) {
      this.id = id;
    }
  }
  
  function printData<T extends BaseObject>(baseObject: T): void {
    console.log(baseObject);
  }
  