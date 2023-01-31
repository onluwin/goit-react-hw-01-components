import css from '../Statistics/Statistics.module.css'
import { getRandomHexColor } from '../utils/generateRandomColor'

export const Statistics = ({title, data}) => {
    return (
        <section key={data.forEach(item => {
            return item.id
        })} className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
            <ul className={css.statList}>

                {data.map(statistic => {
                    const { id, label, percentage } = statistic;
                    return (<li style={{backgroundColor: getRandomHexColor()}} key={id} className={css.item} >
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
              </li>)
                })}
            </ul>
        </section>
    )
}
