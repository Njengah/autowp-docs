# User Management

AutoWP MCP provides tools for managing WordPress users and their roles directly from your LLM client. These tools allow you to list, create, update, disable, and reset users, as well as manage user roles and permissions.

## Core User Operations

### `list-users`

List WordPress users with optional filters such as role, search keyword, or registration date.

**Parameters:**

- `role` (string, optional): Filter users by role (e.g., "editor").
- `search` (string, optional): Search users by name or email.
- `registered_after` (string, optional): Only users registered after this date (ISO 8601).

**Example:**

```json
{
  "tool": "list-users",
  "params": {
    "role": "author",
    "search": "jane"
  }
}
```

---

### `create-user`

Create a new user with optional profile and role details.

**Parameters:**

- `username` (string, required): Username for the new user.
- `email` (string, required): Email address.
- `password` (string, required): Password.
- `role` (string, optional): User role (e.g., "contributor").
- `name` (string, optional): Display name.
- `bio` (string, optional): User bio.

**Example:**

```json
{
  "tool": "create-user",
  "params": {
    "username": "janedoe",
    "email": "jane@example.com",
    "password": "securepassword",
    "role": "editor",
    "name": "Jane Doe"
  }
}
```

---

### `update-user`

Update user profile data including email, name, bio, and password.

**Parameters:**

- `id` (integer, required): User ID.
- `email`, `name`, `bio`, `password` (optional): Fields to update.

**Example:**

```json
{
  "tool": "update-user",
  "params": {
    "id": 12,
    "email": "newemail@example.com",
    "name": "Jane D.",
    "bio": "Updated bio"
  }
}
```

---

### `disable-user`

Temporarily deactivate a user account with an optional reason.

**Parameters:**

- `id` (integer, required): User ID.
- `reason` (string, optional): Reason for disabling.

**Example:**

```json
{
  "tool": "disable-user",
  "params": {
    "id": 12,
    "reason": "Suspicious activity"
  }
}
```

---

### `reset-user-password`

Generate a password reset link or email it to the user.

**Parameters:**

- `id` (integer, required): User ID.

**Example:**

```json
{
  "tool": "reset-user-password",
  "params": {
    "id": 12
  }
}
```

---

## Role & Permission Management

### `set-user-role`

Assign a specific role to a user, optionally removing other roles.

**Parameters:**

- `id` (integer, required): User ID.
- `role` (string, required): Role to assign.

**Example:**

```json
{
  "tool": "set-user-role",
  "params": {
    "id": 12,
    "role": "author"
  }
}
```

---

### `list-user-roles`

View all available WordPress user roles and their capabilities.

**Example:**

```json
{
  "tool": "list-user-roles"
}
```

---

For plugin and theme management, see [Plugin & Theme Settings](./plugin-theme-settings.md).
