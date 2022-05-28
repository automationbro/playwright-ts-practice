import { Locator, Page } from "@playwright/test";

class UploadComp {
  uploadInput: string;
  submitBtn: Locator;
  successTxt: Locator;
  page: Page

  constructor(page: Page) {
    this.page = page
    this.uploadInput = 'input#upfile_1'
    this.submitBtn = page.locator('#upload_1')
    this.successTxt = page.locator('#wfu_messageblock_header_1_label_1')
  }

  async uploadFile(filePath: string) {
    this.page.setInputFiles(this.uploadInput, filePath)
    this.submitBtn.click()
  }
}

export default UploadComp;