import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';
import { apiservice } from '../service/apiCall-service'


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit {
  menu = [];
  public searchKey: any;
  ratingFilter = '';
  price = '';
  selectedCategory = '';
  category = [];
  availableOffers = [];

  constructor(private httpService: apiservice) { }
  ngOnInit() {  
    this.httpService.getRestaurantData().subscribe(data => {
      this.menu = data.menu.items
      this.category = data.menu.categories
    })
  }

  searchWithDishName() {
    if(!this.searchKey){
      this.httpService.getRestaurantData().subscribe(data => {
        this.menu = data.menu.items
        this.category = data.menu.categories
      })
    }
    const searchText = this.searchKey.toLowerCase()
    const filteredData = this.menu.filter((dishInfo) => {
      return dishInfo.name.includes(searchText)
    })
    this.menu = filteredData
  }

  SearchWithFilters() {
    const rating = parseInt(this.ratingFilter)
    const price = this.price
    const selectdCategory = this.selectedCategory
    if (rating) {
      const ratingData = this.menu.filter((data) => {
        if (data.rating === rating) {
          return data;
        }
      })
      this.menu = ratingData;
    }
  }
}

















