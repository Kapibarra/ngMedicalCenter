import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // перенаправление на главную страницу по умолчанию
  { path: 'home', component: MainPageComponent }, // маршрут для главной страницы
  // { path: 'services', component:  }, // маршрут для страницы услуг
  // { path: 'about', component:  }, // маршрут для страницы "О нас"
  // { path: 'contacts', component:  }, // маршрут для страницы контактов
  // { path: '**', component:  } // маршрут для несуществующих страниц
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
