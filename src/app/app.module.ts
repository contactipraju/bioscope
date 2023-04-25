/* Angular Modules */
import { NgModule }                 from '@angular/core';
import { RouterModule }             from '@angular/router';
import { BrowserModule }            from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

/* Third-party Modules */
import { ModalModule } from 'ngx-bootstrap/modal';


/* App Components */
import { AppComponent }    from './app.component';

/* App Modules */
import { AppRoutingModule } from './app-routing.module';
import { CoreModule }       from './modules/core/core.module';
import { SharedModule }     from './modules/shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		ModalModule.forRoot(),
		RouterModule,
		CoreModule,
		SharedModule
	],
	exports: [AppComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
