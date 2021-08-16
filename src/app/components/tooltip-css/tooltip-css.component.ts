import { Component, OnInit } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-tooltip-css',
  templateUrl: './tooltip-css.component.html',
  styleUrls: ['./tooltip-css.component.scss']
})
export class TooltipCssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const button: any = document.querySelector('#button');
    const tooltip: any = document.querySelector('#tooltip');

    if (button && tooltip) {
      const popperInstance = createPopper(button, tooltip, {
        placement: 'top',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
      });

      function show() {
        // Make the tooltip visible
        tooltip.setAttribute('data-show', '');

        // Update its position
        popperInstance.update();
      }

      function hide() {
        // Hide the tooltip
        tooltip.removeAttribute('data-show');
      }

      const showEvents = ['mouseenter', 'focus'];
      const hideEvents = ['mouseleave', 'blur'];

      showEvents.forEach(event => {
        button.addEventListener(event, show);
      });

      hideEvents.forEach(event => {
        button.addEventListener(event, hide);
      });
    }
  }

}
