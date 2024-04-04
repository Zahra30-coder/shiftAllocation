import { Component, OnInit, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { ShiftserService } from '../../shiftser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  updateForm!: FormGroup;
  public employeeData: any = [];
  public currentParamsId: string = '';

  //public submittedData: any = [];
 
  constructor(
    private sh: ShiftserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    @Inject(ActivatedRoute) public activatedRoute: ActivatedRoute,
  ) { }

  public obj: any = [];
  public hours: string[] = Array.from({ length: 24 }, (_, i) => ('0' + i).slice(-2));
  public minutes: string[] = Array.from({ length: 60 }, (_, i) => ('0' + i).slice(-2));
  public seconds: string[] = Array.from({ length: 60 }, (_, i) => ('0' + i).slice(-2));



  public shiftName: any =  [
    { value: 'MorningShift', label: 'Morning Shift' },
    { value: 'NightShift', label: 'Night Shift' },

  ];

  ngOnInit(): void {

    const cid = this.activatedRoute.snapshot.params['Id'];
    console.log(cid)
    this.currentParamsId = cid;

    this.sh.getEmployeeById(cid).subscribe((result) => {
      console.log(result)

      this.updateData(cid);
      //console.log(this.obj)
    })


    this.updateForm = this.fb.group({
      shiftName: [''],

      startDate: [''],
      endDate: [''],

      shiftStartTime: [''],
      shiftEndTime: [''],

      employeeId: ['']

    });
  }

  //this function fetches data on the browser screen
updateData(id: any) {
  console.log(id);

  this.sh.getEmployeeById(id).subscribe({
    next: (successResponse: any) => {
      console.log('empData', successResponse);
      this.obj = successResponse;
      console.log('obj', this.obj)

      this.updateForm.patchValue({
        shiftName: this.obj.name,
        startDate: this.obj.email,
        endDate: this.obj.selecteddept,
        shiftStartTime: this.obj.selectedmonth,
        shiftEndTime: this.obj.selectedday,
        employeeId: this.obj.employeeId

      });
    },
    error: (errorResponse) => {
      console.error('Error while fetching data:', errorResponse);
    },
  });
}


updateEmployeeData() {
  console.log("askhjkhkjsahdkjHDKHadkujDKJdkjhkhjD")
  this.sh.updateEmployeeData(this.currentParamsId, this.updateForm.value).subscribe({
    next: (successResponse:any) => {
      console.log('editSuccess..............!!!!!!!!!!', successResponse);
      alert("Shift allocation updated successfully.")

      this.updateForm = this.fb.group({
        shiftName: [''],

        startDate: [''],
        endDate: [''],

        shiftStartTime: [''],
        shiftEndTime: [''],

        employeeId: ['']
      });

      this.router.navigate(['']) 

    },

    error: (errorResponse) => {
      console.log(errorResponse);
    },
  });
}

clearTable(): void {
  this.employeeData = null;
}

onSubmit(): void {
  console.log("Form submitted!");
  console.log("Form value:", this.updateForm.value);

  this.employeeData = this.updateForm.value;
  console.log("Submitted data:", this.employeeData);
  // Handle submission or updateData() as needed

  this.updateData(this.currentParamsId);
  this.updateEmployeeData()
    this.clearTable()
}
}