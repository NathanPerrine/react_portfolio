import LogoN from '../../../assets/images/LogoN.svg'
import './index.scss'

const Logo = () => {

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoN}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
