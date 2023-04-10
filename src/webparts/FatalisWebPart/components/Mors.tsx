import * as React from 'react';
import { MorsHeader } from './MorsHeader';

import styles from './Mors.module.scss';
import { MorsBagel } from './MorsBagel';

export interface IMorsProps {
    dateDeath: string;
    title: string;
    urlSection: string;
}

export const Mors: React.FC = (props: IMorsProps) => {
    const { dateDeath, urlSection } = {...props};
    const [isNotDeath, setIsNotDeath] = React.useState<boolean>(true);
    const [dayCount, setDayCount] = React.useState<number>(0);
    const [dayText, setDayText] = React.useState<string>('');

    const checkNumber = (num) => {
        const number : number = num;
        const b : number = number % 10;
        const a : number = (number % 100 - b) / 10;
        if (a === 0 || a >= 2) {
        if (b === 0 || (b > 4 && b <= 9)) {return 2; } else {if (b !== 1) {return 1; } else {return 0; }}
        } else {return 2; }
      }
    

    React.useEffect(() => {
        if (dateDeath !== undefined) {
            const today : Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
            const timeDiff : number = Math.abs(today.getTime() - new Date(dateDeath).getTime());
            const days : number = Math.ceil(timeDiff / (1000 * 3600 * 24));
            const dayname : string[] = ['день', 'дня', 'дней'];
            const position : number = checkNumber(days);
            setIsNotDeath(days > 0);
            setDayCount(days);
            setDayText(dayname[position])
         }
    }, [])

    return (
        <div className={styles.blockContWrap}>
            <MorsHeader {...props} /> 
            <MorsBagel isNotDeath = {isNotDeath} 
                        link = {urlSection} dayCount= {dayCount} dayText = {dayText} />
        </div>
    )
}

