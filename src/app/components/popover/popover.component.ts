import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': '"popover" + (popoverClass ? " " + popoverClass : "")',
    '[class.fade]': 'animation',
    'role': 'tooltip',
    '[id]': 'id'
  },
})
export class PopoverComponent implements OnInit {
  @Input() animation!: boolean;
  @Input() title: string | TemplateRef<any> | null | undefined;
  @Input() id!: string;
  @Input() popoverClass!: string;
  @Input() context: any;

  isTitleTemplate() { return this.title instanceof TemplateRef; }

  constructor() { }

  ngOnInit(): void {
  }

}
