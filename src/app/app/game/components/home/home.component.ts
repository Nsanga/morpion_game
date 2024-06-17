import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  board: string[][];
  currentPlayer: string;

  constructor(
    private gameService: GameService,
    private router: Router) {
    // Initialize properties
    this.board = [];
    this.currentPlayer = '';
  }

  ngOnInit(): void {
    this.board = this.gameService.getBoard();
    this.currentPlayer = this.gameService.getCurrentPlayer();
  }

  makeMove(row: number, col: number) {
    if (this.gameService.makeMove(row, col)) {
      const winner = this.gameService.checkWinner();
      if (winner) {
        alert(`${winner} wins!`);
        this.gameService.updateScores(winner);
        this.gameService.resetBoard();
        this.board = this.gameService.getBoard();
      } else {
        this.gameService.switchPlayer();
        this.currentPlayer = this.gameService.getCurrentPlayer();
      }
    }
  }

  viewScores() {
    this.router.navigate(['/scores']);
  }
}
