import { Routes } from '@angular/router';
import { Lista } from './components/lista/lista';
import { Todo } from './components/todo/todo';

export const routes: Routes = [
    {path: 'todo', component: Todo},
    {path: 'lista', component: Lista}
];
