import { container } from 'tsyringe';
import * as React from 'react';
import styles from './Container.module.scss';
import { HelloWorld } from '../components';

export interface IHelloWorldContainerProps {
    SettingsRootCollection: string;
    SettingsList: string;
}

export default class HelloWorldContainer extends React.Component<IHelloWorldContainerProps, {}>{

    public render(): React.ReactElement<IHelloWorldContainerProps> {
        return (<div className={styles.container} > 
                    <HelloWorld />
                </div>);
    }
}