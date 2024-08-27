import ProductType from '../types/product';
import SortBy from '../types/sortBy';

const SortByName = (productList: ProductType[], ascending: boolean = true): ProductType[] => {
  return productList.sort((a, b) => {
    return ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });
};

const SortByPrice = (productList: ProductType[], ascending: boolean = true): ProductType[] => {
  return productList.sort((a, b) => {
    const priceA = parseInt(a.price.replace(/\./g, ''), 10);
    const priceB = parseInt(b.price.replace(/\./g, ''), 10);
    return ascending ? priceA - priceB : priceB - priceA;
  });
};

const FilterArray = ({ productList, sortBy }: { productList: ProductType[], sortBy: SortBy | undefined }): ProductType[] => {
  
  switch (sortBy) {
    case 'name':
      return SortByName(productList, true);
    case 'price':
      return SortByPrice(productList, true);
    case 'name-reverse':
      return SortByName(productList, false);
    case 'price-reverse':
      return SortByPrice(productList, false);
    default:
      return productList;
  }
};

const ChunkArray = (productList: ProductType[], chunkSize: number): ProductType[][] => {
  const result: ProductType[][] = [];
  for (let i = 0; i < productList.length; i += chunkSize) {
    result.push(productList.slice(i, i + chunkSize));
  }
  return result;
};

export { FilterArray, ChunkArray };

