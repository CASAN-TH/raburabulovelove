import { FacebookService, UIParams, UIResponse, InitParams } from 'ngx-facebook';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: ['./shared-component.component.css']
})
export class SharedComponentComponent implements OnInit {

  constructor(
    private fb: FacebookService,
// 
  ) {
    const initParams: InitParams = {
      appId: '391466811398230',
      version: 'v3.2'
    };

    fb.init(initParams);
  }

  ngOnInit() {
  }
  shareWithOpenGraphActions() {
    const params: UIParams = {
      method: 'share',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object: {
          // 'og:url': 'https://angular-for-seo.firebaseapp.com',
          'og:title': 'RabuRabuLoveLove',
          'og:description': 'ข้อความยาว ๆ',
          'og:image': 'https://cache.gmo2.sistacafe.com/images/uploads/summary/image/41751/3e9fea8de38ad5631fd691a1e9c54c26.jpg'
        }
      })
    };
    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }

}
