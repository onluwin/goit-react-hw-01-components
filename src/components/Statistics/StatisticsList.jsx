import css from './Statistics.module.css'

import { StatisticsItem } from './StatisticsItem'

export const StatisticsList = ({data}) => {
    return (<ul className={css.statList}>
                <StatisticsItem data={data} />
            </ul>)
}