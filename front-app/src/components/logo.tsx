import styled from 'styled-components';
import LogoImage from '/logo.png';



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
`
const Image = styled.img`
  height: 50px;
`
const Text = styled.p`
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #000000;
  padding: 0;
  margin: 0;
`

const Logo = () => {
  return (
    <Container>
      <Image src={LogoImage} alt="Logo" />
      <Text>Compass</Text>
    </Container>
  )
}

export default Logo;
 
