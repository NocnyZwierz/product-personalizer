import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Product.module.scss';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
  const prepareColorClassName = (color) => {
    return styles['color' + color.charAt(0).toUpperCase() + color.slice(1)];
  };

  return (
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
  );
};

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;
