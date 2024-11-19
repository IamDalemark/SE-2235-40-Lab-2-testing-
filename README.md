## SE 2144 FINAL PROJECT

## Table of Contents

- [Install all dependencies](#install-all-dependencies)
- [Setup Prettier](#setup-prettier-for-code-formatting)
- [Setup local Postgres database](#set-up-local-postgres-database)
- [How to run the app](#how-to-run-the-app)
- [Adding and changing database schema](#adding-and-changing-database-schema)
- [Linting](#linting)

## Resources

- [dbmate Docs](https://github.com/amacneil/dbmate?tab=readme-ov-file#migration-files)

## How to initialize the app

## Install all dependencies

1. In the **root folder**, run `npm run install-all`

## Setup Prettier for code formatting

1. Install [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for vscode
2. Go to File > Preferences > Settings
3. Search for "Format" in the search bar
4. Select Prettier in the "Default Formatter" dropdown
5. Enable "Format on Save"

## Set up local Postgres database

### Add database connection link

Add a `.env` file in the **backend folder** with the following format without the square brackets:

```
DATABASE_URL= "postgres://postgres:[YOUR_POSTGRES_PASSWORD]@localhost:5432/notetube_dev?sslmode=disable"
```

### Using dbmate

- In the **root folder**, run `npm run migrate-up`

### Using pgAdmin

1. Open pgAdmin
2. Make a new database named "**notetube_dev**"
3. Open the **query tool** in the notetube_dev database
4. Paste and execute `backend/database.sql` contents except the CREATE DATABASE query

### Using terminal

1. Open terminal
2. Run `psql -U postgres`

   if you encounter this error: `psql: command not found`,
   follow this [tutorial](https://www.commandprompt.com/education/how-to-set-windows-path-for-postgres-tools/)

3. Input your password --> `Password for user postgres:`
4. Paste and run `backend/database.sql` contents into prompt

## How to run the app

- In the **root folder**, run `npm run app`

### to run separately:

- In the **root folder**, run `npm run backend`
- In the **root folder**, run `npm run frontend`

### or you can:

- Navigate to the **frontend folder** `cd frontend` then run `npm run dev`
- Navigate to the **backend directory** `cd backend` then run `npm run dev`

## Adding and changing database schema

### Adding schema

1. Navigate to the **backend folder** `cd backend`
2. Run `npx dbmate new [table_name]` to generate a new migration file in the db/migrations folder
3. Write your schema in the -- migrate:up section and any rollback logic like `DROP [table_name]` in the -- migrate:down section of the file.
4. Run `npx dbmate up` or `npx dbmate migrate` to migrate the schema to your local database

### Changing schema

- Apply and save your changes to any of the schema files under `db/migrations` using your IDE
- Navigate to the **backend folder** `cd backend` then run `npx dbmate down` or `npx dbmate rollback` to rollback the latest migration to its initial state
- Then run `npx dbmate up` or `npx dbmate migrate` to apply the updated schema to your local database

### Example

If this is the order of migrations:

- `users` table: 1st migration
- `decks` table: 2nd migration
- `cards` table: 3rd migration (latest)

### Modifying the `cards` Schema (Latest Migration):

1. Edit the cards schema file.
2. Run `npx dbmate down` **only once**
   This will roll back the cards migration only.

3. Run `npx dbmate up` to apply the updated schema to your local database

### Modifying the `users` Schema (1st Migration):

1. Edit the `decks` migration file.
2. Run `npx dbmate down` 3 times since it is the 1st migration.
   `npx dbmate down`
   `npx dbmate down`
   `npx dbmate down`
   This rolls back the `cards` migration first, then the `decks` migration, then the `users` migration.

3. Run `npx dbmate up` to apply the updated schema to your local database

## Linting

- Navigate to the **frontend folder** `cd frontend` then run `npm run lint`
- Navigate to the **backend folder** `cd backend` then run `npm run lint`
