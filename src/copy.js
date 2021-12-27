import React, { useEffect } from "react";
import { observer } from "mobx-react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { SORT } from "../utils/constants";
import getAvg from "../utils/getAvg";
import {
  compareByPrice,
  compareByRate,
  compareByRecommended,
} from "../utils/sortArray";
import { ProductsStore } from "../store/ProductsStore";
import key from "random-string";
import ListHeader from "./ListHeader";

const ListContainer = styled.div`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  width: 80vw;
  margin: 10px 0;
`;

const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const ProductsList = observer(({ productsStore }) => {
  useEffect(() => {
    productsStore.fetch();
  }, [productsStore]);

  const { filter, sort } = productsStore;

  const isFiltered = (product) => {
    const title = product.title.toLowerCase();
    const description = product.description.toLowerCase();
    const { category } = product;
    return (
      title.includes(filter) ||
      description.includes(filter) ||
      filter.split("?").includes(title) ||
      category === filter
    );
  };

  const productCard = (product) => (
    <ProductCard
      key={key({ length: 7 })}
      product={product}
      productsStore={ProductsStore}
    />
  );

  const createProductsList = () => {
    const products = productsStore.products?.slice();
    const [rateAvg, countAvg] = getAvg(products);

    const mapProducts = (product) =>
      isFiltered(product) && productCard(product);

    const defaultSort = products.map(mapProducts);

    const recommendedSort = products
      .sort((a, b) => compareByRecommended(a, b, rateAvg, countAvg))
      .map(mapProducts);

    const expiredSort = products.reverse().map(mapProducts);

    const sortMostRated = products.sort(compareByRate).map(mapProducts);

    const sortByPrice = (isPricy) =>
      products.sort((a, b) => compareByPrice(a, b, isPricy)).map(mapProducts);

    switch (sort) {
      case SORT.RECENTLY_ADDED:
        return defaultSort;
      case SORT.RECOMMENDED:
        return recommendedSort;
      case SORT.EXPIRING_SOON:
        return expiredSort;
      case SORT.MOST_RATED:
        return sortMostRated;
      case SORT.PRICE_LOW_TO_HIGH:
        return sortByPrice(false);
      case SORT.PRICE_HIGH_TO_LOW:
        return sortByPrice(true);
      default:
        return defaultSort;
    }
  };

  return (
    <ListContainer>
      <ListHeader />
      <ProductsListContainer>{createProductsList()}</ProductsListContainer>
    </ListContainer>
  );
});

export default ProductsList;
