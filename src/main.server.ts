import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from 'rxjs';
import { appConfig } from './app/app.config';

const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

export default bootstrap;
