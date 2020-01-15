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
    coupon_name: [null, [Validators.required]],
    coupon_value: [null, [Validators.required, Validators.min(0)]],
    coupon_mininumn: [0, [Validators.required]],
    coupon_time: [null, [Validators.required]],
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
  }

}
