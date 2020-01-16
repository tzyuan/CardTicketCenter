/*
 * @Author: 曹雪原
 * @since: 2020-01-10 13:27:30
 * @lastTime     : 2020-01-13 16:02:35
 * @LastAuthor   : 曹雪原
 * @文件相对于项目的路径: /cardTicketCenter/src/app/pages/coupon/list/list.component.ts
 * @message: 
 */
import { Component, OnInit } from '@angular/core';
import { CouponStatusConfig } from '../../../config/couponStatus.config';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public config: CouponStatusConfig) {

  }
  couponList = [];
  displayCouponList = [];
  search = {
    pt: null,
    status: null
  };
  tableFilter = () => {
    this.displayCouponList = this.couponList.filter(item => {
      if (this.search.pt) {
        return item.pt === this.search.pt;
      }
      return true;
    }).filter(item => {
      if (this.search.status) {
        return item.status === this.search.status;
      }
      return true;
    });
  }
  ngOnInit() {
    let count = 1;
    while (count < 20) {
      const status = parseInt(`${Math.random() * (2 - 0 + 1) + 0}`, 10);
      this.displayCouponList = this.couponList = [...this.couponList,
      {
        coupon_name: '测试优惠券' + count,
        pt: parseInt(`${Math.random() * 10}`, 10) > 5 ? '微信' : '支付宝',
        status: this.config.statusEnum[status],
        coupon_value: parseInt(`${Math.random() * 50}`, 10),
        is_send_num: parseInt(`${Math.random() * 100}`, 10),
        max_quota: parseInt(`${Math.random() * 200}`, 10),
      }];
      count++;
    }
  }

}
