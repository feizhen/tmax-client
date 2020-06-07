/**
 * 提供全局的配置服务
 */
import { Injectable } from '@angular/core';
import { TmaxConfig } from '@tmax/types/tmax-config';

import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TmaxConfigService {
    // 初始配置
    private _configSource = new BehaviorSubject<TmaxConfig>({
        theme: 'light',
    });

    config = this._configSource.asObservable();

    constructor() {}

    setConfig(config: TmaxConfig) {
        this._configSource.next(config);
    }
}
