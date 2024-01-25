import styles from './Rating.module.css'
export function Rating({setNote,note}) {
    return (

<div className={styles.notes}>
  <span onClick={()=> setNote (1)} className={note!==1? styles.ratingNumber : styles.ratingNumberFull}>1</span>
  <span onClick={()=> setNote (2)} className={note!==2? styles.ratingNumber : styles.ratingNumberFull}>2</span> 
  <span onClick={()=> setNote (3)} className={note!==3? styles.ratingNumber : styles.ratingNumberFull}>3</span>
  <span onClick={()=> setNote (4)} className={note!==4? styles.ratingNumber : styles.ratingNumberFull}>4</span>
  <span onClick={()=> setNote (5)} className={note!==5? styles.ratingNumber : styles.ratingNumberFull}>5</span>
  
 </div>
    )
}