# Plugin & Theme Settings

AutoWP MCP provides (and plans to expand) tools for managing plugins, themes, and site settings directly from your LLM client.

---

## Plugin Management

> **Note:** Some plugin tools may be marked as "upcoming" and not available in all versions.

- **list-plugins** – List all plugins and their activation status
- **install-plugin** – Install a plugin from the WordPress.org repository
- **toggle-plugin** – Activate or deactivate a plugin
- **update-plugin** – Update a plugin to its latest version
- **delete-plugin** – Permanently delete a plugin
- **rollback-plugin** – Rollback a plugin to a previous version

**Example:**

```json
{
  "tool": "install-plugin",
  "params": {
    "slug": "akismet"
  }
}
```

---

## Theme Management

- **switch-theme** – Change the active theme
- **get-theme-info** – Get information about installed themes

**Example:**

```json
{
  "tool": "switch-theme",
  "params": {
    "slug": "twentytwentyfour"
  }
}
```

---

## Settings Management

- **get-reading-settings** – View reading/display settings
- **update-reading-settings** – Modify reading settings
- **manage-comment-settings** – Manage comment-related settings (Planned)
- **export-settings** – Export site settings (Planned)
- **import-settings** – Import site settings from a file (Planned)

---

For site health and maintenance, see [Site Health & Maintenance](./site-health.md).
