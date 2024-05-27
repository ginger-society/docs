---
sidebar_position: 5
sidebar_label: Advance request/response structure
---

# Structuring Complex Response Types and Custom Input Types for APIs

In REST Framework (DRF), structuring complex response types and custom input types involves using serializers, decorators, and schema definitions. This guide will walk you through the process step by step.

## Response Serialization

### 1. Define Serializer Classes

Define serializer classes that represent the structure of your API responses. Use `serializers.Serializer` for custom response types and `serializers.ModelSerializer` for database model-based responses.

Example:
```python
class TestResponseSerializer(serializers.Serializer):
    text = serializers.CharField()
```

### 2. Create Response Views

Create views that return JSON responses serialized using your defined serializers. Use decorators like `@api_view` and `@swagger_auto_schema` for documentation and validation.

Example:
```python
from rest_framework.decorators import api_view
from drf_yasg.utils import swagger_auto_schema

@api_view(["GET"])
@swagger_auto_schema(responses={200: openapi.Response("testResponse", TestResponseSerializer)})
def test_view(request):
    return JsonResponse({"text": "Example response"})
```

## Custom Input Types

### 1. Define Custom Input Serializers

Define serializers for custom input types that your API endpoints expect. Use `serializers.Serializer` or `serializers.ModelSerializer` based on your input requirements.

Example:
```python
class ContactFormSerializer(serializers.Serializer):
    name = serializers.CharField()
    email = serializers.EmailField()
    message = serializers.CharField()
```

### 2. Validate and Process Input

In your API views, validate and process incoming data using your custom input serializers. Use decorators like `@body_validator` for request body validation.

Example:
```python
@api_view(["POST"])
@body_validator(ContactFormSerializer)
def contact_view(request):
    serializer = ContactFormSerializer(data=request.data)
    if serializer.is_valid():
        # Process valid data
        return JsonResponse({"success": True})
    else:
        return JsonResponse({"error": serializer.errors}, status=400)
```

## Conclusion

By following these steps, you can effectively structure complex response types and handle custom input types in your Django REST Framework APIs. Ensure to document your APIs using tools like Swagger for better understanding and integration.
