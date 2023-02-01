import css from '../Statistics/Statistics.module.css'

import { StatisticsTitle } from './StatisticsTitle'
import { StatisticsList } from './StatisticsList'

export const Statistics = ({title, data}) => {
    return (
        <section className={css.statistics}>
            <StatisticsTitle title={title} />
            <StatisticsList data={data} />
        </section>
    )
}
