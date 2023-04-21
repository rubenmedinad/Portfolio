import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { Articulo1Component } from './articulo1/articulo1.component';
import { Articulo2Component } from './articulo2/articulo2.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Articulos', component: ArticulosComponent },
  { path: 'Articulo1', component: Articulo1Component },
  { path: 'Articulo2', component: Articulo2Component },
  { path: 'Formulario', component: FormularioComponent },
  { path: 'Blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
