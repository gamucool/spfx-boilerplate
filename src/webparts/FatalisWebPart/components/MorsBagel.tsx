import * as React from 'react';
import styles from './Mors.module.scss';

export interface IMorsBagelProps {
    isNotDeath: boolean;
    link: string;
    dayCount: number;
    dayText: string;
}

export const MorsBagel: React.FC = (props: IMorsBagelProps) => {
    const { isNotDeath, link, dayCount, dayText} = {...props}
    const color_circles =  isNotDeath && <div>
        <div className={styles.circle_white}>
            <a className={styles.nolink} href={link} >
                <div className={styles.text_bold}>{dayCount}</div>
                <div className={styles.text_regular}>{dayText}</div>
            </a>
        </div>
        <div className={styles.informer_scheme}>
            Количество дней<br/> без смертельных случаев<br/> на производстве
        </div>
    </div>;

    const black_circle = !isNotDeath && <div>
        <div className={styles.informer_black}></div>
        <div className={styles.informer_scheme}>
          Cмертельный случай <br/>сегодня
        </div>
      </div>;
    return (
        <div className={[styles.col_12, styles.col_lg_3, styles.order_lg_first].join(' ')}>
              <div className={styles.informer}>
              {black_circle}
              {color_circles}
              </div>
        </div>
    )
}