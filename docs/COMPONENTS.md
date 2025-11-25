# Symplexy - Компоненти Header та Hero

## Створені компоненти

### 1. Header Components

#### `/components/Header.tsx`
Головний компонент хедера з Material 3 принципами:
- ✅ Sticky позиціювання (fixed з плавною анімацією при скролі)
- ✅ Rounded дизайн (border-radius: 100px)
- ✅ Тінь з blur ефектом
- ✅ Адаптивний дизайн для всіх пристроїв
- ✅ Центроване позиціювання на сторінці

#### `/components/ui/Logo.tsx`
Компонент логотипу:
- Використовує Next.js Image для оптимізації
- Посилання на головну сторінку
- Правильні розміри (153x40px)

#### `/components/ui/NavigationMenu.tsx`
Навігаційне меню (десктоп):
- Плавний scroll до секцій
- Hover та active стани
- Material 3 ripple ефекти
- Округлі кнопки (border-radius: 50px)

#### `/components/ui/LanguageSwitch.tsx`
Перемикач мови UA/EN:
- Segmented button design (Material 3)
- Active стан з кольоровим фоном
- Плавні переходи між станами
- Колір: #88a2c0 (gray-blue-500)

#### `/components/ui/CTAButton.tsx`
Переиспользуемый компонент кнопки:
- Два варіанти: primary та secondary
- Округлі форми (border-radius: 100px)
- Hover та active стани
- Правильні кольори згідно дизайну

#### `/components/ui/MobileMenu.tsx`
Бургер-меню для мобільних пристроїв:
- Анімований бургер іконка (3 лінії)
- Slide-in панель з права
- Overlay з backdrop
- Блокування скролу при відкритті
- Smooth анімації

### 2. Hero Section

#### `/components/HeroSection.tsx`
Hero секція з усіма елементами дизайну:
- ✅ Фонові хмари (2 шари)
- ✅ Декоративні бульбашки
- ✅ Головне зображення дівчини з AI
- ✅ Gradient wave знизу
- ✅ Headline з виділенням "ШІ-рішень" синім кольором
- ✅ Підзаголовок
- ✅ Дві CTA кнопки
- ✅ Адаптивний дизайн
- ✅ Правильні відступи та розміри

#### `/components/BrandsSection.tsx`
Секція з логотипами брендів:
- Горизонтальний ряд логотипів
- Grayscale ефект з hover
- Адаптивні відступи
- Fade-in анімації (готово до додавання)

## Стилі

### Кольори (згідно з дизайном Figma)
```css
--color-white: #ffffff
--color-dark-900: #1c1d27
--color-blue-900: #223a6b
--color-blue-700: #2d4b8c
--color-blue-500: #5289ff
--color-gray-blue-500: #88a2c0
--color-gray-blue-100: #dae2eb
--color-gray-blue-900: #303a45
```

### Шрифт
- **Rubik** (Google Fonts)
- Weights: 300, 400, 500, 600, 700
- Підтримка Latin + Cyrillic

### Розміри
- Header: 72px висота
- Hero: 914px мінімальна висота (desktop)
- Border radius: 100px (header), 50px (menu items)
- Відступи: згідно з grid системою Figma

## Material 3 Принципи

1. **Elevation & Shadows**
   - Header має shadow з blur
   - Збільшення shadow при скролі

2. **State Layers**
   - Hover states з легким фоном
   - Active states з темнішим фоном
   - Ripple ефекти на кнопках

3. **Motion**
   - Smooth transitions (200-300ms)
   - Ease-in-out timing function
   - Transform анімації

4. **Typography**
   - Rubik шрифт відповідає Material Design
   - Правильна hierarchy (72px → 18px)
   - Line heights для читабельності

## Адаптивність

### Desktop (1920px+)
- Повний header з усіма елементами
- Hero зображення праворуч
- CTA кнопки в ряд

### Tablet (768px - 1024px)
- Компактний header
- Зменшені зображення
- Збережена функціональність

### Mobile (< 768px)
- Бургер-меню
- Вертикальне розташування кнопок
- Оптимізовані зображення
- Зменшені відступи

## Наступні кроки

Для продовження роботи потрібно створити:
1. Секцію з картками популярних нейромереж
2. Блок статистики інтеграцій
3. Секцію "Для кого"
4. FAQ accordion
5. Блог картки
6. Footer

## Запуск проєкту

\`\`\`bash
npm run dev
\`\`\`

Проєкт буде доступний на http://localhost:3000
