# Draft Management

AutoWP MCP supports a local draft workflow, allowing you to save and load blog post drafts before publishing them to your WordPress site. This is useful for iterative content development and for working on posts over multiple sessions.

## Tools

### `save-draft`

Save a blog post draft locally for later editing or publishing.

**Parameters:**

- `title` (string, required): The title of your draft.
- `content` (string, required): The content of your draft.
- `categories` (array, optional): Categories to associate with the draft.
- `tags` (array, optional): Tags to associate with the draft.

**Example:**

```json
{
  "tool": "save-draft",
  "params": {
    "title": "My Draft Post",
    "content": "This is a draft post.",
    "categories": ["Ideas"],
    "tags": ["draft", "in-progress"]
  }
}
```

---

### `load-draft`

Load a previously saved draft for editing or publishing.

**Parameters:**

- `title` (string, optional): The title of the draft to load. If omitted, a list of available drafts may be returned.

**Example:**

```json
{
  "tool": "load-draft",
  "params": {
    "title": "My Draft Post"
  }
}
```

---

## Typical Workflow

1. Use `save-draft` to store your work-in-progress posts locally.
2. Use `load-draft` to retrieve and continue editing a draft.
3. When ready, use `create-blog-post` to publish your draft to WordPress.

---

For content creation and publishing, see [Content Management](./content-management.md).
