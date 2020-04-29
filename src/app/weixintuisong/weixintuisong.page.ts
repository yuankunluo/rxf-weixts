
import { ApiService } from '../../services/api/api.service';
import { Api } from '../../services/api/api';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PresentToastService } from '../../services/Toast/presentToast.service';
import { Title } from '@angular/platform-browser';
//
import { EjectPhonebookPage } from '../eject-phonebook/eject-phonebook.page';
import { ModalController, AlertController, NavController, Events } from '@ionic/angular';
import { ViewChild, Component, OnInit } from '@angular/core';
//
@Component({
  selector: 'app-weixintuisong',
  templateUrl: './weixintuisong.page.html',
  styleUrls: ['./weixintuisong.page.scss'],
})
export class WeixintuisongPage implements OnInit {
  public exampleJson = {
    content_param: {
      open_url: '',
      title: '',
      api_url: '',
      api_param: '',
      is_check: '',
      item: [
        {
          title: '',
          content: '',
          act_type: '0',
          name: '',
          result: '',
          visible: '',
          url: ''
        }
      ]
    }
  };
  public exampleItem: any;
  id = '';
  url = '';
  msg_guid = '';
  is_check = '';
  descript = '';
  status = '0';
  submit_item = [];
  mobile = '';
  looker_list = [];


  constructor(
    public Api: Api,
    public apiService: ApiService,
    public activated: ActivatedRoute,
    public toastTip: PresentToastService,
    public titleService: Title,
    public modelCtrl: ModalController,
    public router: Router,
    public alert: AlertController,
    public alertCtrl: AlertController,
    public events: Events,

  ) {
    // 从返回的rul 中 获取参数
    this.activated.queryParams.subscribe((params: Params) => {
      this.id = params['id'];
      this.mobile = params['mobile'];
    });



  }

  ngOnInit() {
    // this.events.publish('url:param', this.id, this.mobile);

  }
  ionViewWillEnter() {
    console.log('进来了');
    this.getWeixinData(); //  调用详情接口
  }



