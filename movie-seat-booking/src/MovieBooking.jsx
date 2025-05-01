import styles from './MovieBooking.module.scss';
import { useState } from 'react';

const MovieBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [moviePrice, setMoviePrice] = useState(10);
  const totalCost = moviePrice * selectedSeats.length;

  const handleClick = (e) => {
    const seat = e.target;
    if (!seat.dataset.id || seat.classList.contains(styles.occupied)) return;
    const seatId = e.target.dataset.id;
    const isSelected = selectedSeats.includes(seatId);

    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
      seat.classList.remove(styles.selected);
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
      seat.classList.add(styles.selected);
    }
  };

  const handleMovie = (e) => {
    const selectedMovie = e.target.value;
    if (selectedMovie === 'Avengers: Endgame') {
      setMoviePrice(10);
    } else if (selectedMovie === 'Joker') {
      setMoviePrice(12);
    } else if (selectedMovie === 'Toy Story 4') {
      setMoviePrice(8);
    } else if (selectedMovie === 'The Lion King') {
      setMoviePrice(9);
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <label className={styles.movie_title}>Pick a movie:</label>
        <select onChange={handleMovie}>
          <option value="Avengers: Endgame">Avengers: Endgame ($10)</option>
          <option value="Joker">Joker ($12)</option>
          <option value="Toy Story 4">Toy Story 4 ($8)</option>
          <option value="The Lion King">The Lion King ($9)</option>
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

      <div className={styles.row} onClick={handleClick}>
        <div data-id="1" className={styles.seat}></div>
        <div data-id="2" className={styles.seat}></div>
        <div data-id="3" className={styles.seat}></div>
        <div data-id="4" className={styles.seat}></div>
        <div data-id="5" className={styles.seat}></div>
        <div data-id="6" className={styles.seat}></div>
        <div data-id="7" className={styles.seat}></div>
        <div data-id="8" className={styles.seat}></div>
      </div>

      <div className={styles.row} onClick={handleClick}>
        <div data-id="9" className={styles.seat}></div>
        <div data-id="10" className={styles.seat}></div>
        <div data-id="11" className={styles.seat}></div>
        <div data-id="12" className={`${styles.seat} ${styles.occupied}`}></div>
        <div data-id="13" className={`${styles.seat} ${styles.occupied}`}></div>
        <div data-id="14" className={styles.seat}></div>
        <div data-id="15" className={styles.seat}></div>
        <div data-id="16" className={styles.seat}></div>
      </div>

      <div className={styles.row} onClick={handleClick}>
        <div data-id="17" className={styles.seat}></div>
        <div data-id="18" className={styles.seat}></div>
        <div data-id="19" className={styles.seat}></div>
        <div data-id="20" className={styles.seat}></div>
        <div data-id="21" className={styles.seat}></div>
        <div data-id="22" className={styles.seat}></div>
        <div data-id="23" className={`${styles.seat} ${styles.occupied}`}></div>
        <div data-id="24" className={`${styles.seat} ${styles.occupied}`}></div>
      </div>

      <div className={styles.row} onClick={handleClick}>
        <div data-id="25" className={styles.seat}></div>
        <div data-id="26" className={styles.seat}></div>
        <div data-id="27" className={styles.seat}></div>
        <div data-id="28" className={styles.seat}></div>
        <div data-id="29" className={styles.seat}></div>
        <div data-id="30" className={styles.seat}></div>
        <div data-id="31" className={styles.seat}></div>
        <div data-id="32" className={styles.seat}></div>
      </div>

      <div className={styles.row} onClick={handleClick}>
        <div data-id="33" className={styles.seat}></div>
        <div data-id="34" className={styles.seat}></div>
        <div data-id="35" className={styles.seat}></div>
        <div data-id="36" className={`${styles.seat} ${styles.occupied}`}></div>
        <div data-id="37" className={`${styles.seat} ${styles.occupied}`}></div>
        <div data-id="38" className={styles.seat}></div>
        <div data-id="39" className={styles.seat}></div>
        <div data-id="40" className={styles.seat}></div>
      </div>

      <div className={styles.row} onClick={handleClick}>
        <div data-id="41" className={styles.seat}></div>
        <div data-id="42" className={styles.seat}></div>
        <div data-id="43" className={styles.seat}></div>
        <div data-id="44" className={styles.seat}></div>
        <div data-id="45" className={`${styles.seat} ${styles.occupied}`}></div>
        <div data-id="46" className={`${styles.seat} ${styles.occupied}`}></div>
        <div data-id="47" className={`${styles.seat} ${styles.occupied}`}></div>
        <div data-id="48" className={styles.seat}></div>
      </div>

      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        You have selected <span className={styles.total}>{selectedSeats.length}</span> seats for a price of{' '}
        <span className={styles.total}>${totalCost}</span>
      </p>
    </div>
  );
};

export default MovieBooking;
