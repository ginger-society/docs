---
sidebar_position: 1
sidebar_label: Introduction
---

# Welcome to Ginger DJ

The included template is designed to streamline the setup and deployment of Django applications with a robust development environment using Docker and VS Code.

## Project Overview

The Ginger DJ Template provides a comprehensive setup including:

- **Dockerized Development Environment:** Using Docker Compose, the project sets up services like Django, Prometheus, and Redis, ensuring consistency across development and production environments.
- **VS Code Customizations:** Pre-installed extensions for Python development, including code formatters and linters.
- **Pre-configured Django Settings:** Basic Django settings including installed apps, middleware, templates, and database configurations.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Remote - Containers VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Installation

Follow these steps to get your development environment up and running:

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/ginger-society/template-backend-ginger-dj.git my-microservice-one
   cd my-microservice-one
   ```

2. **Open the Project in VS Code:**

   Open the project folder in VS Code. You should see a prompt to open the project in a dev container. Click "Reopen in Container".

This might take around 15minutes of time when you open it for the first time. This step will fetch base docker image, install necessary system level dependencies, install python requirements from `requirements.txt` as well as the VS code extension suitable for this project. This is a completely automated process and will be quick the next time you open it.

3. **Accessing the Application:**

   Once the containers are up and running, you can access the Django application at `http://localhost:8000`.

### Development Environment

The `devcontainer.json` file configures the VS Code development environment to include essential extensions for Python development. This ensures a consistent and productive development experience.

### Key Services

- **Web (GingerDJ):** The main Django application, accessible on port 8000.
- **Prometheus:** Monitoring service, accessible on port 9090.
- **Redis:** In-memory data store, accessible on port 6379.

### Environment Variables

The following environment variables are used in the `docker-compose.yml` file to configure the services:

- `env`: The environment setting (e.g., `prod` for production).
- `DB_NAME`, `DB_USERNAME`, `DB_PASSWORD`, `DB_HOST`: Database connection settings.
- `ALLOWED_HOSTS`: Hosts allowed to connect to the Django application.
- `CSRF_TRUSTED_ORIGINS`: Trusted origins for CSRF protection.

---



## URLs Configuration

The `urls.py` file in your Django project maps URL patterns to views, handling the routing of HTTP requests. Here's an overview of the `urls.py` configuration in the **Ginger DJ Template** project:

```python
from ginger.contrib import admin
from ginger.drf_yasg import openapi
from ginger.drf_yasg.views import get_schema_view
from ginger.urls import include, path

# pylint:disable=E0401
from src.views import health_check_view, test_view, test_view2

schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version="v1.0.0",
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
)

urlpatterns = [
    path("swagger<format>/", schema_view.without_ui(cache_timeout=0), name="schema-json"),
    path("swagger/", schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger-ui"),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
    path("admin/", admin.site.urls),
    path("endpoints/", include('src.urls')),
    path("", include("ginger.prometheus.urls")),
]
```

### Explanation

1. **Importing Modules:**
   - `from ginger.contrib import admin`: Imports the Django admin module.
   - `from ginger.drf_yasg import openapi` and `from ginger.drf_yasg.views import get_schema_view`: Imports for setting up OpenAPI schema views using `drf_yasg`.
   - `from ginger.urls import include, path`: Imports the `path` and `include` functions for URL routing.
   - `from src.views import health_check_view, test_view, test_view2`: Imports custom views from the `src` application.

2. **Schema View Configuration:**
   - `schema_view = get_schema_view(...)`: Configures the schema view for the OpenAPI documentation, providing details such as title, version, description, terms of service, contact, and license.

3. **URL Patterns:**
   - `path("swagger<format>/", schema_view.without_ui(cache_timeout=0), name="schema-json")`: Endpoint for the OpenAPI schema in JSON format.
   - `path("swagger/", schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger-ui")`: Endpoint for the Swagger UI.
   - `path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc")`: Endpoint for the ReDoc UI.
   - `path("admin/", admin.site.urls)`: Maps the URL `/admin/` to the Django admin interface.
   - `path("endpoints/", include('src.urls'))`: Includes URL patterns from the `src` application.
   - `path("", include("ginger.prometheus.urls"))`: Includes URL patterns from the `ginger.prometheus` application.

### Included Applications

- **Django Admin:** Provides the administration interface at `/admin/`.
- **DRF YASG:** Integrates Swagger and ReDoc for API documentation, accessible at `/swagger/` and `/redoc/` respectively.
- **Custom Endpoints:** The `src.urls` module contains additional custom endpoints.
- **Prometheus:** Monitoring and metrics collection, accessible via the included `ginger.prometheus` URLs.

### Adding Custom Views

To add your custom views, define them in the appropriate application (e.g., `src`) and include their URL patterns in the `src/urls.py` file. Then, include these patterns in the main `urls.py` file using the `include` function.

Example in `src/urls.py`:

```python
from ginger.urls import path
from . import views

urlpatterns = [
    path('health/', views.health_check_view, name='health-check'),
    path('test/', views.test_view, name='test'),
    path('test2/', views.test_view2, name='test2'),
]
```


This section provides a detailed explanation of your updated `urls.py` configuration and can be included in your introduction page to help users understand how URLs are managed in your project.