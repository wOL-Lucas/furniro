import { useState } from 'react';
import styled from 'styled-components';
import Logo from './logo';
import Links from './links';

const HeaderContainer = styled.header<{menuState: boolean}>`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 50px;
  padding: 25px 0;
  background:#FFFFFF;

  @media (max-width: 768px) {
    height: ${props => props.menuState ? '190px' : '50px'};
    width: 100%;
    transition: height 0.05s ease-in-out;
  }
`

const Container = styled.div`
  position: absolute;
  width: 50%;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    width: 90%;
    flex-direction: column;
    align-items: start;
    padding: 0;
  }
}
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  padding: 0;
  margin: 0;
  color: #000000;

  a {
    text-decoration: none;
    color: #000000;
    margin: 0 10px;
    padding: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;

    a {
        font-size: 50px;
      }
  }
}
`

const ItemsWrapper = styled.div<{ menuState: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 62%;

  @media (max-width: 768px) {
    padding-top: 15px;
    width: 100% !important;
    display: ${props => props.menuState ? 'flex' : 'none'};
    justify-content: space-between;
  }

  a {
    font-size: 20px;
  }

  @media( max-width: 1903px) {
    width: 70%;
  }
}`

const HamburguerContainer = styled.div`
  color: #000000;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`

const LogoWrapper = styled.div<{ menuState: boolean}>`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    border-bottom: ${props => props.menuState ? '1px solid #000000' : 'none'};
  }
`

const Hamburguer = ({ onClick, iconName }: { onClick: ()=> void, iconName: string }) => {
  return (
    <HamburguerContainer onClick={onClick}>
      <span className="material-symbols-outlined">{iconName}</span>
    </HamburguerContainer>
  )
};

const Header = () => {
  
  const [menuState, setMenuState] = useState(false);

  const pages = [
    { name: 'Home', url: '#' },
    { name: 'Shop', url: '#' },
    { name: 'About', url: '#' },
    { name: 'Contact', url: '#' }
  ];

  const actions = [
    { name: 'login', url: '#', icon: 'person' },
    { name: 'search', url: '#', icon: 'search' },
    { name: 'wishlist', url: '#', icon: 'favorite' },
    { name: 'cart', url: '#', icon: 'shopping_cart' }
  ];
  
  return (
    <HeaderContainer menuState={menuState}>
      <Container>
        <LogoWrapper menuState={menuState}>
          <Logo />
        <Hamburguer onClick={() => setMenuState(!menuState)} iconName={menuState ? "menu_open" : "menu"}/>
        </LogoWrapper>
        <ItemsWrapper menuState={menuState}>
          <Links pages={pages} column={false}/>
          <Actions>
            {actions.map((action, index) => (
              <a key={index} href={action.url}><span className="material-symbols-outlined">{action.icon}</span></a>
            ))}
          </Actions>
      </ItemsWrapper>
      </Container>
    </HeaderContainer>
  )
}


export default Header;
