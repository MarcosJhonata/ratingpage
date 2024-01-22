import { Rating } from '../components/rating'
import styles from './App.module.css'
import star from '../assets/icon-star.svg';
import thankyou from '../assets/illustration-thank-you.svg'
function App() {
  return (
    <div className={styles.wrapper}>

    <div className={styles.content}>
    <img className={styles.star} src={star} alt="" />
      
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

    <div className={styles.thanksPage}>

    <div className={styles.content}>

    <img className={styles.thanks} src={thankyou} alt="" />

      <h1 className={styles.finalnote}>Você selecionou 2 de 5 estrelas.</h1>

      <h2 className={styles.thanksTitle}>Obrigado !</h2>

      <p className={styles.paragraph}>Nós agradecemos por ter tirado um tempo pra nos avaliar.
      Caso precise de mais suporte não exite em nos consultar.
      </p>

      </div>
      </div>
      
    </div>

    
  )
}

export default App
