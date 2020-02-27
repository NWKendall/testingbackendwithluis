# Workflow

- create repository > clone it
- add .gitignore
- add package.json
- update test script to use jest
- add "jest" configuration to package.json
- add "server" and "start" scripts to package.json

## Features

- list of cohorts
- add a cohort
- list cohort's students
- list of students
- add a student
- list of student's cohorts

| Feature                | Method | URL                       |
| :--------------------- | :----- | :------------------------ |
| List cohorts           | GET    | /api/cohorts              |
| Add a cohort           | POST   | /api/cohorts              |
| View Cohort's students | GET    | /api/cohorts/:id/students |
| List of students       | GET    | /api/students             |
| Add a student          | POST   | /api/students             |
| View Student's cohorts | GET    | /api/studets/:id/cohorts  |

## Cohorts

- id
- name
- start date

## Students

- id
- name

## Testing

- functions: invoke the function with optional arguments => check return
- endpoints: make a request with optional arguments => check the response
