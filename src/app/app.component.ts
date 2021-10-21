import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  style: any = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
  };
  title = 'orsh';

  @HostListener('document:keydown', ['$event'])
  keydownHandler(event: { key: string }) {
    if (event.key === 'ArrowUp') {
      this.moveUp();
    }

    if (event.key === 'ArrowDown') {
      this.moveDown();
    }

    if (event.key === 'ArrowLeft') {
      this.moveLeft();
    }

    if (event.key === 'ArrowRight') {
      this.moveRight();
    }
  }

  moveUp() {
    const current = this.getNum(this.style.top);
    const adujsted = current - 10;
    this.style.top = `${adujsted}px`;
  }
  moveDown() {
    const current = this.getNum(this.style.top);
    const adujsted = current + 10;
    this.style.top = `${adujsted}px`;
  }
  moveLeft() {
    const current = this.getNum(this.style.left);
    const adujsted = current - 10;
    this.style.left = `${adujsted}px`;
    this.style.transform = 'scaleX(-1)';
  }

  moveRight() {
    const current = this.getNum(this.style.left);
    const adujsted = current + 10;
    this.style.left = `${adujsted}px`;
    this.style.transform = 'scaleX(1)';
  }

  private getNum(px: string) {
    return parseInt(px);
  }
}
