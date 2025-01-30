import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form-submit',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-submit.component.html',
  styleUrl: './form-submit.component.css'
})
export class SubmitFormComponent {
  @Input() formData: User = {
    id: 0,
    full_name: "",
    email: "",
    gender: "",
    role: "",
    tnc: false
  }
  @Output() endUpdateEvent = new EventEmitter<any>()
  
  endUpdate(){
    this.endUpdateEvent.emit({initUpdate: false})
  }
  
  handleSubmit(){
    this.endUpdateEvent.emit({initUpdate: false, updatedUser: this.formData})
  }
}