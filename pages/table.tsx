import React from 'react';
import styles from '../styles/Table.module.scss';

const Table = () => {
  return (
    <div className={styles.container}>
      {/* Header row */}
      {Array.from(Array(3).keys()).map((index) => (
        <div key={index} className={styles.row}>
          <div className={`${styles.cell} ${styles.header}`}>
            Header {index + 1}
            <div className={styles.tooltip}>Tooltip</div>
          </div>
          {Array.from(Array(5).keys()).map((rowIndex) => (
            <div key={rowIndex} className={styles.cell}>
              Row {rowIndex + 1}
              <div className={styles.tooltip}>Tooltip</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
