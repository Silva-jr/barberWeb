import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PagesRoutingModule } from "./pages.routing";

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, PagesRoutingModule]
})
export class PagesModule {}