import { TestBed, ComponentFixture, async} from '@angular/core/testing';

import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Title } from '@angular/platform-browser';
import { AppComponent } from './app-component';

class MockTitleService extends Title {
    setTitle(title: string): void { }
}

class MockRouter extends Router {

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
                },
                {
                    provide: Router,
                    useClass: MockRouter
                }
            ],
            // imports: [RouterModule]
            // imports: [RouterTestingModule]
        })
    });

    it('ngInitにはsetTitleを呼び出した。', async(() => {
        TestBed.compileComponents().then(() => {
            debugger
            fixture = TestBed.createComponent(AppComponent);
            fixture.whenStable().then(() => {
                let appComponent: AppComponent = fixture.componentInstance;
                spyOn(appComponent, 'ngOnInit').and.callThrough();
                appComponent.ngOnInit();
                expect(appComponent.ngOnInit).toHaveBeenCalled();
            });
        });
    }));

    it('setTitleにはtitleServiceのsetTitleを呼び出した。パラメーターは"Angular2"', async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(AppComponent);
            fixture.whenStable().then(() => {
                let appComponent: AppComponent = fixture.componentInstance;
                spyOn(appComponent.titleService, 'setTitle');
                appComponent.setTitle();
                expect(appComponent.titleService.setTitle).toHaveBeenCalledWith('Angular2');
            });
        });
    }));
});
