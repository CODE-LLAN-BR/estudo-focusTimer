import { controls } from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'
import state from './state.js'

export function registerConstrols(){
    controls.addEventListener('click',(event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] !== "function"){
            
            return
        }

        actions[action]()
    })
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    } )


    // estratégia para aceitar apenas números e não outros caractéres
    el.minutes.onkeypress = () => /\d/.test(event.key)
    
    el.minutes.addEventListener('blur' ,(event) =>{

        //captura de texto
        let time = event.currentTarget.textContent

        //ternário simples
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}