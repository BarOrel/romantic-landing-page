import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'romantic-landing-page';
showConf:boolean = true;
  mediaList = [
    {
      type: 'photo',
      url: 'assets/images/photo1.jpg',
      message: 'The day we first met at the cafe.'
    },
    {
      type: 'photo',
      url: 'assets/images/photo2.jpg',
      message: 'A romantic getaway in the mountains.'
    },
    {
      type: 'video',
      url: 'assets/videos/video1.mp4',
      message: 'Our engagement! I said YES!'
    },
    {
      type: 'photo',
      url: 'assets/images/photo3.jpg',
      message: 'Our first vacation together at the beach.'
    }
    // Add more photo/video entries as needed
  ];

  todayDate: Date = new Date();
  currentDate!: string;

  constructor() {}

  ngOnInit(): void {

    setInterval(() => {
      if(this.showConf){
        this.launchConfetti();
      }
    }, 1000);
  }

  launchConfetti() {
    confetti({
      particleCount: 220,
      spread: 90,
      origin: { y: 0.6 }
    });
  }

  setCurrentDate(): void {
    const today = new Date();
    this.currentDate = today.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
