import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
    {
      id: 'p1',
      title: "Test 1",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: 'p2',
      title: "Test 2",
      price: 10,
      description: "This is a second product - amazing!",
    },
    {
      id: 'p3',
      title: "Test 3",
      price: 9,
      description: "This is a third product - amazing!",
    },
  ];

const Products = (props) => {
  const content = DUMMY_DATA.map(item => (
      <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
    
  ))

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {content}
      </ul>
    </section>
  );
};

export default Products;
