import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Topics } from './topics';

@Injectable({
  providedIn: 'root'
})
export class TopicsServiceService {

  private baseURL = "http://localhost:8080/api/topics";

  constructor(private httpClient: HttpClient) { }
  
  getTopicsList(): Observable<Topics[]>{
    return this.httpClient.get<Topics[]>(`${this.baseURL}`);
  }

  createTopic(topic: Topics): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, topic);
  }

  getTopicById(id: number): Observable<Topics>{
    return this.httpClient.get<Topics>(`${this.baseURL}/${id}`);
  }
  updateTopics(id: number, topic: Topics): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, topic);
  }

  deleteTopics(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
