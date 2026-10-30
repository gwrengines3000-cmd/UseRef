// contexts/CharacterContext.jsx
import { createContext, useReducer } from 'react'

export const CharacterContext = createContext()

const initialState = {
    name: 'Aragorn',
    level: 1,
    experience: 0,
    hp: 100,
    maxHP: 100,
    mp: 50,
    maxMP: 50
}

const characterReducer = (state, action) => {
    switch(action.type) {
        case 'LEVEL_UP':
            return {
                ...state,
                level: state.level + 1,
                maxHP: state.maxHP + 10,
                maxMP: state.maxMP + 5,
                hp: state.hp + 10,
                mp: state.mp + 5
            }
        case 'TAKE_DAMAGE':
            return {
                ...state,
                hp: Math.max(0, state.hp - action.payload)
            }
        case 'HEAL':
            return {
                ...state,
                hp: Math.min(state.maxHP, state.hp + action.payload)
            }
        case 'GAIN_EXPERIENCE':
            return {
                ...state,
                experience: state.experience + action.payload
            }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

export const CharacterProvider = ({ children }) => {
    const [character, dispatch] = useReducer(characterReducer, initialState)

    return (
        <CharacterContext.Provider value={{ character, dispatch }}>
            {children}
        </CharacterContext.Provider>
    )
}
