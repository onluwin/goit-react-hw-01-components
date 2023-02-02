import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

export const TransactionHistoryItems = ({ itemsData }) => {
  return itemsData.map(({ id, type, amount, currency }) => {
    return (
      <tr className={css.tableRow} key={id}>
        <td className={css.tableData}>{type}</td>
        <td className={css.tableData}>{amount}</td>
        <td className={css.tableData}>{currency}</td>
      </tr>
    );
  });
};

TransactionHistoryItems.propTypes = {
  itemsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
