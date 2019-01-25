import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/**
 * Some components(mat-slide-toggle, mat-slider, matTooltip) rely on HammerJS for gestures.
 * In order to get the full feature-set of these components, HammerJS must be loaded into the application.
 * After installing, import it on your app's entry point (e.g. src/main.ts).
 */
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
