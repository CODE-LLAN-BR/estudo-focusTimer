import state from "./state.js"
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document
    .documentElement.classList.toggle('running')

    timer.countdown()

    sounds.start.play()

}

export function reset(){
    state.isRunning = false
    document
    .documentElement.classList.remove('running')

    timer.updateDisplay()

    sounds.stop.play()
    
}

export function set(){
    el.minutes.setAttribute('contenteditable',true)
    el.minutes.focus()
}

export function toggleMusic(){
    state.isMute = document
    .documentElement.classList.toggle('music-on')

    if(state.isMute){
        sounds.bgAudio.play()
        return
    }
    
    sounds.bgAudio.pause()
}