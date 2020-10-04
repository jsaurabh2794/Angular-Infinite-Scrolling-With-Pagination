import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../dataservice/data-storage.service';
import { Direction } from '../modal/Direction';
import { Employee } from '../modal/Employee.model';

@Component({
  selector: 'app-infinite-scroll-id-filter',
  templateUrl: './infinite-scroll-id-filter.component.html',
  styleUrls: ['./infinite-scroll-id-filter.component.css']
})
export class InfiniteScrollIdFilterComponent implements OnInit {
  start = 0;
  end = 100;
  EmployeeList: Employee[] = [];
  pageSize = 15;
  pageNo = 0;
  totalElements: number;
  totalPages: number;
  loaderShow = false;
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.fetchdata();
  }
  private fetchdata() {
    this.loaderShow = true;
    this.dataStorageService.fetchAllEmployeesByIdBetween(this.start, this.end, this.pageNo, this.pageSize, Direction.ASC)
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
    //console.log('Start:' + this.start);
    //console.log('end:' + this.end);
    this.fetchdata();
  }
  applyAfterClick() {
    this.loaderShow = true;
    this.pageNo = 0;
    //console.log('Page No:' + this.pageNo);
    //console.log('Page Size:' + this.pageSize);
    //console.log('Start:' + this.start);
    //console.log('end:' + this.end);
    this.EmployeeList = [];
    this.fetchdata();
  }
}
