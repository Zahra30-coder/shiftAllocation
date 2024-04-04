import { Component, inject, OnInit } from '@angular/core';
import { ShiftserService } from '../shiftser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
[x: string]: any;

  public allShifts: any;
  public deletedShifts: any[] = [];
  public s:any 


  constructor(private sh: ShiftserService, private router: Router) {}

  ngOnInit(){
    this.getShift()
  }

  getShift(){
    this.sh.getEmp().subscribe({
      next:(successResponse)=>{
        this.allShifts=successResponse;
        console.log(this.allShifts)
      },
      error:(errorResponse)=>{
        console.log(errorResponse)
      }
    })
  }

  

  deletePost( blogid:any){
    
    this.sh.deleteEmp(blogid).subscribe({
      next:(successResponse :any)=>{
        console.log(successResponse);
        alert("Shift allocation cancelled successfully.")

        this.allShifts = this.allShifts.filter((blog:any)=>blog.id != blogid)
      },
      error:(errorResponse: any)=>{
        console.log("Shift type not found." )
        
      }
    })
  }

}
