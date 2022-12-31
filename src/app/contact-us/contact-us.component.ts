import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {



  message: { id: null, name: String, email: String, phone: String, subject: String, messageBody: String } = { id: null, name: "", email: "", phone: "", subject: "", messageBody: "" };
  
  emailid;
  nameid;
  phoneid;
  subjectid;
  commentid
  formdata: any;
  constructor(public dataService: DataService) { }



  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$")
      ])),
      nameid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("")
      ])),
      phoneid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("")
      ])),
      subjectid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("")
      ])),
      commentid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("")
      ]))
    })
  }

  onClickSubmit(data: any) {
    this.emailid = data.emailid
  }

  createMessage() {
    console.log(this.message);
    alert("Message sent! Thank you for your feedback!");
    this.dataService.createMessage(this.message);
    this.message = { id: null, name: "", email: "", phone: "", subject: "", messageBody: "" };
  }
}

