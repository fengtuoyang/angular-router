import {CanDeactivate} from '@angular/router';
import {ProductComponent} from '../product/product.component';

export class UnsavedGuard implements CanDeactivate<ProductComponent>{

  canDeactivate(component: ProductComponent) {
    return window.confirm("你还没保存，确定要离开了吗？");
  }

}
