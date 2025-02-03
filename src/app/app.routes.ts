import { Routes } from '@angular/router';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';
import { ListNoteComponent } from './components/notes/list-note/list-note.component';
import { DeleteNoteComponent } from './components/notes/delete-note/delete-note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listNote',
    pathMatch: 'full'
  },
  {
    path: 'createNote',
    component: CreateNoteComponent
  },
  {
    path: 'listNote',
    component: ListNoteComponent
  },
  {
    path: 'deleteNote/:id',
    component: DeleteNoteComponent
  },
  {
    path: 'editNote/:id',
    component: EditNoteComponent
  }
];
