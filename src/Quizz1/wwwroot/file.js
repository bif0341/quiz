//*********SCORE
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var score = 0;
//***********CLASS
var Quiz = (function () {
    function Quiz() {
    }
    return Quiz;
}());
var Question = (function (_super) {
    __extends(Question, _super);
    function Question() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Question.prototype.question1 = function () {
        this.question = "What is the nomenclature for a 60mm Mortar?";
        this.choice = "a.) m224  b.) m223 c.) m203, d.) m16a2";
        this.answer = "a";
        var userAnswer = prompt(this.question + this.choice);
        if (userAnswer == this.answer) {
            var newScore = score + 20;
            score = newScore;
            alert("You have a " + newScore + " out of a 100! " + "Good Job!");
        }
        else {
            alert('Try Again.');
        }
    };
    Question.prototype.question2 = function () {
        this.question = "What does HEDP stand for?";
        this.choice = "a.) High End Dual Purpose b.) Highly Extreme Dual Purpose c.) Hot Explosion Deadly Poisonous d.) High Explosive Dual Purpose";
        this.answer = "d";
        var userAnswer = prompt(this.question + this.choice);
        if (userAnswer == this.answer) {
            var newScore = score + 20;
            score = newScore;
            alert("You have a " + newScore + " out of a 100! " + "Good Job!");
        }
        else {
            alert('Try Again.');
        }
    };
    Question.prototype.question3 = function () {
        this.question = "What is a whiz wheel?";
        this.choice = "a.) A wheel made of cheese whiz b.) a ballistics calculator for elevation and windage corrections c.) a wheel that makes a whiz sound if spun fast enough d.) none of the above";
        this.answer = "b";
        var userAnswer = prompt(this.question + this.choice);
        if (userAnswer == this.answer) {
            var newScore = score + 20;
            score = newScore;
            alert("You have a " + newScore + " out of a 100! " + "Good Job!");
        }
        else {
            alert('Try Again.');
        }
    };
    Question.prototype.question4 = function () {
        this.question = "When was the Marine Corps born?";
        this.choice = "a.)July 4, 1772 b.)April 20, 1777 c.)January 16,1987 d.)November 10,1775";
        this.answer = "d";
        var userAnswer = prompt(this.question + this.choice);
        if (userAnswer == this.answer) {
            var newScore = score + 20;
            score = newScore;
            alert("You have a " + newScore + " out of a 100! " + "Good Job!");
        }
        else {
            alert("Try Again.");
        }
    };
    Question.prototype.question5 = function () {
        this.question = "Who holds the rank Commander in Cheif?";
        this.choice = "a.) Marine Corps General b.) the President of the United States c.) Fleet Admiral d.) Chief Warrant Officer 5";
        this.answer = "b";
        var userAnswer = prompt(this.question + this.choice);
        if (userAnswer == this.answer) {
            var newScore = score + 20;
            score = newScore;
            alert("You have a " + newScore + " out of a 100! " + "Good Job!");
        }
        else {
            alert("Try Again.");
        }
    };
    return Question;
}(Quiz));
//************ANSWERS
var answers = new Question;
answers.question1();
answers.question2();
answers.question3();
answers.question4();
answers.question5();
//# sourceMappingURL=file.js.map