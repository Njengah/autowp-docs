# Taxonomy Management

AutoWP MCP provides tools for managing categories, tags, and custom taxonomies on your WordPress site. These tools allow you to create, update, delete, and organize taxonomies, as well as perform advanced operations like merging and bulk assignment.

## Existing Taxonomies

### `get-wp-categories`

List all WordPress categories.

**Example:**

```json
{
  "tool": "get-wp-categories"
}
```

---

### `get-wp-tags`

List all WordPress tags.

**Example:**

```json
{
  "tool": "get-wp-tags"
}
```

---

## Taxonomy Managements

### `create-category`

Create a new category, optionally as a child of another category.

**Parameters:**

- `name` (string, required): Category name.
- `parent` (integer, optional): Parent category ID.

**Example:**

```json
{
  "tool": "create-category",
  "params": {
    "name": "Tutorials",
    "parent": 2
  }
}
```

---

### `create-tag`

Create a new tag with an optional description.

**Parameters:**

- `name` (string, required): Tag name.
- `description` (string, optional): Tag description.

**Example:**

```json
{
  "tool": "create-tag",
  "params": {
    "name": "how-to",
    "description": "How-to guides"
  }
}
```

---

### `update-category`

Rename or change the parent of a category.

**Parameters:**

- `id` (integer, required): Category ID.
- `name` (string, optional): New name.
- `parent` (integer, optional): New parent category ID.

**Example:**

```json
{
  "tool": "update-category",
  "params": {
    "id": 5,
    "name": "Advanced Tutorials"
  }
}
```

---

### `update-tag`

Rename or update the description of a tag.

**Parameters:**

- `id` (integer, required): Tag ID.
- `name` (string, optional): New name.
- `description` (string, optional): New description.

**Example:**

```json
{
  "tool": "update-tag",
  "params": {
    "id": 8,
    "name": "beginner",
    "description": "Beginner-level content"
  }
}
```

---

### `delete-category`

Remove a category. Use the force option to delete even if assigned to posts.

**Parameters:**

- `id` (integer, required): Category ID.
- `force` (boolean, optional): Force deletion.

**Example:**

```json
{
  "tool": "delete-category",
  "params": {
    "id": 5,
    "force": true
  }
}
```

---

### `delete-tag`

Remove a tag. Use the force option to delete even if assigned to posts.

**Parameters:**

- `id` (integer, required): Tag ID.
- `force` (boolean, optional): Force deletion.

**Example:**

```json
{
  "tool": "delete-tag",
  "params": {
    "id": 8,
    "force": true
  }
}
```

---

## Advanced Taxonomy Operations

### `merge-categories`

Combine two or more categories. Optionally delete the source categories after merging.

**Parameters:**

- `source_ids` (array of integers, required): IDs of categories to merge.
- `target_id` (integer, required): ID of the category to merge into.
- `delete_sources` (boolean, optional): Delete source categories after merging.

**Example:**

```json
{
  "tool": "merge-categories",
  "params": {
    "source_ids": [3, 4],
    "target_id": 2,
    "delete_sources": true
  }
}
```

---

### `assign-categories-to-posts`

Bulk assign categories to multiple posts.

**Parameters:**

- `post_ids` (array of integers, required): Post IDs.
- `category_ids` (array of integers, required): Category IDs.

**Example:**

```json
{
  "tool": "assign-categories-to-posts",
  "params": {
    "post_ids": [10, 11],
    "category_ids": [2, 5]
  }
}
```

---

### `assign-tags-to-posts`

Bulk assign tags to multiple posts.

**Parameters:**

- `post_ids` (array of integers, required): Post IDs.
- `tag_ids` (array of integers, required): Tag IDs.

**Example:**

```json
{
  "tool": "assign-tags-to-posts",
  "params": {
    "post_ids": [10, 11],
    "tag_ids": [7, 8]
  }
}
```

---

### `list-taxonomies`

View all taxonomies, including custom ones.

**Example:**

```json
{
  "tool": "list-taxonomies"
}
```

---

For user management, see [User Management](./user-management.md).
