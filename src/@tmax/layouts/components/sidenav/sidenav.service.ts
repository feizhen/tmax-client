/**
 * 提供侧边栏服务
 */
import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { BehaviorSubject } from 'rxjs';

/**
 * 通常来说，全局只有一个侧边栏单例组件,
 * 侧边栏服务只需要在布局模块中有用
 */
@Injectable()
export class TmaxSidenavService {
    /**
     * drawer 是一个 BehaviorSubject ，因此它是多播的，可以给多个订阅推送最新的 drawer 值
     */
    private _drawerSource = new BehaviorSubject<MatDrawer>(null);

    drawer = this._drawerSource.asObservable();

    constructor() {}

    setDrawer(drawer: MatDrawer) {
        this._drawerSource.next(drawer);
    }
}
