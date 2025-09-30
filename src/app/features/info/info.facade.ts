import { Injectable, signal } from '@angular/core';
import { InfoPage } from '../../core/models/info-page.model';
import { INFO_PAGES_DATA } from '../../core/data/info.data';

@Injectable({
  providedIn: 'root',
})
export class InfoFacade {
  private readonly _data = signal<InfoPage[]>(INFO_PAGES_DATA);
  public readonly data = this._data.asReadonly();

  public getInfoBySlug(slug: string): InfoPage | undefined {
    const infoPage = this.data().find((page) => page.slug === slug);
    return infoPage;
  }
}