import React, { lazy } from "react";

import MainLayout from "../layout";
import { ProductsStore } from "../store/ProductsStore";
import Loadable from "../ui-components/Skeleton/Loadable";

const ProductsList = Loadable(lazy(() => import("../components/ProductsList")));

const HomePage = () => {
  return (
    <MainLayout>
      <ProductsList productsStore={ProductsStore} />
    </MainLayout>
  );
};

export default HomePage;
