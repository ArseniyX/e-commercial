import React, { lazy } from "react";
import { ProductsStore } from "../store/ProductsStore";
import Loadable from "../ui-components/Loadable";

const MainLayout = Loadable(lazy(() => import("../layout")));

const ProductsList = Loadable(lazy(() => import("../components/ProductsList")));

const HomePage = () => {
  return (
    <MainLayout>
      <ProductsList productsStore={ProductsStore} />
    </MainLayout>
  );
};

export default HomePage;
