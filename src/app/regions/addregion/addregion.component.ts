import { Component } from '@angular/core';
import {RegionService} from "../../service/region.service";
import {Region} from "../../model/region.modele";
import {Router} from '@angular/router';

@Component({
  selector: 'app-addregion',
  templateUrl: './addregion.component.html',
  styleUrls: ['./addregion.component.css']
})
export class AddregionComponent {

  region : Region = new Region();
  ajoute = false;
  //private router: any;

  constructor(private regionservice : RegionService,private router : Router) {
  }

  onSubmit() {
    this.ajoute = true;
    this.regionservice.addRegion(this.region)
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
    this.region = new Region();
    this.router.navigate(['/regions']);
  }

}
