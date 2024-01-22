import styles from './Rating.module.css'
export function Rating () {
    return (
<div className={styles.notes}>
  <span className={styles.ratingNumber}>1</span>
  <span className={styles.ratingNumber}>2</span>
  <span className={styles.ratingNumber}>3</span>
  <span className={styles.ratingNumber}>4</span>
  <span className={styles.ratingNumber}>5</span>
 </div>
    )
}