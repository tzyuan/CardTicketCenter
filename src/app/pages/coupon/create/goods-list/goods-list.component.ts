import { Component, OnInit } from '@angular/core';
import { ParseError } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {

  constructor() { }

  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  goodsData = [];
  displayGoodsData = [];
  goodsClass = ['汤达人', '都会小馆', '巧面馆', '饮料', '矿泉水'];
  listOfGoodsClass = [
    { text: '汤达人', value: '汤达人' },
    { text: '都会小馆', value: '都会小馆' },
    { text: '巧面馆', value: '巧面馆' },
    { text: '饮料', value: '饮料' },
    { text: '矿泉水', value: '矿泉水' },
  ];
  // 搜索产品类别
  listOfSearchGoodsClass = [];
  searchGoodsClass = '';

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.displayGoodsData
      .filter(item => !item.disabled)
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.displayGoodsData.filter(item => !item.disabled).some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.goodsData.filter(item => this.mapOfCheckedId[item.id]).length;
  }

  checkAll(value: boolean): void {
    this.displayGoodsData.filter(item => !item.disabled).forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  filter(searchGoodsClass: string): void {
    this.searchGoodsClass = searchGoodsClass;
    this.search();
  }

  copy = (data) => {
    return JSON.parse(JSON.stringify(data));
  }
  search = () => {
    if (this.searchGoodsClass.length > 0) {
      this.displayGoodsData = this.copy(this.goodsData.filter(goods => this.searchGoodsClass.indexOf(goods.goods_class) > -1));
    } else {
      this.displayGoodsData = this.copy(this.goodsData);
    }
    this.refreshStatus();
  }

  ngOnInit() {
    let i = 0;
    while (i < 100) {
      this.goodsData = [...this.goodsData, {
        id: i,
        goods_name: `测试产品${i}`,
        goods_class: this.goodsClass[parseInt(`${Math.random() * 5}`, 10)],
        goods_price: parseInt(`${Math.random() * 100}`, 10).toFixed(2)
      }];
      i++;
    }

    this.displayGoodsData = JSON.parse(JSON.stringify(this.goodsData));
  }

}
