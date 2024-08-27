import React from 'react';
import styled from 'styled-components';
import ProductType from '../types/product';
import Product from './product';
import SortBy from '../types/sortBy';
import { FilterArray, ChunkArray } from '../utils/filter';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  padding: 15px;
  
  @media (max-width: 768px) {
    padding: 15px 0;
  }

`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  align-items: center;
  justify-content: flex-start;
  background-color: #FFFFFF;

  @media (max-width: 1903px){
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 95%;
    justify-content: space-between !important;
  }
  
  @media (max-width: 1024px) {
    width: 95%;
    justify-content: flex-start;
  }
`;

interface ProductsProps {
  sortBy: SortBy | undefined;
  SetTotalProducts: React.Dispatch<React.SetStateAction<number>>;
  show: number;
  offSet: number;
}

const Products = ({ sortBy, SetTotalProducts, show, offSet }: ProductsProps) => {
  const productList: ProductType[] = [
    { name: "Syltherine", description: "Stylish cafe chair", image: "https://raw.githubusercontent.com/wOL-Lucas/ecommerce-result-list/main/src/assets/products/Syltherine.png", price: "2.500.000", hasDiscount: true, discount: "30%", originalPrice: "3.500.000", newProduct: false,},
    { name: "Leviosa", description: "Stylish cafe chair", image: "https://raw.githubusercontent.com/wOL-Lucas/ecommerce-result-list/main/src/assets/products/Leviosa.png", price: "2.500.000", hasDiscount: false, discount: "", originalPrice: "",newProduct: false,},
    { name: "Lolito", description: "Luxury big sofa", image: "https://raw.githubusercontent.com/wOL-Lucas/ecommerce-result-list/main/src/assets/products/Lolito.png", price: "7.000.000", hasDiscount: true, discount: "50%",originalPrice: "14.000.000",newProduct: false,},
    { name: "Respira", description: "Outdoor bar table and stool", image: "https://raw.githubusercontent.com/wOL-Lucas/ecommerce-result-list/main/src/assets/products/Respira.png", price: "500.000", hasDiscount: false, discount: "", originalPrice: "", newProduct: true,},
    { name: "Syltherine", description: "Stylish cafe chair", image: "https://raw.githubusercontent.com/wOL-Lucas/ecommerce-result-list/main/src/assets/products/Syltherine.png", price: "2.500.000", hasDiscount: true, discount: "30%", originalPrice: "3.500.000", newProduct: false,},
    { name: "Leviosa", description: "Stylish cafe chair", image: "https://raw.githubusercontent.com/wOL-Lucas/ecommerce-result-list/main/src/assets/products/Leviosa.png", price: "2.500.000", hasDiscount: false, discount: "", originalPrice: "",newProduct: false,},
    { name: "Lolito", description: "Luxury big sofa", image: "https://raw.githubusercontent.com/wOL-Lucas/ecommerce-result-list/main/src/assets/products/Lolito.png", price: "7.000.000", hasDiscount: true, discount: "50%",originalPrice: "14.000.000",newProduct: false,},
    { name: "Respira", description: "Outdoor bar table and stool", image: "https://raw.githubusercontent.com/wOL-Lucas/ecommerce-result-list/main/src/assets/products/Respira.png", price: "500.000", hasDiscount: false, discount: "", originalPrice: "", newProduct: true,},
  ];
  if(show == 0){
    show = productList.length;
  }
  
  const FilteredList = FilterArray({productList, sortBy});
  const OffSetList = ChunkArray(FilteredList, show);
  SetTotalProducts(FilteredList.length);

  if(offSet > OffSetList.length){
    offSet = OffSetList.length;
  }

  return (
    <Container>
      <Wrapper>
        {
          OffSetList[offSet - 1].map((product: ProductType, index: number) => {
            return <Product key={index} Product={product}/>
          })
        }
      </Wrapper>
    </Container>
  );
};

export default Products;
