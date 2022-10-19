import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styleUrls: ['./toto.component.css'],
})
export class TotoComponent implements OnInit {
  @Input()
  name!: string;

  @Output()
  totoChange = new EventEmitter<number>();

  n: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
