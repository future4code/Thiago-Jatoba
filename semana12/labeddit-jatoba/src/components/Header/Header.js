import React from 'react'
import { StyledToolbar, LogoImg } from './styled'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Logo from '../../assets/reddit_icon.png'
import { goToHomePage, goToSignInPage}  from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'


const Header = () => {
  const history = useHistory()
  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick = {() => goToHomePage(history)}>
            <LogoImg src={Logo} alt='labeddit_logo' />
          </Button>
          <Button color="inherit" onClick={() => goToSignInPage(history)}>Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header