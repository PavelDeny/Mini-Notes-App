// Главный компонент приложения. Здесь собираются все основные части: редактор заметок и список заметок.
// Используются TailwindCSS классы для стилизации.
import NoteEditor from './components/NoteEditor'
import NoteList from './components/NoteList'

function App() {
   return ( // Основная разметка приложения

      <main className="min-h-screen bg-gray-50 text-gray-800 p-4"> <div className="max-w-4xl mx-auto space-y-6"> {
         /* Шапка приложения */
      }

      <header> <h1 className="text-3xl font-bold text-center"> 📝 Todo App with Filters </h1> <p className="text-center text-gray-600 mt-1"> Built with React + Zustand + TailwindCSS </p> </header> {
         /* Компонент для создания новой заметки */
      }

      <NoteEditor /> {
         /* Компонент для отображения и фильтрации заметок */
      }

      <NoteList /> </div> </main>)
}

export default App