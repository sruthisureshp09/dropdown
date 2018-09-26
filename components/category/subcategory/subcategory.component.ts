import { Component, OnInit } from "@angular/core";
import { Category } from "../../../interfaces/Category";
import { CategoryService } from "../../../services/category.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subategory",
  templateUrl: "./subcategory.component.html",
  styleUrls: ["./subcategory.component.css"]
})
export class SubcategoryComponent implements OnInit {
  category: Category = {
    id: null,
    category_name: null
  };
  id: any;
  cat_id: any;
  edit: boolean = false;
  //categories: Category;
  public error = null;
  constructor(
    private categoryService: CategoryService,
    private Router: Router,
    private activtedroute: ActivatedRoute
  ) {
    this.id = this.activtedroute.snapshot.params["id"];
    this.cat_id = this.activtedroute.snapshot.params["cat_id"];

    if (this.id) {
      this.edit = true;
      this.categoryService.show(this.id).subscribe(
        res => {
          // console.log(res);
          this.category = res;
        },
        err => {
          //console.log(err);
          alert("error occured");
        }
      );
    } else {
      this.edit = false;
    }
  }

  ngOnInit() {}
  storeSubCategory() {
    if (this.edit) {
      this.categoryService.update(this.category).subscribe(
        res => {
          //console.log(res);
          alert("Successfully Updated");
          this.Router.navigateByUrl("/category/home");
        },
        error => {
          alert("Category Already Exists..!! Please add another one");
          this.handleError(error);
        }
      );
    } else {
      // alert(this.cat_id);
      this.categoryService
        .storeSubCategory(this.category, this.cat_id)
        .subscribe(
          res => {
            alert("Successfully Added");
            this.Router.navigateByUrl("/category/home");
          },
          error => {
            alert("Category Already Exists..!! Please add another one");
            this.handleError(error);
          }
        );
    }
  }

  handleError(error) {
    this.error = error.error.error;
  }
}
