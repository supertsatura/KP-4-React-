// src/App.jsx
import './App.css';
import Greeting from './Greeting'; // компонент из Примера 1
import UserCard from './UserCard'; // компонент из Примера 2
import TaskList from './TaskList'; // наш новый компонент

function App() {
    return (
        <div className="App">
            {/* Компонент из предыдущего примера */}
            <Greeting />
            {/* Используем UserCard и передаём ему props */}
            <UserCard
                name="Давид Цатурян"
                role="Администратор"
                avatarUrl="src\assets\Пахан.jpg"
                isOnline={true}
            />
            {/* добавляем компонент списка задач */}
            <TaskList />
        </div>
    );
}
export default App;