  //获取数据
  getWeixinData() {
    this.Api.postFormData('WechatMsg/getWeixinData', { 'id': this.id }).subscribe((res: any) => {
      console.log('正确返回');
      if (res.status == 1) {
        this.exampleJson = JSON.parse(res.result.json_data);
        console.log('2121');
        console.log(this.exampleJson);
        this.exampleItem = this.exampleJson.content_param.item;
        this.url = this.exampleJson.content_param.api_url;
        this.msg_guid = this.exampleJson.content_param.api_param;
        this.is_check = this.exampleJson.content_param.is_check;
        if (this.exampleJson.content_param.title) {
          this.titleService.setTitle(this.exampleJson.content_param.title);
        }
        let status = res.result.status;
        console.log('当前的状态' + status);
        if (status == 0) {
          this.status = '0';
        } else {
          this.status = '1';
        }
        this.read();
      }
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }


  updateWeixinData(status) {
    let json_data = JSON.stringify(this.exampleJson);
    this.Api.postFormData('WechatMsg/updateWeixinData', { 'id': this.id, 'status': status, 'json_data': json_data }).subscribe((res: any) => {
      if (res.status == 1) {
        this.exampleJson = JSON.parse(res.result.json_data);
        this.exampleItem = this.exampleJson.content_param.item;
        this.url = this.exampleJson.content_param.api_url;
        this.msg_guid = this.exampleJson.content_param.api_param;
        this.is_check = this.exampleJson.content_param.is_check;
        if (this.exampleJson.content_param.title) {
          this.titleService.setTitle(this.exampleJson.content_param.title);
        }
        let status = res.result.status;
        if (status == 0) {
          this.status = '0';
        } else {
          this.status = '1';
        }
      }
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }



  //   --- 调用已阅读的接口 ---
  read() {
    let header = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    if (this.id) {
      let b = new Base64();
      let call_page = {};
      call_page['msg_guid'] = this.msg_guid;
      call_page['tel_number'] = this.mobile;
      call_page['code'] = '0';
      call_page['msg'] = 'load';
      let paramet = b.encode(JSON.stringify(call_page));
      let data = 'params=' + paramet;
      this.apiService.posturl(this.url, data, header).subscribe(
        (res: any) => {
          console.log('获取到的数据', res);
        },
        (err) => {

        }
      );
    } else {

    }
  }


  //   --- 审核通过 ---
  pass() {
    let header = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    var that = this;
    let item = {};
    if (this.id) {
      console.log(that.exampleJson.content_param.item);
      if (that.exampleJson.content_param.item) {
        that.exampleJson.content_param.item.forEach((val) => {
          if (val['result'] == '1') {
            let name = val.name;
            let content = val.content;
            item[name] = content;
          }
        });
      }
      let b = new Base64();
      let call_page = {};
      call_page['msg_guid'] = this.msg_guid;
      call_page['tel_number'] = this.mobile;
      call_page['code'] = '0';
      call_page['msg'] = '';
      call_page['item'] = item ? item : '';
      let paramet = b.encode(JSON.stringify(call_page));
      let data = 'params=' + paramet;
      console.log('审核通过', data);
      this.apiService.posturl(this.url, data, header).subscribe(
        (res: any) => {
          if (res.code == '0') {
            that.toastTip.showToastTips('审批通过,操作成功');
            that.updateWeixinData(1);//调用详情接口
            that.status = '1';
          } else {
            const msg = res.msg ? res.msg : '审批失败请重试!';
            that.toastTip.showToastTips(msg);
          }
        },
        (err) => {
          that.toastTip.showToastTips('接口请求失败,请重试!');
        }
      );
    } else {

    }
  }


  //   --- 拒绝 ---
  refuse() {
    const that = this;
    console.log('fdsaffdsa');
    const header = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    const item = {};
    if (this.id) {
      if (that.exampleJson.content_param.item) {
        that.exampleJson.content_param.item.forEach((val) => {
          if (val['result'] == '1') {
            const name = val.name;
            const content = val.content;
            item[name] = content;
          }
        });
      }
      const b = new Base64();
      const call_page = {};
      call_page['msg_guid'] = this.msg_guid;
      call_page['tel_number'] = this.mobile;
      call_page['code'] = '1';
      call_page['msg'] = '';
      call_page['item'] = item ? item : '';
      const paramet = b.encode(JSON.stringify(call_page));
      const data = 'params=' + paramet;
      console.log('审核不通过', data);
      this.apiService.posturl(this.url, data, header).subscribe(
        (res: any) => {
          console.log('审核不通过返回的数据', res);
          if (res.code == '0') {
            that.toastTip.showToastTips('审批不通过,操作成功');
            that.updateWeixinData(2);//调用详情接口
            that.status = '1';
          } else {
            const msg = res.msg ? res.msg : '审批失败请重试!';
            that.toastTip.showToastTips(msg);
          }
        },
        (err) => {
          that.toastTip.showToastTips('接口请求失败,请重试!');
        }
      );
    } else {

    }
  }

  dismiss() {
    this.modelCtrl.dismiss();
  }

  /**
   * 跳转链接
   * @param url
   */
  gotourl(url) {
    window.location.href = url;
  }

  /**
   * 调用接口
   */
  postApiUrl(api_url, api) {
    const that = this;
    console.log('fdsaffdsa');
    const header = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    const item = {};
    if (this.id) {
      if (that.exampleJson.content_param.item) {
        that.exampleJson.content_param.item.forEach((val) => {
          if (val['result'] == '1') {
            const name = val.name;
            const content = val.content;
            item[name] = content;
          }
        });
      }
      const b = new Base64();
      const call_page = {};
      call_page['msg_guid'] = this.msg_guid;
      call_page['tel_number'] = this.mobile;
      call_page['code'] = '0';
      call_page['msg'] = api;
      call_page['item'] = item ? item : '';
      const paramet = b.encode(JSON.stringify(call_page));
      const data = 'params=' + paramet;
      this.apiService.posturl(api_url, data, header).subscribe(
        (res: any) => {
          console.log('获取跳转链接', res);
          if (res.code == '0') {
            window.location.href = res.msg;
          } else {
            const msg = res.msg ? res.msg : '审批失败请重试!';
            that.toastTip.showToastTips(msg);
          }
        },
        (err) => {
          that.toastTip.showToastTips('接口请求失败,请重试!');
        }
      );
    } else {

    }
  }



  back() {
    window.location.href = 'http://cloudpf.weunit.cn/cloudpf/index/';
  }

  /**
   * 我的审核
   */
  myCheck() {
    window.location.href = 'http://cloudpf.weunit.cn/cloudpf/index/my-product-apply';
  }

  /**
   * 关闭窗口
   */
  closeModel() {
    window.opener = null;
    window.open('', '_self');
    window.close();
  }

  //   弹框选择审核人
  async eject_cont(type) {
    //   2019-03-08 添加抄送人 修改
    let datas = {
      store: '14',
      select_type: type,
    };

    const addModal = await this.modelCtrl.create({
      component: EjectPhonebookPage,
      componentProps: {
        params: datas,
      }
    });

    await addModal.present();
    const { data } = await addModal.onDidDismiss();
    if (data.status > 0) {
      let kg = 0;
      if (type == 'checker') { //   点击添加审核人

        this.looker_list.forEach((val) => {
          if (val.user_id == data.item.user_id) {
            kg = 1;
          }
        });
        if (kg > 0) {
          this.toastTip.showToastTips('不能重复添加');
        } else {
          this.toastTip.showToastTips(data.item);
        }

      } else if (type == 'looker') {  //   点击添加抄送人
        this.looker_list.forEach((val) => {
          if (val.user_id == data.item.user_id) {
            kg = 1;
          }
        });
        if (kg > 0) {
          this.toastTip.showToastTips('不能重复添加');
        } else {
          this.looker_list.push(data.item);
        }

      } else {
        this.toastTip.showToastTips('请稍后再试');
      }
    }
  }

  async delete_checker(inx, type) {
    const confirm = await this.alertCtrl.create({
      header: '确认删除',
      subHeader: '',
      buttons: [
        {
          text: '取消',
          handler: () => {
            return;
          }
        },
        {
          text: '是的',
          handler: () => {
            if (type == 'looker') {
              this.looker_list.splice(inx, 1);
            }
          }
        }
      ]
    });
    await confirm.present();
  }
}
