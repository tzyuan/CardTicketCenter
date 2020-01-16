/*
 * @Author: 曹雪原
 * @since: 2020-01-13 16:36:36
 * @lastTime     : 2020-01-16 12:38:23
 * @LastAuthor   : 曹雪原
 * @文件相对于项目的路径: /cardTicketCenter/src/app/pages/coupon/detail/detail.component.ts
 * @message: 
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  coupon: any = {
    coupon_stock_id: '1234567890',
    coupon_name: '测试优惠券',
    pt: '支付宝',
    coupon_value: 100,
    coupon_stock_status: '已激活',
    is_send_num: 341,
    max_quota: 9999,
    begin_time: '2020-01-01 00:00:00',
    end_time: '2020-02-02 59:59:59'
  };
  userList = [];
  displayUserList = [];
  search = {
    status: null,
  };

  visible = false;

  tableFilter = () => {
    this.displayUserList = this.userList.filter(item => this.search.status === null ? true : item.status === this.search.status);
  }
  constructor() { }

  ngOnInit() {
    let i = 0;
    while (i < this.coupon.is_send_num) {
      const status = (Math.random() * 10) > 5;
      this.userList = [...this.userList, {
        name: `测试用户${i}`,
        getTime: `2020-01-05 23:23:23`,
        from: `二维码`,
        status: status ? '已核销' : '未核销',
        to: status ? 'UP售货机' : '',
        order_no: status ? '2019120500000045' : '',
        useDate: status ? '2020-01-05 23:23:23' : ''
      }];

      i++;
    }
    this.displayUserList = this.userList;
  }

}
