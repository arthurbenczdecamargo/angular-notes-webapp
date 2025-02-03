import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notes } from './notes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private readonly API = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) { }
  listNotes(): Observable<Notes[]> {
    return this.http.get<Notes[]>(this.API);
  }

  createNote(note: Notes): Observable<Notes> {
    return this.http.post<Notes>(this.API, note);
  }

  editNote(note: Notes): Observable<Notes> {
    const url = `${this.API}/${note.id}`;
    return this.http.put<Notes>(url, note);
  }

  deleteNote(id: number): Observable<Notes> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Notes>(url);
  }

  searchById(id: number): Observable<Notes> {
    const url = `${this.API}/${id}`;
    return this.http.get<Notes>(url);
  }
}
