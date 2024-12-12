import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form: FormGroup;
  formResponses: any[] = [];
  submitted = false;

  constructor(private fb: FormBuilder , private router : Router){

    this.form = this.fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      company: [''],
      skills: this.fb.array([], Validators.required)
    });
  } 
  get skills(): FormArray {
    return this.form.get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: ['', [Validators.required, Validators.minLength(3)]],
      exp: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

 addSkills(){
  this.skills.push(this.newSkill());
 }

 removeSkill(i: number){
  this.skills.removeAt(i);
 }

  onSubmit(){
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }
  else{
    this.router.navigate(['/response'], { state: { formResponse: this.form.value } });
  }
  }

}
