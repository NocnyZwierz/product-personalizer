import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from './ProductImage';
import ProductForm from './ProductForm';



const Product = ({title, basePrice, colors, sizes, name}) => { // stan poczatkowy prodóktów
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => { // obliczanie ceny
    const selectedSize = sizes.find(size => size.name === currentSize);
    return basePrice + selectedSize.additionalPrice;
  };;

  const handleSubmit = (event) => { //wyświetlanie koszyka w konsoli
    event.preventDefault();
    console.log({
      title,
      price: getPrice(),
      selectedColor: currentColor,
      selectedSize: currentSize
    });
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage title={title} name={name} currentColor={currentColor} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>
        <ProductForm
          sizes={sizes}
          colors={colors}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          handleSubmit={handleSubmit}
          getPrice={getPrice}
        />
      </div>
    </article>
  )
};

export default Product;