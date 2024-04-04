import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShiftserService } from '../shiftser.service';

@Component({
  selector: 'app-deleted-shifts',
  templateUrl: './deleted-shifts.component.html',
  styleUrls: ['./deleted-shifts.component.css']
})
export class DeletedShiftsComponent implements OnInit {

  public employeeData: any = [];
  public currentParamsId: string = '';
  public obj: any = [];

  constructor(
    public sh: ShiftserService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(ActivatedRoute) public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const cid = this.activatedRoute.snapshot.params['Id'];
    console.log(cid)
    this.currentParamsId = cid;

    // this.sh.getEmployeeById(cid).subscribe((result) => {
    //   console.log(result)
    //   this.employeeData = result;  
    //   // Assuming employeeData should be used

      this.deleteShift(cid);
    // });
  }

  deleteShift(id: any) {
    console.log(id);

    this.sh.getEmployeeById(id).subscribe({
      next: (successResponse: any) => {
        console.log('empData', successResponse);
        this.obj.push(successResponse);
        console.log('obj', this.obj)
      },
      error: (errorResponse) => {
        console.error('Error while fetching data:', errorResponse);
      },
    });
  }
}
