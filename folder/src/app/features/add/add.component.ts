import { Component, Injector } from '@angular/core';
import { ShiftserService } from '../../shiftser.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public blogs = {
    assignedOn:'',
    shiftName: '',
    startDate: '', 
    endDate: " ",
    shiftStartTime: " ",
    shiftEndTime: " ",
    employeeId: "",
  };

  public sh: ShiftserService; // Removed inject here
  public router: Router; // Removed inject here
  public fb: FormBuilder; // Removed inject here
  public myForm!: FormGroup;
  public submittedData: any = [];

  public successMessage: string = '';

  public hours: string[] = Array.from({ length: 24 }, (_, i) => ('0' + i).slice(-2));
  public minutes: string[] = Array.from({ length: 60 }, (_, i) => ('0' + i).slice(-2));
  public seconds: string[] = Array.from({ length: 60 }, (_, i) => ('0' + i).slice(-2));

  public shiftName: any =  [
    { value: 'MorningShift', label: 'Morning Shift' },
    { value: 'NightShift', label: 'Night Shift' },
  ];

  constructor(private injector: Injector) {
    this.sh = this.injector.get(ShiftserService);
    this.router = this.injector.get(Router);
    this.fb = this.injector.get(FormBuilder);
  }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const currentDate = new Date().toISOString().split('T')[0];

    this.myForm = this.fb.group({
      assignedOn: [currentDate, Validators.required], 
      shiftName: ['', Validators.required],

      startDate: ['', Validators.required],
      endDate: ['', Validators.required],

      shiftStartTime: ['', Validators.required],
      shiftEndTime: ['', Validators.required],

      employeeId: ['', Validators.required]
    });
  }

  clearTable(): void {
    this.submittedData = null;
  }

  onSubmit(): void {
    console.log("Form submitted!");
    console.log("Form value:", this.myForm.value);
    this.submittedData = this.myForm?.value;
    console.log("Submitted data:", this.submittedData);
    
    this.addBlog();
  }
  
  addBlog() {
    this.sh.addEmp(this.myForm.value).subscribe({
      next: (successResponse) => {
        console.log(this.myForm.value);
        console.log(successResponse);
        alert("Shift allocation updated successfully.");
        this.blogs = {
          assignedOn:'',
          shiftName: '',
          startDate:'',
          endDate:'',
          shiftStartTime: '',
          shiftEndTime: '',
          employeeId:''
        };
       
        this.sh.setSuccessMessage(successResponse.message);
        this.router.navigate(['']);
      },
      error: (errorResponse) => {
        console.log(errorResponse);
      },
    });
  }
}
