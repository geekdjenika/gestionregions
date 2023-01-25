import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../model/api.response";
import * as http from "http";
import {Region} from "../model/region.modele";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  baseUrl : string = "http://localhost:9190";
  constructor(private http: HttpClient) {

  }

  getRegion() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/region");
  }
  addRegion(region : Region) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, region);
  }
  updateRegion(code : string, region : Region) : Observable<ApiResponse> | null {
    return null;//this.http.put<ApiResponse>(this.baseUrl + "/modifier_region/" + region.coderegion);
  }
}
