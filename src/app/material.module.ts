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
    MatProgressBarModule
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
    MatProgressBarModule
  ],
})

export class MaterialModule {}
