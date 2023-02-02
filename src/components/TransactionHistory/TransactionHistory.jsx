import css from './TransactionHistory.module.css';

import { TransactionHistoryTHead } from './TransactionHistoryTHead';
import { TransactionHistoryTBody } from './TransactionHistoryTBody';
import { TransactionHistoryItems } from './TransactionHistoryItems';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistoryTable}>
      <TransactionHistoryTHead />
      <TransactionHistoryTBody>
        <TransactionHistoryItems itemsData={items} />
      </TransactionHistoryTBody>
    </table>
  );
};
