import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2c94",
  },
  {
    id: 2,
    name: "Monstera",
    category: "Indoor Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 3,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 4,
    name: "Spider Plant",
    category: "Indoor Plants",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 5,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683",
  },
  {
    id: 6,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },

  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
  },
  {
    id: 8,
    name: "Jade Plant",
    category: "Succulents",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 9,
    name: "Echeveria",
    category: "Succulents",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1515402587880-8f6a4e2b9b2e",
  },
  {
    id: 10,
    name: "Haworthia",
    category: "Succulents",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 11,
    name: "Zebra Plant",
    category: "Succulents",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 12,
    name: "String of Pearls",
    category: "Succulents",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
  },

  {
    id: 13,
    name: "Orchid",
    category: "Flowering Plants",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb",
  },
  {
    id: 14,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 15,
    name: "African Violet",
    category: "Flowering Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  },
  {
    id: 16,
    name: "Begonia",
    category: "Flowering Plants",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  },
  {
    id: 17,
    name: "Kalanchoe",
    category: "Flowering Plants",
    price: 23,
    image:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7",
  },
  {
    id: 18,
    name: "Geranium",
    category: "Flowering Plants",
    price: 26,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants",
  ];

  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
        </div>

        <Link to="/cart">
          🛒 Cart ({cartCount})
        </Link>
      </nav>

      <main className="products-container">
        <h1>Paradise Nursery Plants</h1>

        {categories.map((category) => (
          <section
            className="product-category"
            key={category}
          >
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter(
                  (plant) => plant.category === category
                )
                .map((plant) => {
                  const alreadyInCart = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div
                      className="product-card"
                      key={plant.id}
                    >
                      <img
                        src={plant.image}
                        alt={plant.name}
                      />

                      <h3>{plant.name}</h3>

                      <p>
                        Price: ${plant.price.toFixed(2)}
                      </p>

                      <button
                        onClick={() =>
                          dispatch(addItem(plant))
                        }
                        disabled={alreadyInCart}
                      >
                        {alreadyInCart
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
