import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Constants} from './include/base/classes/primal/constants';
import {SessionService} from './services/sys/session.service';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = Constants.Name;

	constructor (private router:Router, private session:SessionService)
	{
		document.title = Constants.Name;

		this.session.probe().subscribe
		({
			next: res =>
			{
				if (res)
					this.navToDashboard();
				else
					this.navToLogin();
			},
			error: () => this.navToLogin()
		});
	}

	private navToLogin (): void
	{
		this.router.navigate(['logon'],{skipLocationChange:true,replaceUrl:false,preserveFragment:true});
	}

	private navToDashboard (): void
	{
		this.router.navigate(['dashboard'],{skipLocationChange:true,replaceUrl:false,preserveFragment:true});
	}
}
