import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../interfaces/Product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  API_ENDPOINT = "http://127.0.0.1:8000/api";
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get(this.API_ENDPOINT + "/products");
  }
  //store products
  store(products: Product) {
    return this.httpClient.post(this.API_ENDPOINT + "/products", products);
  }
  //delete products
  destroy(id) {
    return this.httpClient.delete(this.API_ENDPOINT + "/products/" + id);
  }
  //show specific products
  show(id) {
    return this.httpClient.get<Product>(this.API_ENDPOINT + "/products/" + id);
  }
  //update products
  update(products) {
    return this.httpClient.put(
      this.API_ENDPOINT + "/products/" + products.id,
      products
    );
  }
}
