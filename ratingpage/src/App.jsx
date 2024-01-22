import { Rating } from '../components/rating'
import styles from './App.module.css'
import star from '../assets/icon-star.svg';
function App() {
  return (
    <div className={styles.wrapper}>

    <div className={styles.content}>
    <img src={star} alt="" />
      
      <h1 className={styles.title}>Como foi o atendimento?</h1>
      <p className={styles.paragraph}>Por favor nos deixe saber como foi o seu atendimento.
        Todo feedback é bem-vindo para nos ajudar a melhorar 
        o nosso serviço.
      </p>
      <Rating/>
      <button className={styles.submit}>
        SUBMIT
      </button>
    </div>
      
    </div>

    
  )
}

export default App
