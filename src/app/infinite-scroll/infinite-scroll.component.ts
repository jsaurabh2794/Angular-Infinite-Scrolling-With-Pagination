import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataStorageService } from '../dataservice/data-storage.service';
import { Direction } from '../modal/Direction';
import { Employee } from '../modal/Employee.model';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit {
  pageNo = 0;
  pageSize = 15;
  totalElements: number;
  totalPages: number;
  loaderShow = false;
  EmployeeList: Employee[] = [];
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    //console.log('Inside the ngOnInit()');
    this.loaderShow = true;
    this.fetchData();
  }
  private fetchData() {
    this.dataStorageService.fetchAllEmployees(this.pageNo, this.pageSize, Direction.ASC)
      .subscribe((data: any) => {
        this.totalElements = data.totalElements;
        this.totalPages = data.totalPages;
        this.pushDataToList(data.content);
        this.loaderShow = false;
      });
  }

  pushDataToList(content: any[]) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < content.length; i++) {
      this.EmployeeList.push(new Employee(content[i].id, content[i].name, content[i].email, content[i].mobile, content[i].address));
    }
  }

  onScroll() {
    this.loaderShow = true;
    this.pageNo = this.pageNo + 1;
    //console.log('Page No:' + this.pageNo);
    //console.log('Page Size:' + this.pageSize);
    this.fetchData();
  }

  applyAfterClick() {
    this.loaderShow = true;
    //console.log('Button Clicked');
    if (this.pageSize < 15) {
      alert('To work infinite scrolling properly, please slect page size atleast of 15.');
      this.pageSize = 15;
    }
    this.pageNo = 0;
    this.EmployeeList = [];
    this.fetchData();
  }
}
