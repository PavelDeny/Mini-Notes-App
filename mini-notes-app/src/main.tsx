// Точка входа в приложение. Здесь происходит подключение React и рендеринг главного компонента App.
// StrictMode помогает выявлять потенциальные проблемы в приложении на этапе разработки.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Импорт глобальных стилей (Tailwind и кастомные стили)
import './index.css'
// Импорт главного компонента приложения
import App from './App.tsx'

// Находим элемент с id 'root' в index.html и рендерим в него всё приложение
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
