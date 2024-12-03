"use client";

import styles from './CountryPopup.module.css';

const CountryPopup = ({ userCountry, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>We don't ship to {userCountry}</h2>
        <button className={styles.stayButton} onClick={onClose}>
          Stay on US store
        </button>
      </div>
    </div>
  );
};

export default CountryPopup;