import { Component, OnInit } from '@angular/core';

import { DeliveryClient, IDeliveryClient, ContentItem } from 'kentico-cloud-delivery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  client: IDeliveryClient;
  articles: ContentItem[];
  loaded: boolean;
  title = 'kc-angular';

  constructor() {
    this.client = new DeliveryClient({ projectId: '975bf280-fd91-488c-994c-2f04416e5ee3' });
    this.loaded = false;
    this.articles = [];
  }

  ngOnInit(): void {
    this.client.items()
      .type('article')
      .getPromise()
      .then(result => {
        // eslint-disable-next-line no-console
        console.log(result.items);
        this.articles = result.items;
        this.loaded = true;
      });
  }
}
