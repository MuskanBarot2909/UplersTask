// /center-a-div.tsx

import React from 'react';
import styles from '../styles/CenterADiv.module.scss';

const CenterADiv = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centered}>Center This</div>
    </div>
  );
};

export default CenterADiv;
