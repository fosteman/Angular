import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data binding in @ngular - practicum';
  messages = [
    {
      id: 11214544,
      text: 'Message 11214544'
    },
    {
      id: 11214545,
      text: 'Message 11214545'
    },
    {
      id: 11214546,
      text: 'Message 11214546'
    },
    {
      id: 11214547,
      text: 'Message 11214547'
    }
  ];
  logMessageId(el) {
    // const messageId = el.getAttribute('data-message-id') || el.dataset.messageId || el.id;
    console.log('MessageID = ', el);
  }
}
