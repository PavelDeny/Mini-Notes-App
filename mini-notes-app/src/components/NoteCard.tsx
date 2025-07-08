// Компонент NoteCard отвечает за отображение одной заметки.
// Здесь реализованы кнопки для закрепления и удаления заметки.
// Все действия происходят через zustand store.
import type { Note } from '../types'
import { useNoteStore } from '../store/noteStore'

type NoteCardProps = {
  note: Note
}

const NoteCard = ({ note }: NoteCardProps) => {
  // Получаем функции для удаления и закрепления заметки из zustand store
  const deleteNote = useNoteStore((state) => state.deleteNote)
  const togglePin = useNoteStore((state) => state.togglePin)

  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col gap-2">
      <div className="flex justify-between items-start">
        {/* Заголовок заметки */}
        <h2 className="text-lg font-semibold">{note.title || 'Untitled'}</h2>
        {/* Кнопка закрепления/открепления */}
        <button
          onClick={() => togglePin(note.id)}
          className={`text-sm ${
            note.pinned ? 'text-yellow-600' : 'text-gray-400'
          }`}
          title={note.pinned ? 'Unpin' : 'Pin'}
        >
          📌
        </button>
      </div>
      {/* Текст заметки */}
      <p className="text-sm text-gray-700 whitespace-pre-wrap">{note.content}</p>
      <div className="flex justify-between text-xs text-gray-400">
        {/* Дата создания заметки */}
        <span>{new Date(note.createdAt).toLocaleString()}</span>
        {/* Кнопка удаления заметки */}
        <button
          onClick={() => deleteNote(note.id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default NoteCard
