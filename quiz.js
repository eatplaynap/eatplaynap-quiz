#!/usr/bin/env node

const { Quiz } = require('enquirer')
const data = require('./datastorage.js')

const prompt = new Quiz(data[30]);

prompt
    .run()
    .then(answer => {
        if (answer.correct) {
            console.log('よっ！正解！');
        } else {
            console.log(`残念！正解は ${answer.correctAnswer}です！`);
        }
        console.log(`eatplaynapから一言: ${prompt.comment}`)
    })
    .catch(console.error);
