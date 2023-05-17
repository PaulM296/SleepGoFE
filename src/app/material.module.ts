import { NgModule } from "@angular/core";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule} from "@angular/material/button";
import { MatButtonToggleModule} from "@angular/material/button-toggle";
import { MatCardModule} from "@angular/material/card";
import { MatCheckboxModule} from "@angular/material/checkbox";
import { MatDatepickerModule} from "@angular/material/datepicker";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCommonModule } from "@angular/material/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatChipsModule } from "@angular/material/chips";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCommonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatChipsModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCommonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatChipsModule,
    MatPaginatorModule,
    MatIconModule
  ],
})

export class MaterialModule {}
