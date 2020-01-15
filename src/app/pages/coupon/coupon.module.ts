/*
 * @Author: 曹雪原
 * @since: 2020-01-10 13:17:41
 * @lastTime     : 2020-01-14 14:01:14
 * @LastAuthor   : 曹雪原
 * @文件相对于项目的路径: /cardTicketCenter/src/app/pages/coupon/coupon.module.ts
 * @message:
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { CreateComponent } from './create/create.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { CouponStatusConfig } from 'src/app/config/couponStatus.config';
import { DetailComponent } from './detail/detail.component';
import { CreateWxComponent } from './create/create-wx/create-wx.component';
import { CreateAlipayComponent } from './create/create-alipay/create-alipay.component';
import { CreateB2bComponent } from './create/create-b2b/create-b2b.component';
import { GoodsListComponent } from './create/goods-list/goods-list.component';

const COMPONENTS = [
  CreateComponent,
  ListComponent,
  DetailComponent,
  CreateWxComponent,
  CreateAlipayComponent,
  CreateB2bComponent,
  GoodsListComponent
];
const PIPES = [

];
@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    CommonModule,
    CouponRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    GoodsListComponent
  ],
  providers: [
    CouponStatusConfig
  ]
})
export class CouponModule { }
