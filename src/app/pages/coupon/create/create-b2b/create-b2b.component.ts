/*
 * @Author: 曹雪原
 * @since: 2020-01-14 14:02:33
 * @lastTime     : 2020-01-16 12:24:09
 * @LastAuthor   : 曹雪原
 * @文件相对于项目的路径: /CardTicketCenter/src/app/pages/coupon/create/create-b2b/create-b2b.component.ts
 * @message:
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import { GoodsListComponent } from '../goods-list/goods-list.component';

@Component({
  selector: 'app-coupon-create-b2b',
  templateUrl: './create-b2b.component.html',
  styleUrls: ['./create-b2b.component.scss', '../create.component.scss']
})
export class CreateB2bComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private modal: NzModalService
  ) { }
  goodsId = [];
  steps = {
    index: 0,
    onIndexChange: (index: number) => { this.steps.index = index; },
    next: (form: FormGroup, index) => {

      for (const i of Object.keys(form.controls)) {
        form.controls[i].markAsDirty();
        form.controls[i].updateValueAndValidity();
      }
      if (form.valid) {
        this.steps.index = index;
      }
    }
  };
  form1 = this.fb.group({
    coupon_name: ['测试优惠券', [Validators.required]],
    coupon_type: ['代金券', Validators.required],
    coupon_value: [0, [Validators.required, Validators.min(0)]],
    coupon_mininumn: [0, [Validators.required]],
    coupon_time: [[new Date('2020-01-01'), new Date('2020-12-31')], [Validators.required]],
    coupon_explain: [null],
  });
  form2 = this.fb.group({
    max_quota: [1, Validators.required],
    max_send_num: [0],
    goods: [null]
  });

  // 选择产品
  selectGdoos = () => {
    this.modal.create({
      nzContent: GoodsListComponent,
      nzTitle: '选择产品',
      nzMaskClosable: false,
      nzWidth: '900px',
      nzOnOk: (res) => {
        let goodsId = [];
        for (const id of Object.keys(res.mapOfCheckedId)) {
          if (res.mapOfCheckedId[id]) {
            goodsId = [...goodsId, id];
          }
        }
        this.goodsId = goodsId;
      }
    });
  }

  ngOnInit() {
    this.form1.get('coupon_type').valueChanges.subscribe(res => {
      this.form1.get('coupon_value').setValue(0);
    });
  }

}
