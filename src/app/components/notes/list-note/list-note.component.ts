import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoteComponent } from '../note/note.component';
import { NgFor, NgIf } from '@angular/common';
import { Notes } from '../notes';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-list-note',
  imports: [RouterLink, NoteComponent, NgFor, NgIf],
  templateUrl: './list-note.component.html',
  styleUrl: './list-note.component.css'
})
export class ListNoteComponent {
  listNotes: Notes[] = [];

  constructor(private service: NoteService) {
    this.service.listNotes().subscribe((listNotes) => {
      this.listNotes = listNotes
    })
  }
}
