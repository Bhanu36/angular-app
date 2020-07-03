import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';
import { Apiservice } from '../service/apiCall-service'


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit {

  public searchKey: any;
  public name: any;
  public username: string;
  public phone: number;
  public email: string;
  public id: any;
  btn1 = false;
  isEdit = false;
  isWeekEnd = false;
  menu = [];
  constructor(private httpService: Apiservice) { }
  ngOnInit() {
    console.log(this.btn1)
    this.httpService.get('/stu/list').subscribe(data => {
      console.log("data", data.data)
      this.menu = data.data
    })
  }

  showInputBox() {
    this.btn1 = true;
  }

  showListing() {
    this.btn1 = false;
    this.username = null;
    this.phone = null;
    this.email = null;
    this.isWeekEnd = false;
  }

  edit(id, name, phone, email, isWeekEnd) {
    this.btn1 = true;
    this.username = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
    this.isWeekEnd = (isWeekEnd == "weekEnd") ? true : false;
    this.isEdit = true;
  }

  onSubmit(name, phone, email, isWeekEnd) {
    if (this.isEdit) {
      const body = {
        _id: this.id,
        userName: this.username,
        phone: this.phone,
        email: this.email,
        isWeekEnd: this.isWeekEnd
      }
      this.httpService.put('/stu/studentInfo', "", body).subscribe(data => {
        this.btn1 = false;
        this.httpService.get('/stu/list').subscribe(data => {
          this.menu = data.data;
        })
      })
      this.showListing()
      this.isEdit = false;
    } else {
      const body = {
        userName: name,
        phone: phone,
        email: email,
        isWeekEnd: (isWeekEnd === 'weekEnd') ? true : false
      }
      this.httpService.post('/stu/create', "", body).subscribe(data => {
        this.btn1 = false;
        this.httpService.get('/stu/list').subscribe(data => {
          this.menu = data.data
        })
      })
    }
  }

  delete(id) {
    this.httpService.delete(`/stu/delete/${id}`, false, id).subscribe(data => {
      this.menu = data.data
    })
  }

}










