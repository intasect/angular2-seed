import { TestBed, ComponentFixture} from '@angular/core/testing';

import { Title } from '@angular/platform-browser';
import { AppComponent } from './app';

describe('IndexComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [Title]
        });
    });

    it('ngInitは呼び出された', () => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
            expect(fixture.componentInstance.ngOnInit).toHaveBeenCalled();
        });
    });

    it('Titleは設定された', () => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
            expect(fixture.componentInstance.titleService.getTitle()).toEqual('Angular23');
        });
    });
});
