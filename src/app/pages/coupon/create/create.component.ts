/*
 * @Author: 曹雪原
 * @since: 2020-01-10 13:18:21
 * @lastTime     : 2020-01-14 13:56:34
 * @LastAuthor   : 曹雪原
 * @文件相对于项目的路径: /cardTicketCenter/src/app/pages/coupon/create/create.component.ts
 * @message:
 */

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [
    trigger('pingtaiChange', [
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity: 0
      })),
      transition('*=>in', [animate('.5s')]),
      transition('*=>out', [animate('.5s')]),
    ])
  ]
})
export class CreateComponent implements OnInit {

  constructor(
  ) { }

  pingtai = '微信';
  pingtaiEnum = ['微信', '支付宝', '自有平台', 'UP卡'];

  ngOnInit() {
  }

}
