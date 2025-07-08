// Компонент NoteList отвечает за отображение всех заметок и фильтрацию по закреплённым/незакреплённым.
// Здесь используется zustand store для получения списка заметок.
// Фильтрация реализована через локальное состояние filter.
import { useState } from 'react'
import { useNoteStore } from '../store/noteStore'
import NoteCard from './NoteCard'

const NoteList = () => {
  // Получаем все заметки из zustand store
  const notes = useNoteStore((state) => state.notes)
  // Локальное состояние для фильтра (all, pinned, unpinned)
  const [filter, setFilter] = useState<'all' | 'pinned' | 'unpinned'>('all')

  // Фильтруем заметки в зависимости от выбранного фильтра
  const filteredNotes = notes.filter((note) => {
    if (filter === 'all') return true
    if (filter === 'pinned') return note.pinned
    if (filter === 'unpinned') return !note.pinned
  })

  return (
    <div className="flex flex-col gap-4">
      {/* Кнопки для выбора фильтра */}
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded text-sm ${
            filter === 'all'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('pinned')}
          className={`px-3 py-1 rounded text-sm ${
            filter === 'pinned'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          📌 Pinned
        </button>
        <button
          onClick={() => setFilter('unpinned')}
          className={`px-3 py-1 rounded text-sm ${
            filter === 'unpinned'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Unpinned
        </button>
      </div>

      {/* Список заметок по выбранному фильтру */}
      {filteredNotes.length === 0 ? (
        <p className="text-sm text-gray-500">No notes found for selected filter.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNotes.map((note) => (
            // Для каждой заметки отображаем отдельную карточку
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
    </div>
  )
}

export default NoteList
