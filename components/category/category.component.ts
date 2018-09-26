import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, NgForm } from "@angular/forms";
import { Category } from "../../interfaces/Category";
import { CategoryService } from "../../services/category.service";
import { PageService } from "../../services/page.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  title = "Category List";
  categories: Category[] = [];
  private allItems: any[];
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(
    private categoryService: CategoryService,
    private pageService: PageService
  ) {
    this.getCategories();
  }

  ngOnInit() {}

  getCategories() {
    this.categoryService.get().subscribe(
      (res: Category[]) => {
        //  console.log(res);
        this.categories = res;
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
        this.getCategories();
      },
      err => {
        console.log("Error occured");
      }
    );
  }
}
