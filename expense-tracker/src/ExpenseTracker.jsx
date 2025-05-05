import styles from './ExpenseTracker.module.scss';

const ExpenseTracker = () => {
  return (
    <div className={styles.container}>
      <h1>Expense Tracker </h1>

      <div>
        <p className={styles.total_label}>Your Balance</p>
        <p className={styles.balance}>$7.00</p>
      </div>

      <div className={styles.show_amount}>
        <div>
          <p className={styles.amount_label}>Income</p>
          <p className={styles.income}>$29.00</p>
        </div>
        <div>
          <p className={styles.amount_label}>Expense</p>
          <p className={styles.expense}>$22.00</p>
        </div>
      </div>

      <div>
        <h3>History</h3>
        <div>Add cost here</div>
      </div>

      <div className={styles.input_box}>
        <h3>Add new Transaction</h3>
        <form>
          <div>
            <label>Text</label>
            <input type="text" placeholder="Enter Text..." />
          </div>
          <div>
            <label>Amount</label>
            <p>(negative-expense, positive-income)</p>
            <input type="number" placeholder="Enter Amount..." />
          </div>
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseTracker;
