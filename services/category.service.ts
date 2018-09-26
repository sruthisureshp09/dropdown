import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Category } from "../interfaces/Category";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  API_ENDPOINT = "http://127.0.0.1:8000/api";
  constructor(private httpClient: HttpClient) {}
  //get categories
  get() {
    return this.httpClient.get(this.API_ENDPOINT + "/categories");
  }
  //store categories
  store(category: Category) {
    return this.httpClient.post(this.API_ENDPOINT + "/categories", category);
  }
  //delete category
  destroy(id) {
    return this.httpClient.delete(this.API_ENDPOINT + "/categories/" + id);
  }
  //show specific category
  show(id) {
    return this.httpClient.get<Category>(
      this.API_ENDPOINT + "/categories/" + id
    );
  }
  //updatecategory
  update(category) {
    return this.httpClient.put(
      this.API_ENDPOINT + "/categories/" + category.id,
      category
    );
  }

  //store sub category
  storeSubCategory(category: Category, cat_id) {
    return this.httpClient.post(
      this.API_ENDPOINT + "/storesubcategories/" + cat_id,
      category
    );
  }
  //get subcategory
  getSubcategory(cat_id) {
    return this.httpClient.get(
      this.API_ENDPOINT + "/showsubcategories/" + cat_id
    );
  }

  
}
