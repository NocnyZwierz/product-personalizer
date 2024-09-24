import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import Button from '../Button/Button';
import OptionColor from './OptionColor';
import OptionSize from './OptionSize';

const ProductForm = ({ sizes, colors, currentSize, setCurrentSize, currentColor, setCurrentColor, handleSubmit, price}) => {
  return (
    <form onSubmit={handleSubmit}>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
      
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />

      <Button className={styles.button} type='submit'>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalPrice: PropTypes.number.isRequired,
  })).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductForm;
