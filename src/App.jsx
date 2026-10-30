import Character from './components/Character'
import { CharacterProvider } from './contexts/CharacterContext'
import InventoryManager from './components/InventoryManager'

const App = () => (
    <CharacterProvider>
        <Character />
        <InventoryManager />  
    </CharacterProvider>
)

export default App