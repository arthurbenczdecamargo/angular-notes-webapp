import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrl: './delete-note.component.css'
})
export class DeleteNoteComponent implements OnInit {
  note: { id: string, content: string, author: string, model: string } = {
    id: '',
    content: '',
    author: '',
    model: ''
  };

  constructor(private service: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.service.searchById(parseInt(id!)).subscribe((note) => {
        this.note = {
          id: note.id!,
          content: note.content,
          author: note.author,
          model: note.model
        };
      });
    }
  }

  deleteNote() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.service.deleteNote(parseInt(id!)).subscribe(() => {
        this.router.navigate(['/listNote']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/listNote']);
  }
}
