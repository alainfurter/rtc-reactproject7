import HeaderContainer from './HeaderContainer'
import HeaderLogoContainer from './HeaderLogoContainer'
import HeaderLogo from './HeaderLogo'
import HeaderTitle from './HeaderTitle'


const Header = () => {
  return (
    <HeaderContainer> 
        <HeaderLogoContainer>
          <HeaderLogo src="images/logo.png" alt="Logo" />
        </HeaderLogoContainer>
        <HeaderTitle>NASA API DEMO</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header