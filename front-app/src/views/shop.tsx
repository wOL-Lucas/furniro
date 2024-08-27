import React from 'react';
import { useEffect } from 'react';
import Header from '../components/header';
import Filters from '../components/filters';
import Products from '../components/products';
import Pager from '../components/pager';
import Footer from '../components/footer';
import SortBy from '../types/sortBy';

const Shop = () => {
  
  const [totalProducts, setTotalProducts] = React.useState(0);
  const [showMax, setShowMax] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setFilter] = React.useState<SortBy | undefined>(undefined);
 
  useEffect(() => {
    setShowMax(totalProducts);
    if (totalProducts > 0 && showMax > 0) {
      setTotalPages(Math.ceil(totalProducts / showMax));
    }
  }, [totalProducts])

  useEffect(() => {
    if (totalProducts > 0 && showMax > 0) {
      setTotalPages(Math.ceil(totalProducts / showMax));
    }
  }, [showMax])

  const HandleFilterChange = (filter: string) => {
    setFilter(filter as SortBy);
  }

  return (
    <div>
      <Header PageName={"Shop"} PreviousPage={"Home"}/>
      <Filters min={1} max={showMax} total={totalProducts} show={showMax} setShowMax={setShowMax} setFilter={HandleFilterChange}/>
      <Products sortBy={filter} SetTotalProducts={setTotalProducts} show={showMax} offSet={currentPage}/>
      <Pager PagesCount={totalPages} CurrentPage={currentPage} SetCurrentPage={setCurrentPage}/>
      <Footer/>
    </div>
  );
}

export default Shop;
