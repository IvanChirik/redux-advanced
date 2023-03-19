import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const DEAMMY_ITEMS = [
  {
    id: (Math.random() * 10).toFixed(2),
    title: "Супер-Товар 1",
    price: 7,
    description: "Благодаря своему высокому качеству, этот товар прослужит вам очень долго.",
  },
  {
    id: (Math.random() * 10).toFixed(2),
    title: "Супер-Товар 2",
    price: 9,
    description: "Благодаря своему высокому качеству, этот товар прослужит вам очень долго.",
  },
  {
    id: (Math.random() * 10).toFixed(2),
    title: "Супер-Товар 3",
    price: 11,
    description: "Благодаря своему высокому качеству, этот товар прослужит вам очень долго.",
  },
]
const Products = (props) => {
  return (
    <section className={styles.products}>
      <h2>В нашем магазине товары самого высокого качества</h2>
      <ul>
        {DEAMMY_ITEMS.map(item => {
          return <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        })}
      </ul>
    </section>
  );
};

export default Products;
