import styles from './MealFinder.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRandom } from '@fortawesome/free-solid-svg-icons';

const MealFinder = () => {
  return (
    <div className={styles.container}>
      <h1>Meal Finder</h1>
      <div className={styles.searchContainer}>
        <div>
          <input type="text" id="search" placeholder="Search for meals or keywords" />
          <button className={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <button className={styles.randomButton}>
          <FontAwesomeIcon icon={faRandom} />
        </button>
      </div>
    </div>
  );
};

export default MealFinder;
