# Student Innovation Hub

A responsive student-only startup incubation website prototype built with React, TypeScript and Vite. It is designed for college students who want to explore entrepreneurship, validate ideas, join programs and connect with mentors.

## Features
- Responsive navigation and mobile menu
- Student-focused hero section and calls to action
- Incubation, bootcamp, innovation challenge and mentorship program cards
- Impact metrics (illustrative placeholders)
- Student startup showcase (fictional sample entries)
- Events section
- Incubation interest form with browser-side validation and demo success state
- Docker multi-stage build using Nginx
- Docker Compose, Nginx health endpoint and basic security headers

## Requirements
- Node.js 20.19+ or 22.12+
- npm 10+
- Docker Engine + Docker Compose plugin (for container deployment)

## Run locally
```bash
npm install
npm run dev
```
Open the Vite URL shown in the terminal, usually http://localhost:5173.

## Build for production
```bash
npm run build
npm run preview
```
The static production files are generated in `dist/`.

## Docker build and run
```bash
docker build -t student-innovation-hub:1.0 .
docker run --name student-innovation-hub -p 8080:80 -d student-innovation-hub:1.0
```
Open http://localhost:8080.

Check health and logs:
```bash
docker ps
docker inspect --format='{{.State.Health.Status}}' student-innovation-hub
docker logs -f student-innovation-hub
```
Stop and remove:
```bash
docker stop student-innovation-hub
docker rm student-innovation-hub
```

## Docker Compose
```bash
docker compose up --build -d
docker compose logs -f
docker compose down
```
Open http://localhost:8080.

## Project structure
```text
student-innovation-hub/
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── siteData.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── index.html
├── nginx.conf
├── package.json
├── tsconfig.json
└── vite.config.ts
```

The first version keeps the page sections in `src/App.tsx` so the prototype is easy to review and modify. Reusable sections can be split into separate component files as the requirements become final.

## Before presenting or publishing
1. Replace “Student Innovation Hub” with the approved organization name and logo.
2. Replace all sample statistics, startup names and event details with verified information.
3. Replace the stock hero image with an approved image owned or licensed by the organization.
4. The application form is currently frontend-only. It does not transmit or store data. Connect it to an approved secure backend before collecting real student information.
5. Add the organization's privacy notice, contact details, domain and HTTPS before production.

## Notes
This is a first-version frontend prototype for senior review, not a production-ready application platform. No backend, authentication, database, admin panel or email notifications are included because those requirements have not yet been confirmed.
