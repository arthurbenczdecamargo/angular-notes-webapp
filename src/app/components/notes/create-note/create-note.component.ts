import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-create-note',
  imports: [FormsModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent {
  note: { id: string, content: string, author: string, model: string };

  constructor(private service: NoteService, private router: Router) {
    this.note = {
      id: this.generateId().toString(),
      content: '',
      author: '',
      model: 'model1'
    };
  }

  generateId(): number {
    return Math.floor(Math.random() * 1000);
  }

  createNote() {
    this.service.createNote(this.note).subscribe(() => {
      this.router.navigate(['/listNote']);
    });
  }

  cancel() {
    this.router.navigate(['/listNote']);
  }
}

