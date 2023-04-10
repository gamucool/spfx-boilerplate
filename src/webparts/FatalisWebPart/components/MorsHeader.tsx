
import * as React from 'react';
import styles from './Mors.module.scss';

interface IMorsHeaderProps {
    title: string;
    urlSection: string;
  }
  
  export const MorsHeader: React.FC = (props: IMorsHeaderProps) => {
    const { title, urlSection } = props;
    return (
      <div className={styles.titleBlock}>
        <a className={[styles.titleBlockLink, styles.linkHov].join(' ')} href={urlSection} target="_blank">
          <span>
            {title}
          </span>
          <div className={styles.arrowRight}>
            <img src={require('../../../assets/arrow-right.svg')} alt="" />
          </div>
        </a>
      </div>
    )
  }