let deck = "abcdefghiabcdefghi"
var boo = new Audio("./boo.mp3")
var win = new Audio("./Applause.mp3")
var flips = [boo, win]
var resetButton
let counter; //to stop the interval
let sec=0
let turn=0
let pairs=0
let timerbonus=0
let turnbonus=0
let timerRunning=false
var startTime = new Date()
var result = timerbonus + turnbonus
var outcome =""
