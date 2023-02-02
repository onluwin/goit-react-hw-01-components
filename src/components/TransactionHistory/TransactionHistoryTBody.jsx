import css from './TransactionHistory.module.css';

export const TransactionHistoryTBody = ({ children }) => {
  return <tbody className={css.tableBody}>{children}</tbody>;
};
