import styles from './MovieBooking.module.scss';

const MovieBooking = () => {
  return (
    <div className={styles.container}>
      <div>
        <label className={styles.movie_title}>Pick a movie:</label>
        <select>
          <option>Avengers: Endgame ($10)</option>
          <option>Joker ($12)</option>
          <option>Toy Story 4 ($8)</option>
          <option>The Lion King ($9)</option>
        </select>
      </div>

      <div className={styles.seat_status}>
        <div className={styles.section}>
          <div className={styles.seat}></div>
          <p>N/A</p>
        </div>
        <div className={styles.section}>
          <div className={`${styles.seat} ${styles.selected}`}></div>
          <p>Selected</p>
        </div>
        <div className={styles.section}>
          <div className={`${styles.seat} ${styles.occupied}`}></div>
          <p>Occupied</p>
        </div>
      </div>

      <div className={styles.screen}></div>

      <div className={styles.row}>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={styles.seat}></div>
        <div className={styles.seat}></div>
        <div className={styles.seat}></div>
        <div className={styles.seat}></div>
      </div>

      <div className={styles.row}>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.occupied}`}></div>
        <div className={`${styles.seat} ${styles.occupied}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={styles.seat}></div>
        <div className={styles.seat}></div>
      </div>

      <div className={styles.row}>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={styles.seat}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.occupied}`}></div>
        <div className={`${styles.seat} ${styles.occupied}`}></div>
      </div>

      <div className={styles.row}>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={styles.seat}></div>
        <div className={styles.seat}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
      </div>

      <div className={styles.row}>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={styles.seat}></div>
        <div className={`${styles.seat} ${styles.occupied}`}></div>
        <div className={`${styles.seat} ${styles.occupied}`}></div>
        <div className={styles.seat}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={styles.seat}></div>
      </div>

      <div className={styles.row}>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={styles.seat}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.selected}`}></div>
        <div className={`${styles.seat} ${styles.occupied}`}></div>
        <div className={`${styles.seat} ${styles.occupied}`}></div>
        <div className={`${styles.seat} ${styles.occupied}`}></div>
        <div className={styles.seat}></div>
      </div>

      <p>You have selected 25 seats for a price of $250</p>
    </div>
  );
};

export default MovieBooking;
