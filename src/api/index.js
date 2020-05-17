/*
  包含 n个请求接口的函数的模块，
  函数的返回值是promise对象
 */
import ajax from './ajax'
//根据经纬度获取位置详情
export const reqAddress = (geohash)=> ajax(`/position/${geohash}`);
//获取食品分类列表
export const reqFoodTypes = ()=> ajax('/index_category');
//根据经纬度获取商铺列表
export const reqShops = (longitude,latitude)=> ajax('/shops',{longitude,latitude})
//根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword)=> ajax('/search_shops',{geohash, keyword});
//获取一次性验证码
export const reqPwdLogin = ()=> ajax('/captcha');
//用户名密码登陆
export const reqPwdLogin = (name,pwd,captcha)=> ajax('/login_pwd',{name,pwd,captcha},'POST');
//发送短信验证码
export const reqSendCode = (phone)=> ajax('/sendcode',{phone});
//手机号验证码登陆
export const reqSmsLogin = (phone,code)=> ajax('/login_sms',{phone,code},'POST');
//用户登出
export const reqLogout = ()=> ajax('/logout');
