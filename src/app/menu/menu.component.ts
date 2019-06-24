import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {



  constructor(private router: Router) { }

home(){this.router.navigateByUrl("")}

about(){this.router.navigateByUrl("about")}

contact(){this.router.navigateByUrl("contact")}

FeedBack(){this.router.navigateByUrl("Feed-Back")}

  ngOnInit() {
  }

}
