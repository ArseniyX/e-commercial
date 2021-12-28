import React, { useEffect } from "react";
import { observer } from "mobx-react";
import ProductCard from "./ProductCard";
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
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import CardSkeleton from "../ui-components/Skeleton/CardSkeleton";

const ProductsList = observer(({ productsStore }) => {
  useEffect(() => {
    productsStore.fetch();
  }, [productsStore]);

  const [isLoading, setLoading] = React.useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

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
      isLoading={isLoading}
      key={key({ length: 7 })}
      product={product}
      productsStore={ProductsStore}
    />
  );

  const createProductsList = () => {
    const [first, second] = productsStore.range;
    const products = productsStore.products;
    const loading = !productsStore.products.length;
    if(loading) {
      
    } 
    const slicedProducts = products
      .slice()
      .filter(({ price }) => first < price && second > price);
    const [rateAvg, countAvg] = getAvg(products);

    const mapProducts = (product) =>
      isFiltered(product) && productCard(product, loading);

    const defaultSort = slicedProducts.map(mapProducts);

    const recommendedSort = slicedProducts
      .sort((a, b) => compareByRecommended(a, b, rateAvg, countAvg))
      .map(mapProducts);

    const expiredSort = slicedProducts.reverse().map(mapProducts);

    const sortMostRated = slicedProducts.sort(compareByRate).map(mapProducts);

    const sortByPrice = (isPricy) =>
      slicedProducts
        .sort((a, b) => compareByPrice(a, b, isPricy))
        .map(mapProducts);

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
    <Box sx={{ flexGrow: 1, p: 1, boxShadow: 5, m: "8px 0", borderRadius: 1 }}>
      <ListHeader />
      <Grid container spacing={3}>
        {productsStore.products && createProductsList()}
      </Grid>
    </Box>
  );
});

export default ProductsList;
