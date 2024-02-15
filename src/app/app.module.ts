import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './pages/main-page/components/header/header.component';
import { HeroComponent } from './pages/main-page/components/hero/hero.component';
import { BenefitsComponent } from './pages/main-page/components/benefits/benefits.component';
import { ServicesComponent } from './pages/main-page/components/services/services.component';
import { DocumentsComponent } from './pages/main-page/components/documents/documents.component';
import { FooterComponent } from './pages/main-page/components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    HeroComponent,
    BenefitsComponent,
    ServicesComponent,
    DocumentsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MenubarModule, TabViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
