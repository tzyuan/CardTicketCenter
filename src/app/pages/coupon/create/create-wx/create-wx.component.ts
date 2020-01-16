/*
 * @Author: 曹雪原
 * @since: 2020-01-14 13:57:15
 * @lastTime     : 2020-01-14 14:07:00
 * @LastAuthor   : 曹雪原
 * @文件相对于项目的路径: /cardTicketCenter/src/app/pages/coupon/create/create-wx/create-wx.component.ts
 * @message: 
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-create-wx',
  templateUrl: './create-wx.component.html',
  styleUrls: ['./create-wx.component.scss', '../create.component.scss']
})
export class CreateWxComponent implements OnInit {

  constructor() { }
  couponStockId = '';

  data = null;
  loading = false;
  search = () => {
    this.loading = true;
    setTimeout(() => {
      this.data = {
        coupon_stock_id: this.couponStockId, // 优惠券批次ID
        coupon_name: '100元优惠券', // 优惠券名称
        coupon_value: 100, // 优惠券面额
        coupon_stock_status: 1, // 批次状态： 1-未激活；2-审批中；4-已激活；8-已作废；16-中止发放；
        coupon_total: 100, // 优惠券数量
        begin_time: 1234567890, // 生效开始时间 格式为时间戳
        end_time: 1234567890, // 生效结束时间 格式为时间戳
        create_time: 1234567890, // 创建时间 格式为时间戳
        begin_time_t: 20200101121212, // 生效开始时间 格式为年月日时间制
        end_time_t: 20200101121212, // 生效结束时间 格式为年月日时间制
        create_time_t: 20200101121212, // 创建时间 格式为年月日时间制
      };
      this.loading = false;
    }, 1000);
  }

  ngOnInit() {
  }

}
