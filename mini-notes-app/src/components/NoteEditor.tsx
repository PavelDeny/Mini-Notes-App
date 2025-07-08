// Компонент NoteEditor отвечает за создание новой заметки.
// Здесь используется локальное состояние для хранения введённых пользователем данных.
// После отправки формы данные передаются в zustand store, а поля очищаются.
import { useState } from 'react'
import { useNoteStore } from '../store/noteStore'

const NoteEditor = () => {
  // Локальное состояние для полей формы
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [pinned, setPinned] = useState(false)

  // Функция для добавления заметки из zustand store
  const addNote = useNoteStore((state) => state.addNote)

  // Обработка отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Не добавлять пустую заметку
    if (!title.trim() && !content.trim()) return

    // Добавляем заметку в store
    addNote({ title, content, pinned })

    // Очищаем поля формы
    setTitle('')
    setContent('')
    setPinned(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md mb-4 flex flex-col gap-2"
    >
      {/* Поле для заголовка заметки */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 rounded"
      />
      {/* Поле для текста заметки */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="border p-2 rounded h-24 resize-none"
      />
      {/* Чекбокс для закрепления заметки */}
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={pinned}
          onChange={(e) => setPinned(e.target.checked)}
        />
        Pinned
      </label>
      {/* Кнопка для добавления заметки */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Note
      </button>
    </form>
  )
}

export default NoteEditor
