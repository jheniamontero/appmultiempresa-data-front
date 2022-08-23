import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoEmp } from '../models/productoEmp';

@Injectable({
  providedIn: 'root'
})
export class ProductoEmpService {

  productoURL = 'http://localhost:8080/producto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ProductoEmp[]> {
    return this.httpClient.get<ProductoEmp[]>(this.productoURL + 'lista');
  }

  public detail(id: number): Observable<ProductoEmp> {
    return this.httpClient.get<ProductoEmp>(this.productoURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<ProductoEmp> {
    return this.httpClient.get<ProductoEmp>(this.productoURL + `detailname/${nombre}`);
  }

  public save(productoEmp: ProductoEmp): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'create', productoEmp);
  }

  public update(id: number, productoEmp: ProductoEmp): Observable<any> {
    return this.httpClient.put<any>(this.productoURL + `update/${id}`, productoEmp);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `delete/${id}`);
  }
}
