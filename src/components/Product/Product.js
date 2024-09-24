import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const prepareColorClassName = color => {
  return styles['color' + color.charAt(0).toUpperCase() + color.slice(1)];
};

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
        <img 
          className={styles.image}
          alt={'${title} - ${currentColor}'}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>
         <form onSubmit={handleSubmit}> {/*wywołanie funkcji co wyświetli nam zawartosć koszyka w konsoli */}
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => (
                <li key={size.name}>
                  <button
                  type='button'
                  className={clsx(currentSize === size.name && styles.active)}
                  onClick={() => setCurrentSize(size.name)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => (
                <li key={color}>
                  <button
                  type="button"
                  className={clsx(prepareColorClassName(color), currentColor === color && styles.active)}
                  onClick={() => setCurrentColor(color)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button} type='submit'>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired, // title powinno być stringiem
  basePrice: PropTypes.number.isRequired, // basePrice powinno być liczbą
  colors: PropTypes.arrayOf(PropTypes.string).isRequired, // colors to tablica stringów
  sizes: PropTypes.arrayOf(PropTypes.shape({ // sizes to tablica obiektów o określonej strukturze
    name: PropTypes.string.isRequired, // name to string
    additionalPrice: PropTypes.number.isRequired, // additionalPrice to liczba
  })).isRequired,
  name: PropTypes.string.isRequired, // name powinno być stringiem
};

export default Product;