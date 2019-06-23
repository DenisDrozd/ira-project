import {Component} from '@angular/core';
import * as q01 from './tests/quiz01.json';
import * as q02 from './tests/quiz02.json';

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

    quizList = [
        q01,
        q02
    ];

    selectQuiz(list) {
        this.selectedQuiz = list;
        this.firstCheck = true;
        this.successTest = false;
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
