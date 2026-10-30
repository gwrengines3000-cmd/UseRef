import { useContext } from 'react'
import { CharacterContext } from '../contexts/CharacterContext'

const Character = () => {
    const { character, dispatch } = useContext(CharacterContext)

    return (
        <div>
            <h2>{character.name}</h2>
            <p>Level: {character.level}</p>
            <p>Experience: {character.experience}</p>
            <p>HP: {character.hp}/{character.maxHP}</p>
            <p>MP: {character.mp}/{character.maxMP}</p>

            <button onClick={() => dispatch({ type: 'LEVEL_UP' })}>Level Up</button>
            <button onClick={() => dispatch({ type: 'TAKE_DAMAGE', payload: 10 })}>Take Damage</button>
            <button onClick={() => dispatch({ type: 'HEAL', payload: 15 })}>Heal</button>
            <button onClick={() => dispatch({ type: 'GAIN_EXPERIENCE', payload: 50 })}>Gain XP</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    )
}

export default Character
