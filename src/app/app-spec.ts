import { TestBed, ComponentFixture, async} from '@angular/core/testing';

import { Title } from '@angular/platform-browser';
import { AppComponent } from './app-component';

class MockTitleService extends Title {
    setTitle(title: string): void {}
}

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [
                {
                    provide: Title,
                    useClass: MockTitleService
                }
            ]
        });
        fixture = TestBed.createComponent(AppComponent);
    });

    it('ngInitにはsetTitleを呼び出した。', async(() => {
        fixture.whenStable().then(() => {
            let appComponent: AppComponent = fixture.componentInstance;
            spyOn(appComponent, 'ngOnInit').and.callThrough();
            appComponent.ngOnInit();
            expect(appComponent.ngOnInit).toHaveBeenCalled();
        });
    }));

    it('setTitleにはtitleServiceのsetTitleを呼び出した。パラメーターは"Angular2"', async(() => {
        fixture.whenStable().then(() => {
            let appComponent: AppComponent = fixture.componentInstance;
            spyOn(appComponent.titleService, 'setTitle');
            appComponent.setTitle();
            expect(appComponent.titleService.setTitle).toHaveBeenCalledWith('Angular2');
        });
    }));
});
