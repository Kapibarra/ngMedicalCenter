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
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactsComponent } from './pages/main-page/components/contacts/contacts.component';
import { InfoComponent } from './pages/main-page/components/info/info.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { AboutComponent } from './pages/main-page/components/about/about.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { TableModule } from 'primeng/table';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { ProfOsmotrComponent } from './pages/prof-osmotr/prof-osmotr.component';
import { MedicalBooksComponent } from './pages/medical-books/medical-books.component';
import { MedicalCheckupComponent } from './pages/medical-checkup/medical-checkup.component';
import { MedicalClinicComponent } from './pages/medical-clinic/medical-clinic.component';
import { PsychologyComponent } from './pages/psychology/psychology.component';
import { PricePageComponent } from './pages/price-page/price-page.component';
import { TestsComponent } from './pages/tests/tests.component';
import { ProfOsmotrOrgComponent } from './pages/prof-osmotr-org/prof-osmotr-org.component';
import { ContactsMiniComponent } from './pages/main-page/components/contacts-mini/contacts-mini.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicalBooksComponent,
    MedicalCheckupComponent,
    MedicalClinicComponent,
    PsychologyComponent,
    MainPageComponent,
    HeaderComponent,
    HeroComponent,
    BenefitsComponent,
    ServicesComponent,
    DocumentsComponent,
    FooterComponent,
    ContactsPageComponent,
    ContactsComponent,
    InfoComponent,
    AboutComponent,
    AboutPageComponent,
    ConsultationComponent,
    CertificateComponent,
    ProfOsmotrComponent,
    PricePageComponent,
    TestsComponent,
    ProfOsmotrOrgComponent,
    ContactsMiniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    AccordionModule,
    BrowserAnimationsModule,
    CardModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
