import './style.scss';
import imgLogo from '../../assets/logo.svg';
import ButtonLogin from '../../components/ButtonLogin';
import 
{ 
  FacebookLogo,
  AppleLogo,
  GoogleLogo
} from '@phosphor-icons/react'

export default function Home() {
  return (
    <>
      <div className="background-black">
        <header>
          <img className='img-logo' src={imgLogo} alt="" />
        </header>
        <main>
          <div className="content-login">
            <section className='section-buttons-login'>
              <ButtonLogin
                backgroundColor="rgb(24, 119, 242)"
                color="rgba(255, 255, 255, 0.9)"
                icon={<FacebookLogo size={32} />}
                text="Continue with Facebook"
              />

              <ButtonLogin
                backgroundColor="rgba(0, 0, 0, 0.9)"
                color="rgba(255, 255, 255, 0.9)"
                icon={<AppleLogo size={32} />}
                text="Continue with Apple"
              />

              <ButtonLogin
                backgroundColor="transparent"
                color="#6a6a6a"
                icon={<GoogleLogo size={32} />}
                text="Continue with Google"
              />

              <ButtonLogin
                backgroundColor="transparent"
                color="#6a6a6a"
                text="Continue with phone number"
              />
            </section>
            <div className='division-sections'>
              <span className='line'></span>
              <span className='text-lines'>OR</span>
              <span className='line'></span>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}