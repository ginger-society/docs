---
sidebar_position: 2
---

# Your first REST API

Let's create a simple hello world endpoint. This is going to be a health-check API. This can be used to check the service availability. This is actually not a necessary endpoint since later you will learn how this is achieved using Prometheus metric scraping. Don't worry for now.

```python title="src/views.py"
from ginger.http import JsonResponse
from datetime import datetime

def health_check_view(request):
    """Health check view"""
    now = datetime.now()  # Get the current server time
    return JsonResponse({"status": "ok", "server_time": now.strftime("%d/%m/%Y, %H:%M:%S")})
```

```python title="src/urls.py"
from ginger.urls import path
from .views import health_check_view

urlpatterns = [
    # Existing URL patterns...
    # Add your new endpoint here:
    path("health-check/", health_check_view, name="health-check"),
]
```

In the updated content:

- The `src/urls.py` file is now included with the endpoint `health-check/` added to its URL patterns.
- The view function `health_check_view` is imported from `.views` within the `src` directory.
- The endpoint is named "health-check" using the `name` parameter in the `path` function.

Feel free to modify the code further as needed for your project structure and naming conventions.