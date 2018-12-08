import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auh/request.interceptor';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    providers: [
        {
           provide: HTTP_INTERCEPTORS,
           useClass: RequestInterceptor,
           multi: true 
        }
    ]
})
export class CoreModule {}