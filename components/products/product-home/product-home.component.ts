import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Product } from "../../../interfaces/Product";
import { ProductService } from "../../../services/product.service";
import { PageService } from "../../../services/page.service";

@Component({
  selector: "app-product-home",
  templateUrl: "./product-home.component.html",
  styleUrls: ["./product-home.component.css"]
})
export class ProductHomeComponent implements OnInit {
  products: Product[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(
    private productService: ProductService,
    private activtedroute: ActivatedRoute,
    private pageService: PageService
  ) {
    this.getProducts();
  }
  ngOnInit() {}

  getProducts() {
    this.productService.get().subscribe(
      (res: Product[]) => {
        this.products = res;
        //console.log(this.products);
        // initialize to page 1
        this.setPage(1);
      },
      err => {
        alert("error occured");
      }
    );
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pageService.getPager(this.products.length, page);

    // get current page of items
    this.pagedItems = this.products.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }

  deleteProduct(id) {
    this.productService.destroy(id).subscribe(
      res => {
        alert("Product Deleted and refresh Table");
        this.getProducts();
      },
      err => {
        console.log("Error occured");
      }
    );
  }
}
