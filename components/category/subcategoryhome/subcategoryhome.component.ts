import { Component, OnInit } from "@angular/core";
import { Category } from "../../../interfaces/Category";
import { CategoryService } from "../../../services/category.service";
import { ActivatedRoute } from "@angular/router";
import { PageService } from "../../../services/page.service";

@Component({
  selector: "app-subcategoryhome",
  templateUrl: "./subcategoryhome.component.html",
  styleUrls: ["./subcategoryhome.component.css"]
})
export class SubcategoryhomeComponent implements OnInit {
  title = "Category List";
  categories: Category[] = [];
  cat_id: any;
  //error: any;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(
    private categoryService: CategoryService,
    private activtedroute: ActivatedRoute,
    private pageService: PageService
  ) {
    this.cat_id = this.activtedroute.snapshot.params["cat_id"];
    this.getCategories(this.cat_id);
    //alert(this.cat_id);
  }
  ngOnInit() {}

  getCategories(cat_id) {
    this.categoryService.getSubcategory(cat_id).subscribe(
      (res: Category[]) => {
        this.categories = res;
        //console.log(this.categories);
        // initialize to page 1
        this.setPage(1);
      },
      err => {
        //console.log(err);
        alert("error occured");
      }
    );
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pageService.getPager(this.categories.length, page);

    // get current page of items
    this.pagedItems = this.categories.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
  deleteCategory(id) {
    this.categoryService.destroy(id).subscribe(
      res => {
        alert("Product Deleted and refresh Table");
        this.getCategories(this.cat_id);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
}
