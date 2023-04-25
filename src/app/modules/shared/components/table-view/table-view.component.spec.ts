import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableViewComponent } from './table-view.component';

describe('TableViewComponent', () => {
	let component: TableViewComponent;
	let fixture: ComponentFixture<TableViewComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ TableViewComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TableViewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});