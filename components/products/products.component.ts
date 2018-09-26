import { Component, OnInit, Renderer } from "@angular/core";
import { Product } from "../../interfaces/Product";
import { ProductService } from "../../services/product.service";
import { Category } from "../../interfaces/Category";
import { CategoryService } from "../../services/category.service";
import { Router, ActivatedRoute } from "@angular/router";
/* import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
  NgForm
} from "@angular/forms";
 */
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  product: Product = {
    id: null,
    category_id: 1,
    title: null,
    add1: null,
    add2: null,
    country: null,
    state: null,
    city: null,
    zip: null,
    phone1: null,
    phone2: null,
    images: null,
    offers: null,
    type: null,
    events: null
  };
  categories: Category[];
  subcategories1: Category[];

  id: any;
  cat_id: any;

  edit: boolean = false;
  event_options = [
    { id: 1, option: "Weddings" },
    { id: 2, option: "Birthdays" },
    { id: 3, option: "Events" },
    { id: 4, option: "Others" }
  ];
  types = [
    { id: 1, option: "Medium" },
    { id: 2, option: "High" },
    { id: 3, option: "Low" }
  ];

  selectedType = this.types[1];

  checked: string[] = [];
  option: string[];
  public error = null;
  public success = null;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private renderer: Renderer,
    private activtedroute: ActivatedRoute,
    private Router: Router /*  private formBuilder: FormBuilder */
  ) {
    this.id = this.activtedroute.snapshot.params["id"];
    if (this.id) {
      this.edit = true;
      this.productService.show(this.id).subscribe(
        res => {
          //  console.log(res.events);
          this.option = res.events.split(",");
          this.product = res;
        },
        err => {
          alert("error occured");
        }
      );
    } else {
      this.edit = false;
    }
  }

  ngOnInit() {
    this.categoryService.get().subscribe(
      (res: Category[]) => {
        this.categories = res;
      },
      err => {
        console.log(err);
        alert("error occured");
      }
    );
  }
  onTypeChanged(typeItem) {
    console.log(typeItem);
    this.product.type = typeItem;
  }
  updateChecked(option, event) {
    console.log(option);
    //console.log("event.target.value " + event.target.value);
    var index = this.checked.indexOf(option);
    if (event.target.checked) {
      if (index === -1) {
        this.checked.push(option);
      }
    } else {
      if (index !== -1) {
        this.checked.splice(index, 1);
      }
    }
    console.log(this.checked);
    //this.product.events = this.checked;
  }

  selectedCategory1(newValue) {
    console.log(newValue);
    this.cat_id = newValue;
    this.categoryService.getSubcategory(this.cat_id).subscribe(
      (res: Category[]) => {
        // console.log(res);
        this.subcategories1 = res;
      },
      err => {
        console.log(err);
        alert("error occured");
      }
    );
  }

  storeProduct() {
    this.product.events = this.checked.join(",");
    if (this.edit) {
      this.productService.update(this.product).subscribe(
        res => {
          alert("Successfully Updated");
          this.Router.navigateByUrl("/products/home");
        },
        error => {
          this.handleError(error);
        }
      );
    } else {
      this.productService.store(this.product).subscribe(
        res => {
          console.log(res);
          alert("Successfully Updated");
          this.Router.navigateByUrl("/products/home");
        },
        error => {
          //alert("Category Already Exists..!! please add another one");
          console.log(error);
          this.handleError(error);
        }
      );
    }
  }

  handleError(error) {
    this.error = error.error.error;
  }
}
