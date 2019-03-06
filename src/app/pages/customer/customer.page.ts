import { Component, OnInit } from '@angular/core';
import { customer } from '../../models/customer';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../../services/customer-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  
  custList: customer  [];
  selectedCustomer: customer;
  showSpinner = true;

  
  constructor(
    private router: Router,
    private api: CustomerServiceService
  ) { }

  ngOnInit() {
    this.api.getAllCustomers().subscribe(cuss => {        
      this.custList=cuss;
      this.showSpinner=false;
      });
  }

}
