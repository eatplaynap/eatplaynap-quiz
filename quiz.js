#!/usr/bin/env node

const { Quiz } = require('enquirer')
const data = require('./datastorage.js')
// importとrequireを併用する方法が分からないので一旦保留
// const terminalLink = require('terminal-link')
// import terminalLink from 'terminal-link'
// const myTwitter = terminalLink('Twitter', 'https://twitter.com/eatplaynap329')

// 非同期が難しいので一旦保留
const selectLevel = async () => {
    const {Select} = require('enquirer')
    const prompt = new Select({
        name: 'name',
        message: '何問受ける？',
        choices: [ '5', '10', '15', '20', '30' ]
    })
    try {
        const answer = await prompt.run()
        const number = parseInt(answer)
        const shitsumon = rightAmountOfQuizes(number)
        execute(shitsumon)
    } catch {
        console.log('Error')
    }
}

const createQuiz = async (quizInfo) => {
    try {
        const prompt = new Quiz(quizInfo)
        const answer = await prompt.run()
        if (answer.correct) {
            console.log('よっ！正解！')
        } else {
            console.log(`残念! 正しくは...${answer.correctAnswer}です！`)
        }
        console.log(`eatplaynapから一言: ${prompt.comment}\n`)
    } catch {
        console.log('hogehoge')
    }
}

// 単にシャッフルする機能
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// プロンプトで選択した級数に応じた数のクイズを配列に入れる
const rightAmountOfQuizes = (quizesAmount) => {
    const shuffledArray = shuffle(data)
    const quizes = []
    for (let i = 0; i < quizesAmount; i++) {
        quizes.push(shuffledArray[i])
    }
    return quizes
}

// さっき作ったクイズの配列のcreateQuizを実行する
const execute = async (quizes) => {
    for (let j = 0; j < quizes.length; j++) {
       await createQuiz(quizes[j])
    }
}

selectLevel()

