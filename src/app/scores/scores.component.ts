import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scores',
  standalone: true,
  imports: [],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.css',
})
export class ScoresComponent implements OnInit {
  scores: { X: number; O: number };

  constructor(private gameService: GameService, private router: Router) {
    this.scores = { X: 0, O: 0 };
  }

  ngOnInit(): void {
    this.scores = this.gameService.getScores();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
