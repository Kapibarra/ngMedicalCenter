import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { ProfOsmotrComponent } from './pages/prof-osmotr/prof-osmotr.component';
import { MedicalBooksComponent } from './pages/medical-books/medical-books.component';
import { MedicalCheckupComponent } from './pages/medical-checkup/medical-checkup.component';
import { MedicalClinicComponent } from './pages/medical-clinic/medical-clinic.component';
import { PsychologyComponent } from './pages/psychology/psychology.component';
import { PricePageComponent } from './pages/price-page/price-page.component';
import { TestsComponent } from './pages/tests/tests.component';
import { ProfOsmotrOrgComponent } from './pages/prof-osmotr-org/prof-osmotr-org.component';

const routes: Routes = [
  { path: '', component: MainPageComponent }, // маршрут для главной страницы
  { path: 'consultation', component: ConsultationComponent }, // маршрут для страницы услуг
  { path: 'about', component: AboutPageComponent }, // маршрут для страницы "О нас"
  { path: 'certificates', component: CertificateComponent }, // маршрут для страницы "Справки"
  { path: 'contacts', component: ContactsPageComponent }, // маршрут для страницы контактов
  { path: 'prof-osmotr', component: ProfOsmotrComponent }, // маршрут для страницы проф осмотров
  { path: 'prof-osmotr-org', component: ProfOsmotrOrgComponent }, // маршрут для страницы проф осмотров юр лица
  { path: 'medical-books', component: MedicalBooksComponent }, // маршрут для страницы медкнижек
  { path: 'medical-checkup', component: MedicalCheckupComponent }, // маршрут для страницы медосмотров
  { path: 'medical-clinic', component: MedicalClinicComponent }, // маршрут для страницы медпункта
  { path: 'psychology', component: PsychologyComponent }, // маршрут для страницы медкнижек
  { path: 'price', component: PricePageComponent }, // маршрут для страницы прайс листа
  { path: 'medical-tests', component: TestsComponent }, // маршрут для страницы анализов
  // { path: '**', component:  } // маршрут для несуществующих страниц
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
