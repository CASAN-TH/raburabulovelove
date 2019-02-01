import { TestBed, inject } from '@angular/core/testing';
import { SidenavService } from './sidenav.service';
describe('SidenavService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [SidenavService]
        });
    });
    it('should be created', inject([SidenavService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=sidenav.service.spec.js.map