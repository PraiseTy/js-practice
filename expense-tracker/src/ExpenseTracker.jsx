import styles from './ExpenseTracker.module.scss';

const ExpenseTracker = () => {
  return (
    <div className={styles.container}>
      <h1>Expense Tracker </h1>
      <p>Your Balance</p>
      <p>$7.00</p>

      <div>
        <div>
          <p>Income</p>
          <p>$29.00</p>
        </div>
        <div>
          <p>Expense</p>
          <p>$22.00</p>
        </div>
      </div>

      <div>
        <h2>History</h2>
      </div>

      <div>
        <h2>Add new Transaction</h2>
        <form>
          <div>
            <label>Text</label>
            <input type="text" placeholder="Enter Text" />
          </div>
          <div>
            <label>Amount</label>
            <p>(negative-expense,positive-income)</p>
            <input type="number" placeholder="Enter Amount" />
          </div>
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseTracker;
