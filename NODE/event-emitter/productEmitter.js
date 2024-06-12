const EventEmitter = require("events")

class ProductService extends EventEmitter{

  constructor() {
    super()
    this.products = []
  }


  addProduct(product){
    this.products.push(product)
    this.emit("productAdded", product)
  }

  updateProduct(id, product) {
    const productIndex = this.products.findIndex( (p) => p.id === id)

    if (productIndex !== -1){
      this.products[i] = { id : id, ... product}
      this.emit("productUpdated")
    }
  }
}





const poductService = new ProductService() 

poductService.on("productAdded", (product) => {
  console.log("New product added")
  console.log(product)
})

poductService.on("productUpdated", () => {
  console.log("Product updated")
})




poductService.addProduct({
  id : 1,
  name : "Jhon"
})

