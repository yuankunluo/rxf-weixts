import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PresentAlertService {

  constructor(
    public AlertController:AlertController
  ) { }


  //打印反馈弹窗
  async presentAlert_printing() {
    const alert = await this.AlertController.create({
      header: '提示',
      message: '实体打印正在建设中',
      buttons: ['知道了']
    });

    await alert.present();
  }


  //正在建设中提示弹窗
  async presentAlert_buliding() {
    const alert = await this.AlertController.create({
      header: '提示',
      message: '正在建设中...',
      buttons: ['知道了']
    });

    await alert.present();
  }


  //暂无颜色尺码弹框提示
  async presentAlert_nodata() {
    const alert = await this.AlertController.create({
      header: '提示',
      message: '暂无颜色尺码数据',
      buttons: ['知道了']
    });

    await alert.present();
  }


  //测试二维码生成完成弹框提示
  async presentAlert_finish() {
    const alert = await this.AlertController.create({
      header: '提示',
      message: '二维码生成完成',
      buttons: ['打印']
    });

    await alert.present();
  }


  //请填写完整弹窗
  async presentAlert_null() {
    const alert = await this.AlertController.create({
      header: '提示',
      message: '请填写完整！',
      buttons: ['知道了']
    });

    await alert.present();
    
  }


  //数量超出提示弹窗
  async presentAlert_over() {
    const alert = await this.AlertController.create({
      header: '提示',
      message: '数量已经超出单据总数量！',
      buttons: ['知道了']
    });

    await alert.present();
      
  }


  //数量低于0提示弹窗
  async presentAlert_less() {
    const alert = await this.AlertController.create({
      header: '提示',
      message: '输入的数量少于或等于0！',
      buttons: ['知道了']
    });

    await alert.present();
      
  }


  //删除成功提示弹窗
  async presentAlert_success() {
    const alert = await this.AlertController.create({
      header: '提示',
      message: '单据删除成功！',
      buttons: ['知道了']
    });

    await alert.present();
      
  }


  //删除成功提示弹窗
  async presentAlert_fail() {
    const alert = await this.AlertController.create({
      header: '提示',
      message: '单据删除失败，请重试！',
      buttons: ['知道了']
    });

    await alert.present();
      
  }


  //删除成功提示弹窗
  async presentAlert_ended() {
    const alert = await this.AlertController.create({
      header: '提示',
      message: '生产制单已结案！',
      buttons: ['知道了']
    });

    await alert.present();
      
  }


}
