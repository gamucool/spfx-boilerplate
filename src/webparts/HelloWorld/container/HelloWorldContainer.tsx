import { container } from 'tsyringe';
import * as React from 'react';
import styles from './Container.module.scss';
import { HelloWorld } from '../components';

export interface IHolloWorldContainerProps {
    SettingsRootCollection: string;
    SettingsList: string;
}

export default class HolloWorldContainer extends React.Component<IHolloWorldContainerProps, {}>{

    public render(): React.ReactElement<IHolloWorldContainerProps> {
        return (<div className={styles.container} > 
                    <HelloWorld />
                </div>);
    }
}