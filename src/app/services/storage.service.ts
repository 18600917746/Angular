import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {
  }

  l_setItem(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  l_getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  l_removeItem(key) {
    localStorage.removeItem(key);
  }

  l_clear() {
    localStorage.clear();
  }

  s_setItem(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val));
  }

  s_getItem(key) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  s_removeItem(key) {
    sessionStorage.removeItem(key);
  }

  s_clear() {
    sessionStorage.clear();
  }

  setCookit(key, val, expires) {
    var date = new Date();
    date.setMinutes(date.getMinutes() + expires);
    document.cookie = key + '=' + val + ';expires=' + date;
  }

  getCookie(key) {
    var arrStr = document.cookie.split('; ');
    for (let i = 0; i < arrStr.length; i++) {
      let arr = arrStr[i].split('=');
      if (arr[0] == key) {
        return arr[1];
      }
    }
    return '';
  }

  removeCookie(key) {
    this.setCookit(key, '', -1);
  }
}
