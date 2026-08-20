# Anjir — Full-stack product engineering

Anjir — bu jamoaviy/portfolio veb-sayt bo'lib, Angular 22, Tailwind CSS 4 asosida qurilgan. Sayt loyihalar, jamoa a'zolari, kompaniya haqida ma'lumot va aloqa bo'limlarini o'z ichiga oladi.

## Texnologiyalar

- [Angular 22](https://angular.dev/) — interfeys komponentlari (standalone, signal-based)
- [Tailwind CSS 4](https://tailwindcss.com/) — stillar
- TypeScript

## Boshlash

```bash
# Qaramlarni o'rnatish
npm install

# Ishlab chiqish rejimi
npm run start

# Ishlab chiqarish uchun build
npm run build
```

`npm run start` ishga tushgandan so'ng sayt odatda `http://localhost:4200` manzilida ochiladi.

## Loyiha tuzilishi

```
src/
├── app/
│   ├── components/     # Umumiy UI komponentlar
│   ├── data/           # Sayt, loyiha va jamoa ma'lumotlari
│   ├── directives/     # Custom direktivalar
│   ├── services/       # Temalar va navigatsiya servislari
│   ├── views/          # Sahifa ko'rinishlari
│   ├── app.ts          # Asosiy komponent
│   └── main.ts         # Kirish nuqtasi
```

## Aloqa

Ijtimoiy tarmoqlar va aloqa ma'lumotlarini `src/app/data/site.ts` faylida yangilashingiz mumkin.