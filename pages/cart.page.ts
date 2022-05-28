import { Page } from "@playwright/test";
import UploadComp from "./component/upload.comp";

class CartPage {
  page: Page;

  constructor(page: Page) {
    this.page = page

  }

  uploadComp() {
    return new UploadComp(this.page)
  }

}

export default CartPage;