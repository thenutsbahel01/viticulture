import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { HealthPredictorService } from '../services/health-predictor.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  title = 'appBootstrap';
  
  closeResult: string;
  items;
  checkoutForm; 
  submitted = false;
  isHeartOK: Boolean; //1 or 0 value


  // @ViewChild('dialog', {static: false}) resultDialog;
  @ViewChild('mymodal') resultDialog;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,
     private healthPredictor: HealthPredictorService) {
    this.checkoutForm = this.formBuilder.group({
      age: ['', Validators.required],
      sex: ['', Validators.required],
      cp: ['', Validators.required],
      trestbps: ['', Validators.required],
      chol: ['', Validators.required],
      fbs: ['', Validators.required],
      restecg: ['', Validators.required],
      thalach: ['', Validators.required],
      exang: ['', Validators.required],
      oldpeak: ['', Validators.required],
      slope: ['', Validators.required],
      ca: ['', Validators.required],
      thal: ['', Validators.required],
    });
  }

  onSubmit() { //on clicking calculate it comes to this
    this.submitted = true;
    console.log('yo')
     this.healthPredictor.getHeartPredictorResult(this.checkoutForm.value).subscribe((response: any) => {      
      if (response.Status === 200) { //getHeartPredictorResult is service
        this.modalService.open(this.resultDialog);
        this.isHeartOK = !!response.Result;// this result value 1 or 0 is stored in isheartok variable
        }
    });

    //this.checkoutForm.reset();
   
    
  }

  ngOnInit() {
  }

}
