import { Component, OnInit, ViewChild } from '@angular/core';
import { Api } from 'src/services/api/api';
import { NavController, NavParams, ModalController, Events } from '@ionic/angular';
import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-eject-phonebook',
  templateUrl: './eject-phonebook.page.html',
  styleUrls: ['./eject-phonebook.page.scss'],
  // providers: [NavParams]
})
export class EjectPhonebookPage implements OnInit {
  searchname: any;
  toppings = 0;

  grouplist = [];

  filterback = {
    status: -1,
    item: null
  };

  statacg = 0;

  user_list = [];

  // public navParams = new NavParams();
  // get: any;

  constructor(
    public Api: Api,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public events: Events,
  ) {
    // events.subscribe('url:param', (id, mobile) => {
    //   console.log('Welcome', id, 'at', mobile);
    // });
  }

  get = this.navParams.get('params');
  title: string;

  ngOnInit() {

  }

  ionViewWillEnter() {



    if (this.get.select_type == 'checker') {

    } else if (this.get.select_type == 'looker') {

    }
    this.getgroup();


  }
  /** 获取电话 本 */
  get_the_phonebook() {
    console.log('get_the_phonebook');
    console.log(this.get);
    this.user_list = [];
    if (this.get) {
      this.Api.postFormData('WechatMsg/get_phonebook', {
        store_id: this.get.store,
        group_id: this.toppings,
        name: this.searchname,
        mobile: this.get.mobile
      }).subscribe(
        (res: any) => {
          if (res.status == 1) {
            this.statacg = 1;
            Object.keys(res.res.list).forEach((key) => {
              const obj = { type: key, list: res.res.list[key] };
              this.user_list.push(obj);
            });
          }
        },
        err => { }
      );
    }
  }

  /**  获取部门 */
  getgroup() {
    this.Api.postFormData('WechatMsg/getgroup', { store_id: this.get.store, mobile: this.get.mobile }).subscribe(
      (res: any) => {
        console.log('eject-phonebook-获取部门', res);
        this.grouplist = res.group_list;
        this.get_the_phonebook();
      },
      err => { }
    );
  }

  go_info(item) {
    console.log('go_info(item)');
    console.log(item);
    this.filterback.status = 1;
    this.filterback.item = item;
    this.modalCtrl.dismiss(this.filterback);
  }

  onclose() {
    this.modalCtrl.dismiss(this.filterback);
  }

  getItems(evt) {
    console.log(evt);
    this.searchname = evt.target.value;
    this.get_the_phonebook();
  }

}
