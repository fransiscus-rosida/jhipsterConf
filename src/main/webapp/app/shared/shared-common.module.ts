import { NgModule } from '@angular/core';

import { JhipsterConfSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterConfSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterConfSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterConfSharedCommonModule {}
