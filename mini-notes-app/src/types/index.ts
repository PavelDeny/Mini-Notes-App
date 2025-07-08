// Тип Note описывает структуру одной заметки в приложении
// id — уникальный идентификатор (строка)
// title — заголовок заметки
// content — текст заметки
// pinned — закреплена ли заметка (true/false)
// createdAt — дата и время создания заметки (строка в формате ISO)
export type Note = {
   id: string
   title: string
   content: string
   pinned: boolean
   createdAt: string
}
 