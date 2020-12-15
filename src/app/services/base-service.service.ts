import { BaseEntity } from 'src/app/entities/base-entity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseServiceService <T extends BaseEntity>{

  private baseUrl : string = "http://localhost:8080";
  protected baseEndpoint : string;
  
  constructor(protected httpClient : HttpClient) { 
    
  }

  public getData(endpointDetails : string): Observable<T>{
    return this.httpClient.get<T>(`${this.baseUrl}/${this.baseEndpoint}${endpointDetails}`);
  }

  public getListData(endpointDetails : string): Observable<T[]>{
    return this.httpClient.get<T[]>(`${this.baseUrl}/${this.baseEndpoint}${endpointDetails}`);
  }


  public saveEntity(entity : T) : Observable<T>{
    return this.httpClient.post<T>(`${this.baseUrl}/${this.baseEndpoint}`, entity);
  }
}
