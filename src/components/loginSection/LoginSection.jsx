import style from '../loginSection/LoginSection.module.css'

export function LoginSection () {

  return (
    <>
      <div className={style.content}>
        <h1>Unlimited movies, TV <br/> shows, and more</h1>
        <h2>Starts at EUR 7.99. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className={style.emailForm}>
          <input type="email" placeholder="Email address" className={style.emailInput}/>
          <button className={style.getStartedButton}>Get Started</button>
        </div>
      </div>
    </>
  );
}