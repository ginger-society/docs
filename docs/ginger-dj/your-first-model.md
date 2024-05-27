---
sidebar_position: 1
---


# Your First Model

Learn how to design your database.

## Basic Model with Different Types of Fields

```python
from ginger.db import models

class MyModel(models.Model):
    field1 = models.CharField(max_length=100, null=False)
    field2 = models.BooleanField(default=False)
    field3 = models.DateField(null=True, blank=True)
```
## CharField

A `CharField` is used to define a text-based field with a maximum length. This field is suitable for storing short text strings such as names, titles, or other brief text data.

### Basic Example

```python
from ginger.db import models

class MyModel(models.Model):
    field1 = models.CharField(max_length=100, null=False)
```

- **max_length**: Specifies the maximum number of characters allowed in this field.
- **null**: If `True`, the field is allowed to be null in the database.

### CharField Options

#### max_length

The `max_length` option is a required parameter that specifies the maximum number of characters allowed in the field.

```python
field1 = models.CharField(max_length=255)
```

#### null

The `null` option determines whether the field can be `NULL` in the database.

```python
field1 = models.CharField(max_length=255, null=True)
```

- **True**: The field can be `NULL`.
- **False**: The field cannot be `NULL` (default).

#### blank

The `blank` option determines whether the field is allowed to be blank in forms.

```python
field1 = models.CharField(max_length=255, blank=True)
```

- **True**: The field is allowed to be blank.
- **False**: The field is not allowed to be blank (default).

#### default

The `default` option sets a default value for the field.

```python
field1 = models.CharField(max_length=255, default='default value')
```

#### choices

The `choices` option limits the field to one of the given choices. This is useful for predefined options.

```python
class MyModel(models.Model):
    COLOR_CHOICES = [
        ('R', 'Red'),
        ('G', 'Green'),
        ('B', 'Blue'),
    ]
    color = models.CharField(max_length=1, choices=COLOR_CHOICES, default='R')
```

### Full Example with Options

Here is a complete example demonstrating a `CharField` with various options:

```python
from ginger.db import models

class MyModel(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    description = models.CharField(max_length=500, null=True, blank=True, default='No description provided')
    status = models.CharField(
        max_length=2,
        choices=[
            ('DR', 'Draft'),
            ('PB', 'Published'),
            ('AR', 'Archived')
        ],
        default='DR'
    )
```

- **name**: A required field with a maximum length of 255 characters.
- **description**: An optional field with a maximum length of 500 characters and a default value of 'No description provided'.
- **status**: A field with predefined choices and a default value of 'Draft'.

This example demonstrates the flexibility of `CharField` in ginger models, allowing you to define fields with various constraints and options to suit your application's requirements.

## DateField

A `DateField` is used to store date values. This is useful for fields that require date input such as birthdays, anniversaries, or any other date-specific data.

### Example:

```python
field3 = models.DateField(null=True, blank=True)
```

- **null**: If `True`, the field is allowed to be null in the database.
- **blank**: If `True`, the field is allowed to be blank in forms.

### Usage:

```python
class Event(models.Model):
    event_name = models.CharField(max_length=255)
    event_date = models.DateField(null=True, blank=True)
```

## BooleanField

A `BooleanField` is used to store `True` or `False` values. This is useful for fields that need a binary choice such as yes/no, active/inactive, or any other true/false condition.

### Example:

```python
field2 = models.BooleanField(default=False)
```

- **default**: The default value for the field. In this case, it is set to `False`.

### Usage:

```python
class User(models.Model):
    username = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
```


## created_at and updated_at Fields

### Introduction

In many applications, it's common to track when records are created and last updated. Ginger provides two options, `auto_now_add` and `auto_now`, which simplify this process.

- `auto_now_add`: Sets the field to the current date and time when the object is created. It is not updated on subsequent saves.
- `auto_now`: Updates the field to the current date and time every time the object is saved.

### Example

Below is an example of how to define `created_at` and `updated_at` fields in a ginger model using `auto_now_add` and `auto_now`:

```python
from ginger.db import models

class MyModel(models.Model):
    field1 = models.CharField(max_length=100, null=False)
    field2 = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

### created_at Field

The `created_at` field is used to store the timestamp when a record is first created. This timestamp is set once and does not change.

#### Example:

```python
created_at = models.DateTimeField(auto_now_add=True)
```

- **auto_now_add**: Automatically sets the field to the current date and time when the object is created.

#### Usage:

```python
class Product(models.Model):
    name = models.CharField(max_length=255, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
```

### updated_at Field

The `updated_at` field is used to store the timestamp when a record is last updated. This timestamp is updated every time the record is saved.

#### Example:

```python
updated_at = models.DateTimeField(auto_now=True)
```

- **auto_now**: Automatically updates the field to the current date and time every time the object is saved.

#### Usage:

```python
class Product(models.Model):
    name = models.CharField(max_length=255, null=False)
    updated_at = models.DateTimeField(auto_now=True)
```

### Full Example

Combining the `created_at` and `updated_at` fields, here is a complete example:

```python
from ginger.db import models

class MyModel(models.Model):
    field1 = models.CharField(max_length=100, null=False)
    field2 = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

In this example, `created_at` will store the timestamp of when the record was created, and `updated_at` will store the timestamp of the last update. Both fields will be managed automatically by ginger, ensuring that the timestamps are accurate and up-to-date.

---

This subsection provides a clear understanding of how to use `created_at` and `updated_at` fields in ginger models, helping you to efficiently track the creation and modification times of your records.