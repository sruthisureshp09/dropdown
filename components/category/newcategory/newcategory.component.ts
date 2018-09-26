import { Component, OnInit } from "@angular/core";
import { Category } from "../../../interfaces/Category";
import { CategoryService } from "../../../services/category.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-newcategory",
  templateUrl: "./newcategory.component.html",
  styleUrls: ["./newcategory.component.css"]
})
export class NewcategoryComponent implements OnInit {
  category: Category = {
    id: null,
    category_name: null
  };
  id: any;
  edit: boolean = false;

  public error = null;
  public success = null;
  constructor(
    private categoryService: CategoryService,
    private Router: Router,
    private activtedroute: ActivatedRoute
  ) {
    this.id = this.activtedroute.snapshot.params["id"];
    if (this.id) {
      this.edit = true;
      this.categoryService.show(this.id).subscribe(
        res => {
          this.category = res;
        },
        err => {
          // console.log(err);
          alert("error occured");
        }
      );
    } else {
      this.edit = false;
    }
  }

  ngOnInit() {}
  storeCategory() {
    // console.log(this.category.id);
    if (this.edit) {
      this.categoryService.update(this.category).subscribe(
        res => {
          // console.log(res);
          alert("Successfully Updated");
          this.Router.navigateByUrl("/category/home");
        },
        error => {
          alert("Category Already Exists..!! please add another one");
          this.handleError(error);
        }
      );
    } else {
      this.categoryService.store(this.category).subscribe(
        res => {
          // console.log(res);
          alert("Successfully Added");
          this.Router.navigateByUrl("/category/home");
        },
        error => {
          alert("Category Already Exists..!! please add another one");
          this.handleError(error);
        }
      );
    }
  }

  handleError(error) {
    this.error = error.error.error;
  }
}
