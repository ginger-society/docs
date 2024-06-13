
# Usage

## Commands

`db-compose` supports the following commands:

- **Init**: Initialize a new database project.
- **Up**: Bring up the database similar to `docker-compose`.
- **Configure**: Configure a new database connection in a project.
- **Render**: Generate ORM model files as per the configuration.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Running Commands

### Initialize a Database Project


```sh
db-compose init
```
This command initializes a new database project. You will be prompted to enter various details such as port, studio port, database name, username, and password.

Bring Up the Database. Before this you should copy the schema definition from the studio and paste it in `db.design.json`

```sh
db-compose up
```

This command brings up the database using a docker-compose setup. Ensure you have docker-compose installed and configured on your system.

Two things will be available post sucessful run of this command. 
    1. Data Studio ( http://localhost:STUDIO_PORT , eg. http://localhost:8000 by default ) and
    2. A postgres SQL server with the username , password , port you entered earlier.

# Configure a New Database Connection

```sh
db-compose configure
```
This command configures a new database connection in your project. You will be prompted to select the language, ORM, and schema server details.

```sh
db-compose render
```
This command generates ORM model files based on the configuration. It reads the configuration from database.toml and fetches the schema from the specified schema server.

# Configuration File

The configuration file `database.toml` should be placed in the root of your project directory. Here is an example:

```toml
[schema]
url = "http://localhost:8000"
lang = "Python"
orm = "DjangoORM"
root = "path/to/models"

[tables]
names = ["table1", "table2"]
```

## Fields

- **url**: The URL of the schema server.
- **lang**: The programming language used (Python, Rust, or TypeScript).
- **orm**: The ORM used (SQLAlchemy, DjangoORM, Diesel, or TypeORM).
- **root**: The path where the generated models will be saved.
- **names**: The list of tables to include in the project.
