import {Component} from '@angular/core';
import * as q01 from './tests/quiz01.json';
import * as q02 from './tests/quiz02.json';
import * as q03 from './tests/quiz03.json';
import * as q04 from './tests/quiz04.json';
import * as q05 from './tests/quiz05.json';
import * as q06 from './tests/quiz06.json';
import * as q07 from './tests/quiz07.json';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.style.less']
})
export class BodyComponent {
    selectedQuiz;
    result;
    pointResult;
    firstCheck = true;
    successTest = false;

    quizList01 = [
        q01
    ];

    quizList02 = [
        q02,
        q03,
        q04,
        q05,
        q06,
        q07
    ];

    complete = {
        0: {
            points: 0,
            ready: false
        },
        1: {
            points: 0,
            ready: false
        },
        2: {
            points: 0,
            ready: false
        },
        3: {
            points: 0,
            ready: false
        },
        4: {
            points: 0,
            ready: false
        },
        5: {
            points: 0,
            ready: false
        },
        100: {
            points: 0,
            full: 0,
            ready: false
        }
    };

    currentTest;
    compeleAllTest = false;
    pointsGraph = 0;

    checkComplete() {
        this.pointsGraph = 0;

        for(let key in this.complete) {
            console.log('---');
            console.log(key, this.pointsGraph, this.complete[key]);
            if (this.complete[key].ready === false) {
                this.compeleAllTest = false;
                break;
            }

            if (+key !== 100) {
                this.pointsGraph += this.complete[key].points;
            }

            this.compeleAllTest = true;
        }
    }

    selectQuiz(list, index) {
        this.selectedQuiz = list;
        this.firstCheck = true;
        this.successTest = false;
        this.currentTest = index;
    }

    checkResult() {
        let arr = this.selectedQuiz.default.list;

        if(!this.selectedQuiz.default.chartMode) {
            this.firstCheck = false;
            this.result = 0;

            for (let counter = 0; counter < arr.length; counter++) {
                if(arr[counter].selected === null) {
                    this.scrollToEmptyQuestion('id' + (counter + 1));
                    break;
                }

                if(arr[counter].selected === arr[counter].rightAnswer) {
                    this.result += 1;
                }

                if((counter + 1) === arr.length) {
                    this.successTest = true;
                    this.complete[this.currentTest].ready = true;
                    this.complete[this.currentTest].points = this.result;
                    this.complete[this.currentTest].full = arr.length;
                    this.checkComplete();
                }
            }
        } else {
            this.firstCheck = false;
            this.pointResult = 0;

            for (let counter = 0; counter < arr.length; counter++) {
                if(arr[counter].selected === null) {
                    this.scrollToEmptyQuestion('id' + (counter + 1));
                    break;
                }

                this.pointResult += arr[counter].answers[arr[counter].selected].point;

                if((counter + 1) === arr.length) {
                    this.successTest = true;
                    this.complete[this.currentTest].ready = true;
                    this.complete[this.currentTest].points = this.pointResult;
                    this.checkComplete();
                }
            }
        }

    }

    scrollToEmptyQuestion(id) {
        let el = document.getElementById(id);
        el.scrollIntoView({block: "center", behavior: "smooth"});
    }

    checkQuestion(item) {
        return item.selected === item.rightAnswer ? true : false;
    }

    highlightError(item, index) {
        return item.rightAnswer === (index + 1) ? true : false;
    }
}
