import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Product} from '../product/product.component';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductResolve implements Resolve<Product> {

  constructor(private router: Router){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|Promise<Product>|Product{

    let productId: number = route.params['id'];
    //如果从url获取到的id是1，即传递来的id是1，则...；否则跳转到home路由
    if(productId == 1){
      return new Product(1, "iphone7");
    }else{
      this.router.navigate(['/home']);
      return undefined;
    }

  }
}
