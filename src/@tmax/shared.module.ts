/**
 * Angular中一些常用的模块
 */
import { NgModule } from '@angular/core';

/**
 * BrowserAnimationsModule 提供和浏览器动画相关的功能
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * CommonModule 提供常用的指令，例如 NgIf、NgFor
 */
import { CommonModule } from '@angular/common';

/**
 * FormsModule 提供构建模板驱动表单的功能，包含NgModel
 * ReactiveFormsModule 提供构建响应式表单的功能
 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * FlexLayoutModule 提供和响应式布局相关的功能
 * https://github.com/angular/flex-layout
 */
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [CommonModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, FlexLayoutModule],
    exports: [CommonModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, FlexLayoutModule],
})
export class TmaxSharedModule {}
