import PropTypes from "prop-types";

import css from './Statistics.module.css'

import { getRandomHexColor } from '../utils/generateRandomColor'

export const StatisticsItem = ({data}) => {
    return data.map(statistic => {
        const { id, label, percentage } = statistic;
        return (<li key={id} style={{backgroundColor: getRandomHexColor()}}  className={css.item} >
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li>)
    })
}

StatisticsItem.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired
}