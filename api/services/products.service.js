const { faker } = require("@faker-js/faker");

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 10; i++) {
      this.products.push({
        id: crypto.randomUUID(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
  }

  async create(product) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newProduct = { id: crypto.randomUUID(), ...product };
        this.products.push(newProduct);
        resolve(newProduct);
      }, 1500);
    });
  }

  async find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 1500);
    });
  }

  async findOne(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = this.products.find((item) => item.id === id);
        if (!product) {
          reject(new Error("Producto no encontrado"));
        }
        resolve(product);
      }, 1500);
    });
  }

  async update(id, changes) {
    return new Promise(async (resolve, reject) => {
      setTimeout(async () => {
        const product = await this.findOne(id);
        if (!product) {
          return reject(new Error("Producto no encontrado"));
        }

        const updated = { ...product, ...changes };
        this.products = this.products.map((p) => (p.id === id ? updated : p));
        resolve(updated);
      }, 1500);
    });
  }

  async delete(id) {
    return new Promise(async (resolve, reject) => {
      setTimeout(async () => {
        const product = await this.findOne(id);
        if (!product) {
          return reject(new Error("Producto no encontrado"));
        }

        this.products = this.products.filter((p) => p.id !== id);
        resolve(product);
      }, 1500);
    });
  }
}

module.exports = ProductService;
