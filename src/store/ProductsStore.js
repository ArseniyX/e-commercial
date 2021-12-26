import { action, makeObservable, observable, flow } from "mobx";
import axios from "axios";
import { API } from "../utils/constants";

export class ProductsStoreImpl {
  products = [];
  favorites = [];
  filter = "";
  sort = "Recently Added";

  constructor() {
    makeObservable(this, {
      products: observable,
      fetch: flow,
      filter: observable,
      setFilter: action,
      sort: observable,
      setSort: action,
      favorites: observable,
      addFavorite: action,
      filterFavorites: action,
    });
  }

  filterFavorites() {
    this.filter = this.favorites.join("?")
  }

  setFilter(filter) {
    this.filter = filter.toLowerCase();
  }

  setSort(sortName) {
    this.sort = sortName;
  }

  addFavorite(name) {
    if (!this.favorites.includes(name)) {
      //checking weather array contain the id
      this.favorites.push(name); //adding to array because value doesnt exists
    } else {
      this.favorites.splice(this.favorites.indexOf(name), 1); //deleting
    }
  }

  *fetch() {
    const response = yield axios
      .get(API.ALL_PRODUCTS)
      .then((data) => data.data);
    this.products.push(...response);
  }
}

export const ProductsStore = new ProductsStoreImpl();
