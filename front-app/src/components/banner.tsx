import styled from 'styled-components';
import FooterItem from '../types/footer-item';

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #FAF3EA;
  padding: 34px 0;
  min-height: 270px;
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
  width: 70%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  h3 {
    font-size: 20px;
    margin: 5px;
  }
  
  p {
    font-size: 18px;
    margin: 5px;
    color: #898989;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  img {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 25px;
      height: 25px;
    }

    h3 {
      font-size: 12px;
    }
    
    p {
      font-size: 10px;
    }
  }
`;

const Item = ({ item }:{ item: FooterItem }) => {
  return (
    <ItemWrapper>
      <img src={item.icon} alt={item.title} />
      <TextWrapper>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </TextWrapper>
    </ItemWrapper>
  );
};


const Banner = () => {
  const items: FooterItem[] = [
    { title: "High Quality", subtitle: "crafted from top materials", icon: "https://raw.githubusercontent.com/wOL-Lucas/ecommerce-result-list/main/src/assets/trophy.png" },
    { title: "Warranty Protection", subtitle: "over 2 years", icon: "https://raw.githubusercontent.com/wOL-Lucas/ecommerce-result-list/main/src/assets/guarantee.png" },
    { title: "Free Shipping", subtitle: "order over 150 $", icon: "https://raw.githubusercontent.com/wOL-Lucas/ecommerce-result-list/main/src/assets/shipping.png" },
    { title: "24/7 Support", subtitle: "Dedicated support", icon: "https://raw.githubusercontent.com/wOL-Lucas/ecommerce-result-list/main/src/assets/customer-support.png" },
  ];
  return (
    <Container>
      <Wrapper>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Wrapper> 
    </Container>
  );
};


export default Banner;
