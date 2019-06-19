import { Component } from '@angular/core';
import * as q01 from './tests/quiz01.json';
import * as q02 from './tests/quiz02.json';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.style.less']
})
export class BodyComponent {
    selectedQuiz;

    quizList = [
        q01
    ];

    selectQuiz(list) {
        this.selectedQuiz = list;
    }
}
