import { Injectable } from '@angular/core';
import {LoadingController, ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PresentToastService {
  public loading;
  refresh_QR1: any;

  constructor(
      public ToastController:ToastController,
      private loadingCtrl: LoadingController,
  ) { }


  //下拉刷新完成提示
  async presentToast_refresh() {
    const toast = await this.ToastController.create({
      message: '已刷新数据',
      duration: 800,
      color: 'dark',
      cssClass:'toast-style'
    });
    toast.present();
  }


  //上拉无更多提示
  async presentToast_nomore() {
    const toast = await this.ToastController.create({
      message: '没有更多了',
      duration: 800,
      color: 'dark',
      cssClass:'toast-style'
    });
    toast.present();
  }


  //网络中断提示
  async presentToast_nointernet() {
    const toast = await this.ToastController.create({
      message: '请检查网络',
      duration: 800,
      color: 'dark',
      cssClass:'toast-style'
    });
    toast.present();
  }


  //搜素不到结果
  async presentToast_noresult() {
    const toast = await this.ToastController.create({
      message: '搜索不到结果，请重新输入',
      duration: 800,
      color: 'dark',
      cssClass:'toast-style'
    });
    toast.present();
  }


  /**
   * 统一调用此方法显示提示信息
   * @param message 信息内容
   * @param duration 显示时长
   */
  async showToast(message = '操作完成', duration = 2000) {
    const toast = await this.ToastController.create({
      message: message,
      duration: duration,
      color: 'dark',
      cssClass:'toast-style'
    });
    toast.present();
  }

  /**
   * 统一调用此方法显示提示信息
   * @param message 信息内容
   * @param duration 显示时长
   */
  async showToastTips(message = '提示', duration = 2000){
    const toast = await this.ToastController.create({
      message: message,
      duration: duration,
      color: 'dark',
      cssClass:'toast-style'
    });
    toast.present();
  }

  async showLoading(msg?, duration?) {
    if(!this.loading) {
      this.loading = await this.loadingCtrl.create({
        message: msg,
        duration: duration,
      });
    }
    await this.loading.present();
  }

  /**
   * 关闭loading
   */
  async hideLoading() {
    if(this.loading) {
      await this.loading.dismiss();
    }
  }




}
