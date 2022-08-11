import React from 'react'
import './App.css';
import img1 from "./Images/2.jpg"
import musica from "./Music/1.mp3"
export default function RakhiSite() {

    let welcome = window.prompt("Enter Your Name For Wishes")
    let spEck = new SpeechSynthesisUtterance(`আমার প্রিয় ${welcome} স্বাগত জানাই এবং রাখি বন্ধনের শুভেচ্ছা ও শুভকামনা নেবেন `)
    spEck.lang = "bn"
    speechSynthesis.speak(spEck)

    let clickBtn = function () {
        let canvas = document.querySelector("canvas")
        let input = document.getElementById("mainInput")
        let textValue = input.value
        let ctx = canvas.getContext("2d")
        let x = canvas.width / 2.4
        let y = canvas.height / 1.6
        ctx.fillStyle = "black";
        ctx.font = "25px Fantasty";
        let img = new Image()
        img.onload = () => {
            img.width = img.width / 2;
            img.height = img.height / 4;
            ctx.drawImage(img, 0, 0, img.width, img.height)
            ctx.fillText(textValue, x, y)
        }
        img.src = img1
        playMusic()
    }
    let playMusic = function () {
        let mp3 = new Audio(musica)
        mp3.play()
    }

    let announce = function () {
        let text = "আর একবার তোমার বন্ধু অরিন্দম। এই ওয়েবসাইটে আপনার টেক্সট ইনপুট করুন এবং সেরা রাখি ইমেজ সহ ইমেজে আপনার নাম পান"
        let getTalk = new SpeechSynthesisUtterance(text)
        getTalk.lang = "bn"
        getTalk.volume = 1
        speechSynthesis.speak(getTalk)
    }

    return (
        <>
            <div id="mainBody">
                <h1>রাখি বন্ধনের শুভেচ্ছা ও শুভকামনা জানাই সবাইকে</h1>
                <div className="btn1">
                    <button id='announce' onClick={announce}>দয়া করে এটা শুনুন</button>
                </div>
                <div className="image1">
                    <div className="nameText">
                        <h1>আপনার নাম প্রবেশ করুন</h1>
                        <input type="text" id='mainInput' placeholder='আপনার নাম প্রবেশ লিখুন' />
                    </div>
                    <div className="canvasArea">
                        <canvas></canvas>
                        <button id='btn2' onClick={clickBtn}>Generate Your Text On Image</button>
                    </div>
                </div>
            </div>
        </>
    )
}
