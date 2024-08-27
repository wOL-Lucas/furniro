import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div<{showOptions: boolean}>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background-color: #F9F1E7;
  align-items: center;
  width: 100%;
  height: ${props => props.showOptions ? '260px' : '150px'};
  color: #000000;

  transition: height 0.05s ease-in-out;

  @media (max-width: 768px) {
    height: ${props => props.showOptions ? '160px' : '70px'};
  }

  .full {
    width: 100%; 
  }

  .dropdown-item {
    padding: 0 20px;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .hidden {
    display: none;
  }

  .border-top {
      border-top: 1px solid #D9D9D9;;
  }

  .btn {
    &:hover {
      cursor: pointer;
      border-bottom: 1px solid #D9D9D9;
      color: #D9D9D9;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #000000;
  font-family: 'Poppins', sans-serif;

  span {
    font-size: 1.5rem;
    margin-right: 10px;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-right: 5px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`
const Text = styled.p`
  margin: 0;
  padding-left: 10px;
  border-left: 1px solid #000000;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding-left: 5px; 
  }
  
  
`

const ShowInput = styled.input`
  margin: 15px;
  height: 40px;
  width: 40px;
  text-align: center;
  background-color: #FFFFFF;
  color: #9F9F9F;
  border: none;
  overflow: hidden;
  -webkit-appearance: none;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

const OrderBySelect = styled.select`
  margin: 15px;
  height: 40px;
  width: 200px;
  text-align: center;
  background-color: #FFFFFF;
  color: #9F9F9F;
  border: none;
  font-size: 1rem;
  font-width: 500,
  overflow: hidden;
  -webkit-appearance: none;
  -moz-appearance: textfield;

  &:focus {
    outline: none;
  }
`;

const FilterButton = ({onClick}:{onClick: ()=>void}) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Wrapper onClick={()=>{setShowOptions(!showOptions); onClick()}} className="btn">
      <span className="material-symbols-outlined border">
        {showOptions ? 'expand_less' : 'tune'}
      </span>
      Filter
    </Wrapper>
  );
}

const FilterResultText = ({ min, max, total}: { min: number, max: number, total: number }) => {
  return (
      <Text>
        Showing {min} - {max} of {total} results
      </Text>
  )
}

const FilterOptions = ({setFilter}:{setFilter: (filter:string)=>void} ) => {
  return (
    <Wrapper className="dropdown-item border-top">
      Order by:
      <OrderBySelect onChange={(e)=>{setFilter(e.target.value)}}>
        <option value="price">Lowest Price</option>
        <option value="price-reverse">Highest Price</option>
        <option value="name">A-Z</option>
        <option value="name-reverse">Z-A</option>
      </OrderBySelect>
    </Wrapper>
  )
}

const FilterComponent = ( {onClick, min, max, total}: {onClick: ()=>void, min: number, max: number, total: number} ) => {
  return (
    <div>
      <Wrapper>
        <FilterButton onClick={onClick}/>
        <FilterResultText min={min} max={max} total={total} />
      </Wrapper>
    </div>
  )
}

const ShowFilter = ( { qnt, setShowMax }: { qnt: number, setShowMax: React.Dispatch<React.SetStateAction<number>> } ) => {
  const [showQnt, setShowQnt] = useState(qnt);
  const prevQntRef = useRef<number>();

  useEffect(() => {
    prevQntRef.current = qnt;
  });

  const prevQnt = prevQntRef.current;

  useEffect(() => {
    if (prevQnt !== qnt) {
      setShowQnt(qnt);
    }
  }, [qnt, prevQnt]);

  const setShowTotal = (total: number) => {
    setShowQnt(total);
    setShowMax(total);
  };
  return (
    <Wrapper>
      Show 
      <ShowInput type="number" value={showQnt} onChange={(e)=> setShowTotal(Number(e.target.value))}/>
    </Wrapper>
  ) 
}

interface FiltersProps {
  min: number;
  max: number;
  total: number;
  show: number;
  setShowMax: React.Dispatch<React.SetStateAction<number>>;
  setFilter: (filter: string)=>void;
}

const Filters = ({min, max, total, show, setShowMax, setFilter}: FiltersProps) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Container showOptions={showOptions}>
      <Wrapper className="full">
        <FilterComponent onClick={()=>{setShowOptions(!showOptions)}} min={min} max={max} total={total} />
        <ShowFilter qnt={show} setShowMax={setShowMax}/>
      </Wrapper>
      <div className="full">
        <Wrapper className={`dropdown-item ${showOptions? "" : "hidden"}`}>
          <FilterOptions setFilter={setFilter}/>
        </Wrapper>
      </div>
    </Container>
  );
}

export default Filters
