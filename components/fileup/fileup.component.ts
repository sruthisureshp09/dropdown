import { Component, OnInit, Renderer, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
  NgForm
} from "@angular/forms";
import { MultifilesService } from "../../services/multifiles.service";

@Component({
  selector: "app-fileup",
  templateUrl: "./fileup.component.html",
  styleUrls: ["./fileup.component.css"]
})
export class FileupComponent implements OnInit {
  constructor(
    private renderer: Renderer,
    private formBuilder: FormBuilder,
    private multifilesService: MultifilesService
  ) {}

  /* public documentGrp: FormGroup;
  public totalfiles: Array<File> = [];
  public totalFileName = [];
  public lengthCheckToaddMore = 0; */

  ngOnInit() {
    /*  this.documentGrp = this.formBuilder.group({
      documentFile: new FormControl(File),

      items: this.formBuilder.array([this.createUploadDocuments()])
    }); */
  }

  fileSelectionEvent(fileInput: any) {
    console.log(fileInput);
    if (fileInput.target.files && fileInput.target.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e: any) {
      //  $("#preview").attr("src", e.target.result);
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  /*  createUploadDocuments(): FormGroup {
    return this.formBuilder.group({
      documentFile: File
    });
  }

  get items(): FormArray {
    return this.documentGrp.get("items") as FormArray;
  }

  addItem(): void {
    //console.log("length is ",this.totalfiles.length);
    //console.log("lengthCheckToaddMore ", this.lengthCheckToaddMore);
    if (this.totalfiles.length != 0)
      if (this.lengthCheckToaddMore === this.totalfiles.length) {
        this.items.insert(0, this.createUploadDocuments());
        this.lengthCheckToaddMore = this.lengthCheckToaddMore + 1;
      }
  }

  removeItem(index: number) {
    this.totalfiles.splice(index);
    this.totalFileName.splice(index);
    this.items.removeAt(index);
    this.lengthCheckToaddMore = this.lengthCheckToaddMore - 1;
    // console.log("name are ",this.totalFileName);
  }

  public fileSelectionEvent(fileInput: any, oldIndex) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {};
      if (oldIndex == 0) {
        this.totalfiles.unshift(fileInput.target.files[0]);
        this.totalFileName.unshift(fileInput.target.files[0].name);
      } else {
        this.totalfiles[oldIndex] = fileInput.target.files[0];
        this.totalFileName[oldIndex] = fileInput.target.files[0].name;
      }

      reader.readAsDataURL(fileInput.target.files[0]);
    }

    if (this.totalfiles.length == 1) {
      this.lengthCheckToaddMore = 1;
    }
  }
  myFiles = [];
  public OnSubmit(formValue: any) {
    let main_form: FormData = new FormData();

    for (let j = 0; j < this.totalfiles.length; j++) {
      main_form.append(this.totalFileName[j], <File>this.totalfiles[j]);
    }

    //reverseFileNames=this.totalFileName.reverse();

    formValue.items.forEach((element, index) => {
      let eachObj = {
        file_name: this.totalFileName[index]
      };
      this.myFiles.push(eachObj);
    });

    //console.log("the Array data is ",AllFilesObj);
    //main_form.append("fileInfo", JSON.stringify(AllFilesObj));

    for (var i = 0; i < this.myFiles.length; i++) {
      main_form.append("fileInfo", this.myFiles[i]);
    }

    this.multifilesService.saveFiles(main_form).subscribe(data => {
      //console.log("result is ", data)
    });
  } */
}
