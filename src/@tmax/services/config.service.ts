/**
 * 提供全局的配置服务
 */
import { Injectable } from '@angular/core';
import { TmaxConfig } from '@tmax/types/tmax-config';

import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Tmax自带的默认配置
 */
const TmaxDefaultConfig: TmaxConfig = {
    layout: 'default',
    theme: 'dark',
    sidenav: {
        drawer: {
            mode: 'side',
            opened: true,
        },
    },
};

@Injectable({
    providedIn: 'root',
})
export class TmaxConfigService {
    private _configSource = new BehaviorSubject<TmaxConfig>(TmaxDefaultConfig);

    constructor() {}

    get config(): Observable<TmaxConfig> {
        return this.getConfig();
    }

    // TODO: 完善setConfig，允许进行对象合并，判断传入的类型必须是 TmaxConfig 的子类 (ts)
    setConfig(config: TmaxConfig) {
        this._configSource.next(config);
    }

    getConfig(): Observable<TmaxConfig> {
        return this._configSource.asObservable();
    }
}
