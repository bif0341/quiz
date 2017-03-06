//*********SCORE

let score = 0;

//***********CLASS

class Quiz {
    question: string;
    choice: string;
    answer: string;
   }

class Question extends Quiz {
    question1() {
        this.question ="What is the nomenclature for a 60mm Mortar?";
        this.choice = "a.) m224  b.) m223 c.) m203, d.) m16a2";                                             
        this.answer = "a";

        
        let userAnswer = prompt(this.question +  this.choice);


        if (userAnswer == this.answer) {
            let newScore = score + 20;
            score = newScore;
            alert("You have a " + newScore + " out of a 100! " + "Good Job!");
        }
        else{
            alert('Try Again.');
        }
    
    }

    question2() {
        this.question = "What does HEDP stand for?";
        this.choice = "a.) High End Dual Purpose b.) Highly Extreme Dual Purpose c.) Hot Explosion Deadly Poisonous d.) High Explosive Dual Purpose";
        this.answer = "d";

       let userAnswer = prompt(this.question + this.choice);

       if (userAnswer == this.answer) {
           let newScore = score + 20;
           score = newScore;
           alert("You have a " + newScore + " out of a 100! " + "Good Job!");
        }
        else {
            alert('Try Again.')
        }
    }

    question3() {
        this.question = "What is a whiz wheel?";
        this.choice = "a.) A wheel made of cheese whiz b.) a ballistics calculator for elevation and windage corrections c.) a wheel that makes a whiz sound if spun fast enough d.) none of the above";
        this.answer = "b";

        let userAnswer = prompt(this.question + this.choice);

        if (userAnswer == this.answer) {
            let newScore = score + 20;
            score = newScore;
            alert("You have a " + newScore + " out of a 100! " + "Good Job!");
        }
        else {
            alert('Try Again.');
        }   
    }

    question4() {
        this.question = "When was the Marine Corps born?";
        this.choice = "a.)July 4, 1772 b.)April 20, 1777 c.)January 16,1987 d.)November 10,1775";
        this.answer = "d";

        let userAnswer = prompt(this.question + this.choice);

        if (userAnswer == this.answer) {
            let newScore = score + 20;
            score = newScore;
            alert("You have a " + newScore + " out of a 100! " + "Good Job!");
        }
        else {
            alert("Try Again.");
        }
    }

    question5() {
        this.question = "Who holds the rank Commander in Cheif?";
        this.choice = "a.) Marine Corps General b.) the President of the United States c.) Fleet Admiral d.) Chief Warrant Officer 5";
        this.answer = "b";

       let userAnswer = prompt(this.question + this.choice);

        if (userAnswer == this.answer) {
            let newScore = score + 20;
            score = newScore;
            alert("You have a " + newScore + " out of a 100! " + "Good Job!");
        }
        else {
            alert("Try Again.");
        }
    }
}

//************ANSWERS
let answers = new Question;
answers.question1();

answers.question2();

answers.question3();

answers.question4();

answers.question5();




