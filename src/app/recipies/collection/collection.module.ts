import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';


import { CollectionComponent } from './collection.component';



@NgModule({
    imports: [
        CommonModule,
      RouterModule,
      Ng2BootstrapModule.forRoot()
    ],
    declarations: [CollectionComponent],
    exports: [CollectionComponent]
})

export class CollectionModule { }
