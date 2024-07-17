import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSlideToggleModule,MatAutocompleteModule,
      MatInputModule,ReactiveFormsModule,FormsModule,MatFormFieldModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trialApp';
  myControl = new FormControl('');
  options: string[] = ['One','Two','Three'];
}
