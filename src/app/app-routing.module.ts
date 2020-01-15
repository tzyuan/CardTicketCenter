/*
 * @Author: 曹雪原
 * @since: 2020-01-09 15:32:59
 * @lastTime     : 2020-01-13 10:21:01
 * @LastAuthor   : 曹雪原
 * @文件相对于项目的路径: /cardTicketCenter/src/app/app-routing.module.ts
 * @message:
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { createComponent } from '@angular/compiler/src/core';

const routes: Routes = [
  { path: 'coupon', loadChildren: () => import('./pages/coupon/coupon.module').then(mod => mod.CouponModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
