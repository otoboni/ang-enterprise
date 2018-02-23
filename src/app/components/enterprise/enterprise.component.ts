import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {

  items: Item[];
  
  constructor(private dataService: DataService) {
    
   }
  
  ngOnInit() {    
    this.dataService.getEnterprises().subscribe((items) => {
      this.items = items;
    });
  }
}

interface Item {
  name:string,
  address:string,
  city:string,
  country:string,
  phone:string,
  code:string
}