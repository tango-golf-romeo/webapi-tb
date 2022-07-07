import {Router} from "@angular/router";

import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {MatDialog,MatDialogConfig,MatDialogRef} from "@angular/material/dialog";

import {FeatureComponent} from "src/app/include/base/classes/ui/feature/feature.component";
import {LogonService} from "src/app/services/sys/logon.service";
import {DialogComponent} from "../dialog/dialog.component";

export class HostedComponent extends FeatureComponent
{
  constructor (rt:Router, svcLogon:LogonService, ctrlBottomSheet:MatBottomSheet, dlg:MatDialog)
	{
		super(rt,svcLogon,ctrlBottomSheet,dlg);
	}

	protected showNotImplementedDialog (): void
	{
	const cfg:MatDialogConfig<string> = new MatDialogConfig();
		cfg.data = 'Not implemented.';

	const dref:MatDialogRef<DialogComponent,boolean> = this.dialog.open(DialogComponent,cfg);
		dref.afterClosed().subscribe(res => console.log(res));
	}
}