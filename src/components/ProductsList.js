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

const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 80vw;
  justify-content: space-between;
  box-shadow: 0px 1px 2px rgba(58, 58, 68, 0.24),
    0px 2px 4px rgba(90, 91, 106, 0.24);
  border-radius: 8px;
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

  const createProductsList = () => {
    const products = productsStore.products?.slice();
    const [rateAvg, countAvg] = getAvg(products);
    console.log(rateAvg, countAvg);
    const mapProducts = (product, index) =>
      isFiltered(product) && (
        <ProductCard
          key={key({ length: 7 })}
          product={product}
          productsStore={ProductsStore}
        />
      );

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

  return <ProductsListContainer>{createProductsList()}</ProductsListContainer>;
});

export default ProductsList;
