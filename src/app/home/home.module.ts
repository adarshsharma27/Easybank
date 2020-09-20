import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { WhatsaidComponent } from './whatsaid/whatsaid.component';
import { ArticlesComponent } from './articles/articles.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [NavbarComponent, WhatsaidComponent, ArticlesComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,NavbarComponent,WhatsaidComponent, ArticlesComponent, FooterComponent]
})
export class HomeModule { }
