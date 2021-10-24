const quizText1 = document.getElementById("quiz-text1")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback1 = document.getElementById("feedback1")


const quiz1 = {
    text1: "僕の名前の裕大の正しいフリガナはどれでしょう？",
    choices1: [
      {
        text: "ユウダイ",
        feedback:
          "✖！生まれて100回くらい言われたけど違うんですね～",
      },
      {
        text: "ユウタ",
        feedback: "これも✖！ユウタって読みたくなっちゃうけど違うんです！",
      },
      {
        text: "ユウト",
        feedback: "正解◎！僕もいまだになんでユウトって読むかわかってないです笑",
      },
    ],
  }


  const reloadQuiz1 = function() {
    quizText1.textContent = "Q. " + quiz1.text1
    choice1.textContent = quiz1.choices1[0].text
    choice2.textContent = quiz1.choices1[1].text
    choice3.textContent = quiz1.choices1[2].text
  }

  
  const choose1 = function(choiceNumber) {
    feedback1.textContent = quiz1.choices1[choiceNumber].feedback1
  }


  choice1.onclick = function() {
    choose1(0)
  }
  choice2.onclick = function() {
    choose1(1)
  }
  choice3.onclick = function() {
    choose1(2)
  }
reloadQuiz1()

