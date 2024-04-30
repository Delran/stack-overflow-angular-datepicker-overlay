import {
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
  signal,
} from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { A11yModule } from '@angular/cdk/a11y';

/**
 * @title Overlay basic example
 */
@Component({
  selector: 'cdk-overlay-basic-example',
  templateUrl: './cdk-overlay-basic-example.html',
  styleUrl: './cdk-overlay-basic-example.css',
  standalone: true,
  imports: [
    OverlayModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    A11yModule,
  ],
})
export class CdkOverlayBasicExample {
  protected isOpen = signal<boolean>(false);

  @ViewChild('container', { static: false })
  datepickerContainer!: ElementRef<HTMLElement>;

  protected onBlur($event: FocusEvent) {
    const relatedTarget = $event.relatedTarget;
    if (
      !relatedTarget ||
      !(relatedTarget instanceof HTMLElement) ||
      !this.datepickerContainer.nativeElement.contains(relatedTarget)
    ) {
      this.isOpen.set(false);
    }
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
