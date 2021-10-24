const quizText2 = document.getElementById("quiz-text2")
const feedback2 = document.getElementById("feedback2")
const choice4 = document.getElementById("choice-4")
const choice5 = document.getElementById("choice-5")
const choice6 = document.getElementById("choice-6")

const button1 = document.getElementById("nba-button")
const alertMessage1 = function() {
  alert("バスケが好きでNBAもよく観たりしてます！今の推しのチームはブルックリンネッツです！")
}
button1.onclick = alertMessage1

const button2 = document.getElementById("eiga-button")
const alertMessage2 = function() {
  alert("よく洋画を観てます！MARVEL作品はたぶん全部観てます！好きな俳優はジェイソンステイサム、クリスヘムズワース、シルベスター・スタローンとわかる人にはわかる結構渋めです笑")
}
button2.onclick = alertMessage2

const button3 = document.getElementById("game-button")
const alertMessage3 = function() {
  alert("最近はAPEXしかしてないです笑")
}
button3.onclick = alertMessage3

const button4 = document.getElementById("kintore-button")
const alertMessage4 = function() {
  alert("最近は週４か５くらいでジムに通って頑張ってます！")
}
button4.onclick = alertMessage4

const button5 = document.getElementById("manga-button")
const alertMessage5 = function() {
  alert("漫画は結構読んでます！ヒロアカが特に今は好きです！")
}
button5.onclick = alertMessage5

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