// noteStore.ts — zustand store для управления заметками
// Здесь хранятся все заметки, фильтр и функции для работы с ними
// Теперь добавлено сохранение заметок в localStorage, чтобы они не терялись при перезагрузке страницы

import { create } from 'zustand'
import type { Note } from '../types'

// Тип для фильтрации заметок
// 'all' — все заметки, 'pinned' — только закреплённые, 'unpinned' — только незакреплённые
// Можно расширять по необходимости

// Тип состояния стора
// notes — массив всех заметок
// filter — текущий фильтр
// addNote — функция для добавления заметки
// deleteNote — функция для удаления заметки
// togglePin — функция для закрепления/открепления заметки
// setFilter — функция для смены фильтра

type Filter = 'all' | 'pinned' | 'unpinned'

type NoteState = {
  notes: Note[]
  filter: Filter
  addNote: (note: Omit<Note, 'id' | 'createdAt'>) => void
  deleteNote: (id: string) => void
  togglePin: (id: string) => void
  setFilter: (filter: Filter) => void
}

// Функция для загрузки заметок из localStorage
function loadNotes(): Note[] {
  try {
    const data = localStorage.getItem('notes')
    if (data) return JSON.parse(data)
  } catch {
    // Если что-то пошло не так — возвращаем пустой массив
  }
  return []
}

// Создаём zustand store
export const useNoteStore = create<NoteState>((set) => {
  // Загружаем заметки при инициализации стора
  const initialNotes = loadNotes()

  // Подписка на изменения notes для сохранения в localStorage
  // useNoteStore.subscribe вызывается после инициализации стора
  setTimeout(() => {
    useNoteStore.subscribe((state) => {
      // Сохраняем заметки в localStorage при каждом изменении
      localStorage.setItem('notes', JSON.stringify(state.notes))
    })
  }, 0)

  return {
    notes: initialNotes, // начальный массив заметок
    filter: 'all', // фильтр по умолчанию
    // Добавление новой заметки
    addNote: (note) =>
      set((state) => ({
        notes: [
          {
            ...note,
            id: crypto.randomUUID(), // уникальный id
            createdAt: new Date().toISOString(), // дата создания
          },
          ...state.notes,
        ],
      })),
    // Удаление заметки по id
    deleteNote: (id) =>
      set((state) => ({
        notes: state.notes.filter((note) => note.id !== id),
      })),
    // Переключение закрепления заметки
    togglePin: (id) =>
      set((state) => ({
        notes: state.notes.map((note) =>
          note.id === id ? { ...note, pinned: !note.pinned } : note
        ),
      })),
    // Смена фильтра
    setFilter: (filter) => set({ filter }),
  }
})
