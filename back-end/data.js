import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Callum",
      email: "Callumroy@me.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false
    }
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 10,
      brand: "Nike",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product"
    },

    {
      name: "Locoste Free Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 220,
      countInStock: 20,
      brand: "Nike",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product"
    },

    {
      name: "Nike Slim Pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 90,
      countInStock: 0,
      brand: "Nike",
      rating: 4.0,
      numReviews: 5,
      description: "high quality product"
    },

    {
      name: "Puma Slim Shirt",
      category: "Shirts",
      image: "/images/p4.jpg",
      price: 95,
      countInStock: 50,
      brand: "Puma",
      rating: 4.1,
      numReviews: 12,
      description: "high quality product"
    },
    {
      name: "Adidas Slim Pants",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 120,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.8,
      numReviews: 15,
      description: "high quality product"
    }
  ]
};
export default data;
