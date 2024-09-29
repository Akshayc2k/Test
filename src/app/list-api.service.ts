import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {

 private apiUrl = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) {}
   
   getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) => 
        data.map((item) => ({
          project: item.title,
          proTip: 'Keep components small and reusable.',  
          submission: 'Submit your code via GitHub.',
          evaluationCriteria: 'Code clarity, performance, and usability.',
          faq: 'Can I use other libraries? Yes, but mention them.'
        }))
      )
    );
  }
}
