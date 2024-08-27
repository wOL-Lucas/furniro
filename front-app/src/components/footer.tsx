import React from 'react';
import styled from 'styled-components';
import Banner from '../components/banner';
import Links from '../components/links';
import ValidateEmail from '../utils/validateEmail';

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #FFFFFF;
  padding: 34px 0;
  min-height: 505px;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 20px 0;
    min-height: 165px;
  }
`;

const Wrapper = styled.div`
  color: #000000;
  font-family: 'Poppins', sans-serif;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 75%;
  
   h3 {
    font-size: 24px;
    margin: 10px;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  
  .error {
    color: red;
    font-size: 12px;
  }
  
  .success {
    color: green;
    font-size: 12px;
  }
  
  .address {
    font-size: 16px;
    margin: 10px;
    color: #898989;
    max-width: 285px;
    text-align: start;
    
    @media (max-width: 768px) {
      font-size: 12px;
      margin: 0 5px;
    }
  }   

  p {
    margin: 10px;
    color: #9F9F9F;
    
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  a {
    text-decoration: none;
    color: #000000;
    margin: 10px;
    padding: 0;
  }

  .help {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 65%;
    
    @media (max-width: 768px) {
      font-size: 10px !important;
    }
  }

  .subscribe {
    display: flex;
    input {
      background-color: #FFFFFF;
      border: none;
      border-bottom: 1px solid #000000;
      color: #000000;
      
      height: 24px;
      
      &:focus {
        outline: none;
      }
    }

    button {
      background-color: #FFFFFF;
      border: none;
      border-bottom: 1px solid #000000;
      border-radius: 0;
      color: #000000;
      margin: 0 10px;
      padding: 0;
      
      font-size: 14px;
      font-family: 'Poppins', sans-serif;
      
      &:focus {
        outline: none;
      }
      
      @media (max-width: 768px) {
        font-size: 12px;
        padding-top: 10px;
      }
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      font-size: 10px;
      
      p {
        margin: 0;
      }
    }
  }
`

const CopyWrapper = styled.div`
  display: flex;
  background-color: #FFFFFF;
  justify-content: center;
`;

const Copy = styled.div`
  border-top: 1px solid #D9D9D9;
  color: #000000;
  font-family: 'Poppins', sans-serif;
  width: 90%;
`

const Footer = () => {
  
  const pages = [
    { name: 'Home', url: '#' },
    { name: 'Shop', url: '#' },
    { name: 'About', url: '#' },
    { name: 'Contact', url: '#' }
  ];
  
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  
  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (ValidateEmail(email)) {
      setError(false);
      setSuccess(true);

    } else {
      setError(true);
    }
  }

  return (
    <div>
      <Banner/>
      <Container>
        <Wrapper>
          <ItemWrapper>
            <h3>footer.</h3>
            <p className="address">Rua Alexandre Dumas, 1711 - 6º andar - Chácara Santo Antônio, São Paulo - SP, 04717-004</p>
          </ItemWrapper>
          <ItemWrapper>
            <p>Links</p>
            <Links pages={pages} column={true}/>
          </ItemWrapper>
          <ItemWrapper>
            <p>Help</p>
            <div className="help">
              <a href="#">Payment Options</a>
              <a href="#">Returns</a>
              <a href="#">Privacy Policies</a>
            </div>
          </ItemWrapper>
          <ItemWrapper>
            <p>Newsletter</p>
            <div className="subscribe">
              <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email"/>
              <button onClick={(e)=>{handleSubscribe(e)}}>SUBSCRIBE</button>
            </div>
            {error ? <span className="error">Invalid email!</span> : success ? <span className="success">Nice! You are subscribed</span> : null}
          </ItemWrapper>

        </Wrapper>
      </Container>
      <CopyWrapper>
        <Copy>
          <p>2024 Compass UOL</p>
        </Copy>
      </CopyWrapper>
    </div>
  );
}


export default Footer;
