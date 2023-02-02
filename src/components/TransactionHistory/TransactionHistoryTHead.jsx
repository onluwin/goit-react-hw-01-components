import css from './TransactionHistory.module.css';

export const TransactionHistoryTHead = () => {
  return (
    <thead>
      <tr>
        <th className={css.tableHead}>Type</th>
        <th className={css.tableHead}>Amount</th>
        <th className={css.tableHead}>Currency</th>
      </tr>
    </thead>
  );
};
