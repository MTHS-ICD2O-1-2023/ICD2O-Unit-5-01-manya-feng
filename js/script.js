// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Apr 2024
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber)

/**
 * This function checks if the user has selected the random number from above
 */

function myButtonClicked() {
  // input
  const numberGuessed = parseInt(document.getElementById("guessed-number").value)

  // process
  if (numberGuessed == randomNumber) {
    //output
    document.getElementById("answer").innerHTML =
      "You have guessed the correct number!"
  }

  //block of code to be execued if condition is ture

  if (numberGuessed != randomNumber) {
    //output
    document.getElementById("answer").innerHTML =
      "You have guessed the wrong number !" +
      'The correct answer is' + randomNumber
  }
}