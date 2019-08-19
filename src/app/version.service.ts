import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  constructor(private http: HttpClient) { }

  getCommitId(): Observable<string> {
    return this.http.get<{ commitId: string }>('./assets/version.json').pipe(map(d => d.commitId));
  }
}
