import styles from './PoweredBy.module.css';

function PoweredBy() {
  return (
    <div className={styles.container}>
      <p>Powered by <span className={styles.name}>Ameer Hamza and chatGPT</span></p>
    </div>
  );
}

export default PoweredBy;
