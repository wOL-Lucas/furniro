import styled from 'styled-components';
import HeaderBackground from '../assets/HeaderBackground.jpg';

const Container = styled.div`
  width: 100%;
  height: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${HeaderBackground}) no-repeat center center;
    background-size: cover;
    filter: blur(5px);
    z-index: -1;
  }

  h1 {
    color: #000000;
    font-family: 'Poppins', times-new-roman;
    font-weight: 500;
    position: relative;
    margin: 10px;
  }

  div {
    color: #000000;
    font-family: 'Poppins', times-new-roman;
    font-weight: 300;
    position: relative;

    margin: 0;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  span {
    font-size: 12px;
    margin: 0 5px;
    align-content: center;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 15px 0;

    font-size: 12px;
  }
`;

const Header = ({ PageName, PreviousPage } : { PageName: string, PreviousPage: string }) => {
  return (
    <Container>
     <h1>{PageName}</h1>
     <div>
      <a>{PreviousPage}</a> 
        <span className="material-symbols-outlined">
          arrow_forward_ios
        </span>
        {PageName}
      </div>
    </Container>
  );
}

export default Header;
