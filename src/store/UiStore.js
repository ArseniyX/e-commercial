import { action, makeObservable, observable } from "mobx";

export class UiStoreImpl {
  isSideBar = false

  constructor() {
    makeObservable(this, {
      isSideBar: observable,
      toggleSideBar: action,
    });
  }
  toggleSideBar = () => {
    this.isSideBar = !this.isSideBar
  };
}

export const UiStore = new UiStoreImpl();
