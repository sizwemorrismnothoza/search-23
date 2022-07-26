import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otc',
  templateUrl: './otc.component.html',
  styleUrls: ['./otc.component.css']
})
export class OtcComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onOTC(data){
    this.router.navigate(['/quickSearch/resetpassword/reset'])
  }

}
