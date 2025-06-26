# Content Management

This section explains how to create and manage blog posts, categories, and tags using the AutoWP MCP Server.

## Available Tools

### 1. `create-blog-post`

**Description:**  
Create new blog posts with support for categories and tags.

**Parameters:**

- `title` (string): The post title.
- `content` (string): The main content (can be formatted with `format-wp-content`).
- `categories` (array, optional): List of category names or IDs.
- `tags` (array, optional): List of tag names or IDs.
- `status` (string, optional): `publish` or `draft`.

**Example:**

```json
{
  "tool": "create-blog-post",
  "params": {
    "title": "My First Post",
    "content": "This is the content of my post.",
    "categories": ["News", "Updates"],
    "tags": ["announcement", "release"],
    "status": "publish"
  }
}
```

---

### 2. `get-wp-categories`

**Description:**  
List all available categories from your WordPress site.

**Usage:**  
Use this tool to fetch the list of categories for assigning to posts or for reference.

**Example:**

```json
{
  "tool": "get-wp-categories"
}
```

---

### 3. `get-wp-tags`

**Description:**  
List all available tags from your WordPress site.

**Usage:**  
Use this tool to fetch the list of tags for assigning to posts or for reference.

**Example:**

```json
{
  "tool": "get-wp-tags"
}
```

---

### 4. `format-wp-content`

**Description:**  
Convert raw text or markdown into WordPress-ready HTML.

**Parameters:**

- `text` (string): The raw text or markdown to convert.

**Example:**

```json
{
  "tool": "format-wp-content",
  "params": {
    "text": "This is **bold** and this is *italic*."
  }
}
```

---

## Typical Workflow

1. Use `format-wp-content` to prepare your post content.
2. Use `get-wp-categories` and `get-wp-tags` to find available categories and tags.
3. Use `create-blog-post` to publish your content with the desired metadata.

---

For draft management, see [Draft Management](./draft-management.md).
