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
    firstCheck = true;
    successTest = false;

    quizList = [
        q01
    ];

    selectQuiz(list) {
        this.selectedQuiz = list;
        this.firstCheck = true;
        this.successTest = false;
    }

    checkResult() {
        this.firstCheck = false;
        this.result = 0;
        
        let arr = this.selectedQuiz.default.list;
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
