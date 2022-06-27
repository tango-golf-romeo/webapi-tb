import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Constants} from './include/base/classes/primal/constants';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = Constants.Name;

	constructor (private router:Router)
	{
		document.title = Constants.Name;
		this.router.navigate(['logon'],{skipLocationChange:true,replaceUrl:false,preserveFragment:true});
	}
}
