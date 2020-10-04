import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Direction } from '../modal/Direction';


@Injectable()
export class DataStorageService {
  DOMAIN = 'http://localhost:8080/api/v1/';
  constructor(private http: HttpClient) { }

  fetchAllEmployees(pageNo: number, pageSize: number, direction: Direction) {
    return this.http.get(this.DOMAIN + 'employees?pageNo=' + pageNo + '&PageSize=' + pageSize + '&direction=' + direction);
  }

  fetchAllEmployeesByIdBetween(start: number, end: number, pageNo: number, pageSize: number, direction: Direction) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.DOMAIN + 'employee?pageNo=' + pageNo +
    '&PageSize=' + pageSize +
    '&direction=' + direction +
    '&start=' + start +
    '&end=' + end);
  }


}
