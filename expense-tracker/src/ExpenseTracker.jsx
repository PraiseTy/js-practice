import styles from './ExpenseTracker.module.scss';
import { useEffect, useState } from 'react';

const ExpenseTracker = () => {
  const [expense, setExpense] = useState([]);
  const [amount, setAmount] = useState('');
  const [text, setText] = useState('');
  const [total, setTotal] = useState(0);
  const [income, setIncome] = useState(0);
  const [cost, setCost] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '' || amount === '') {
      alert('Please enter a text and amount');
    }
    setExpense([
      ...expense,
      {
        text: text,
        amount: parseInt(amount)
      }
    ]);
    setAmount('');
    setText('');
  };

  const handleDelete = (index) => {
    const removeExpense = expense.filter((_, i) => i !== index);
    setExpense(removeExpense);
  };

  useEffect(() => {
    const positiveValue = expense.filter((item) => item.amount > 0).reduce((acc, item) => acc + item.amount, 0);
    const negativeValue = expense.filter((item) => item.amount < 0).reduce((acc, item) => acc - item.amount, 0);
    setIncome(positiveValue);
    setCost(negativeValue);
    const sum = positiveValue - negativeValue;
    setTotal(sum);
  }, [expense]);
  return (
    <div className={styles.container}>
      <h1>Expense Tracker </h1>

      <div>
        <p className={styles.total_label}>Your Balance</p>
        <p className={styles.balance}>{`${total}.00`}</p>
      </div>

      <div className={styles.show_amount}>
        <div>
          <p className={styles.amount_label}>Income</p>
          <p className={styles.income}>{`$${income}.00`}</p>
        </div>
        <div>
          <p className={styles.amount_label}>Expense</p>
          <p className={styles.expense}>{`$${cost}.00`}</p>
        </div>
      </div>

      <div>
        <h3>History</h3>
        <ul>
          {expense.map((item, idx) => (
            <div className={styles.expense_container}>
              <button onClick={() => handleDelete(idx)} className={styles.delete_btn}>
                X
              </button>
              <li key={idx} className={`${styles.expense_list} ${item.amount < 0 ? styles.minus : styles.plus}`}>
                {item.text}
                <span>{item.amount < 0 ? item.amount : `+${item.amount}`}</span>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className={styles.input_box}>
        <h3>Add new Transaction</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Text</label>
            <input type="text" placeholder="Enter Text..." value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div>
            <label>Amount</label>
            <p>(negative-expense, positive-income)</p>
            <input
              type="number"
              placeholder="Enter Amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.submit_btn}>
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseTracker;
