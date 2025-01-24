import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <FaSearch className={styles.icon} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
        placeholder="Search contacts by name..."
      />
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;