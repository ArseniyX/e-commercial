import React from "react";
import ListHeader from "../components/ListHeader";
import ProductsList from "../components/ProductsList";
import Related from "../components/Related";
import MainLayout from "../layout";
import { ProductsStore } from "../store/ProductsStore";

const HomePage = () => {
  return (
    <MainLayout>
      <ListHeader />
      <Related />
      <ProductsList productsStore={ProductsStore} />
    </MainLayout>
  );
};

export default HomePage;
