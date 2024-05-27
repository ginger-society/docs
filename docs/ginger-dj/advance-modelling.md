---
sidebar_position: 3
---


# Advanced DB Table Structure

Learn how to create complex DB structures to guarantee your database-level data integrity.

## Foreign Key Relationship

A Foreign Key relationship is used to link two tables together. It creates a relationship between columns in different tables, ensuring that the data in one table corresponds to data in another.

### Example

Consider two models: `Author` and `Book`. Each book is written by a single author, creating a Foreign Key relationship between `Book` and `Author`.

```python
from ginger.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
```

- **on_delete**: Specifies what happens when the referenced object is deleted. Options include:
  - `CASCADE`: Deletes the related objects as well.
  - `PROTECT`: Prevents deletion of the referenced object.
  - `SET_NULL`: Sets the Foreign Key to `NULL` if the referenced object is deleted.
  - `SET_DEFAULT`: Sets the Foreign Key to its default value if the referenced object is deleted.
  - `DO_NOTHING`: Does nothing, and the responsibility is on the application to handle it.

### Usage

```python
# Creating an author
author = Author.objects.create(name="J.K. Rowling")

# Creating a book written by the author
book = Book.objects.create(title="Harry Potter and the Philosopher's Stone", author=author)
```

## One-to-Many Relationship

A One-to-Many relationship is similar to a Foreign Key relationship but emphasizes that each instance of a model can be related to multiple instances of another model.

### Example

Consider two models: `Category` and `Product`. Each category can have multiple products, but each product belongs to a single category.

```python
from ginger.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
```

- **related_name**: The name to use for the reverse relation from `Category` to `Product`.

### Usage

```python
# Creating a category
category = Category.objects.create(name="Electronics")

# Creating products under the category
product1 = Product.objects.create(name="Smartphone", category=category)
product2 = Product.objects.create(name="Laptop", category=category)

# Accessing products of a category
products = category.products.all()
```

## Many-to-Many Relationship

A Many-to-Many relationship is used when a model can be related to multiple instances of another model, and vice versa. ginger automatically creates the intermediary join table.

### Example

Consider two models: `Student` and `Course`. Each student can enroll in multiple courses, and each course can have multiple students.

```python
from ginger.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)

class Course(models.Model):
    title = models.CharField(max_length=200)
    students = models.ManyToManyField(Student)
```

### Usage

```python
# Creating students
student1 = Student.objects.create(name="Alice")
student2 = Student.objects.create(name="Bob")

# Creating courses
course1 = Course.objects.create(title="Math 101")
course2 = Course.objects.create(title="History 201")

# Enrolling students in courses
course1.students.add(student1, student2)
course2.students.add(student1)

# Accessing courses of a student
courses_of_alice = student1.course_set.all()

# Accessing students of a course
students_of_math101 = course1.students.all()
```

### Summary

By using Foreign Key, One-to-Many, and Many-to-Many relationships, you can design complex database structures that enforce data integrity and accurately represent the relationships between different entities in your application. This ensures consistency and reliability of the data stored in your database.