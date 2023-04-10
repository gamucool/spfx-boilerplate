import { container } from 'tsyringe';
import * as React from 'react';
import { SPHttpClient } from '@microsoft/sp-http';
import styles from './Container.module.scss';
import { Mors } from '../components/Mors';

export interface IFatalisContainerProps {
    description: string;
    dateDeath: string;
    link: string;
    title: string;
}
//React.FC = (props: IMorsProps)
const FatalisContainer: React.FC = (props: IFatalisContainerProps) => {

    return (<div className={styles.container} > 
        <Mors dateDeath = { props.dateDeath } 
                title = { props.title } 
                urlSection = { props.link } />
    </div>);
}

export default FatalisContainer;