/*
 * @Author: 曹雪原
 * @since: 2020-01-14 13:57:30
 * @lastTime     : 2020-01-14 14:11:42
 * @LastAuthor   : 曹雪原
 * @文件相对于项目的路径: /cardTicketCenter/src/app/pages/coupon/create/create-alipay/create-alipay.component.ts
 * @message: 
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-coupon-create-alipay',
  templateUrl: './create-alipay.component.html',
  styleUrls: ['./create-alipay.component.scss', '../create.component.scss']
})
export class CreateAlipayComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  data = null;
  loading = false;
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
    coupon_name: [null, [Validators.required]],
    coupon_value: [null, [Validators.required, Validators.min(0)]],
    coupon_mininumn: [0, [Validators.required]],
    coupon_time: [null, [Validators.required]],
    coupon_explain: [null],
  });
  form2 = this.fb.group({
    max_quota: [1, Validators.required],
    max_send_num: [0]
  });
  save = () => {

  }

  ngOnInit() {
  }

}
