#!/usr/bin/env node

const { Select } = require('enquirer')
const { Quiz } = require('enquirer')
const data = require('./datastorage.js')
const chalk = require('chalk')

const levels = [{ name: '5級', amount: '5' },
  { name: '4級', amount: '10' },
  { name: '3級', amount: '15' },
  { name: '2級', amount: '20' },
  { name: '1級', amount: '30' }]

class MyQuiz {
  constructor (score) {
    this.score_ = score
  }

  async start () {
    console.log('eatplaynap検定を始めます')
    const prompt = new Select({
      name: 'level',
      message: '何級に挑戦する？',
      choices: levels,
      result () {
        return this.focused.amount
      }
    })
    const answer = await prompt.run()
    const number = parseInt(answer)
    const quizzes = this.rightAmountOfQuizzes(number)
    await this.ask(quizzes)
    await this.calcScore(quizzes)
  }

  async startQuiz (quizInfo, remainingAmountOfQuiz) {
    console.log(`あと${remainingAmountOfQuiz}問です`)
    const prompt = new Quiz(quizInfo)
    const answer = await prompt.run()
    if (answer.correct) {
      console.log(chalk.bold.green('よっ！正解！'))
      this.score_ += 1
    } else {
      console.log(chalk.bold.red(`残念! 正しくは...${answer.correctAnswer}です！`))
    }
    console.log(chalk.bold.blue(`\neatplaynapから一言: ${prompt.comment}\n`))
  }

  // 単にシャッフルする機能
  shuffle ([...array]) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  // プロンプトで選択した級数に応じた数のクイズを配列に入れる
  rightAmountOfQuizzes (quizesAmount) {
    const shuffledArray = this.shuffle(data)
    const quizes = []
    for (let i = 0; i < quizesAmount; i++) {
      quizes.push(shuffledArray[i])
    }
    return quizes
  }

  // さっき作ったクイズを実行する
  async ask (quizzes) {
    const quizzesAmount = quizzes.length
    for (let j = 0; j < quizzesAmount; j++) {
      await this.startQuiz(quizzes[j], quizzesAmount - j)
    }
  }

  calcScore (quizzes) {
    const correctAnswerRate = this.score_ / quizzes.length
    if (correctAnswerRate >= 0.7) {
      console.log('合格です！')
    } else {
      console.log('不合格です！eatplaynap')
    }
  }
}

const quiz = new MyQuiz(0)
quiz.start()
