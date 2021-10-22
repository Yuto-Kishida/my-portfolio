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

const quizText2 = document.getElementById("quiz-text2")
const feedback2 = document.getElementById("feedback2")
const choice4 = document.getElementById("choice-4")
const choice5 = document.getElementById("choice-5")
const choice6 = document.getElementById("choice-6")

const quiz2 = {
  text2: "左の写真を撮った場所はどこでしょう？",
    choices2: [
      {
        text: "石垣島",
        feedback:"正解◎！海しか映ってないのによくわかりましたね！めちゃくちゃきれいでした！",
      },
      {
        text: "フィリピン",
        feedback: "✖！行ったことありますけどこの写真はフィリピンではないです！フィリピンもめちゃくちゃ海きれいでした...",
      },
      {
        text: "バリ島",
        feedback: "✖！バリ島はまだ行ったことありません...人生で一度は行ってみたい、てか絶対行く！",
      },
    ],
  }

  const reloadQuiz2 = function() {
    quizText2.textContent = "Q. " + quiz2.text2
    choice4.textContent = quiz2.choices2[0].text
    choice5.textContent = quiz2.choices2[1].text
    choice6.textContent = quiz2.choices2[2].text
  }

  const choose2 = function(choiceNumber) {
    feedback2.textContent = quiz2.choices2[choiceNumber].feedback
  }

choice4.onclick = function(){
    choose2(0)
}
choice5.onclick = function(){
  choose2(1)
}
choice6.onclick = function(){
  choose2(2)
}
reloadQuiz2()