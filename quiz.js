#!/usr/bin/env node

const { Select } = require('enquirer')
const data = require('./datastorage.js')
// importとrequireを併用する方法が分からないので一旦保留
// const terminalLink = require('terminal-link')
// import terminalLink from 'terminal-link'
// const myTwitter = terminalLink('Twitter', 'https://twitter.com/eatplaynap329')

const levels = [{name: '5級', amount: '5'},
    {name: '4級', amount: '10'},
    {name: '3級', amount: '15'},
    {name: '2級', amount: '20'},
    {name: '1級', amount: '30'}]
let score = 0

class MyQuiz {
    async start() {
        const prompt = new Select({
            name: 'level',
            message: '何級に挑戦する？',
            choices: levels,
            result() {
                return this.focused.amount
            }
        })
        try {
            const answer = await prompt.run()
            const number = parseInt(answer)
            const shitsumon = this.rightAmountOfQuizes(number)
            this.execute(shitsumon, score)
        } catch {
            console.log('Error')
        }
    }

    async createQuiz(quizInfo){
        try {
            const prompt = new Select(quizInfo)
            const answer = await prompt.run()
            if (answer.correct) {
                console.log('よっ！正解！')
                score += 10
            } else {
                console.log(`残念! 正しくは...${answer.correctAnswer}です！`)
            }
            console.log(`eatplaynapから一言: ${prompt.comment}\n`)
        } catch {
            console.log('Error')
        }
    }

// 単にシャッフルする機能
    shuffle([...array]) {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

// プロンプトで選択した級数に応じた数のクイズを配列に入れる
    rightAmountOfQuizes(quizesAmount){
        const shuffledArray = this.shuffle(data)
        const quizes = []
        for (let i = 0; i < quizesAmount; i++) {
            quizes.push(shuffledArray[i])
        }
        return quizes
    }

// さっき作ったクイズの配列のcreateQuizを実行する
    async execute(quizes, hoge){
        for (let j = 0; j < quizes.length; j++) {
            await this.createQuiz(quizes[j])
            hoge += hoge
        }
        await console.log(`You won ${hoge}!`)
    }
}

const quiz = new MyQuiz
quiz.start()
