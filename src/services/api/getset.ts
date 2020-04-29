import { Injectable } from '@angular/core';

@Injectable()
export class GetSet {
    public param: any;
    set(param) {
        this.param = param;
    }
    get() {
        return this.param;
    }
}