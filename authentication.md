# Authentication

AutoWP MCP uses WordPress application passwords for secure authentication. This ensures that all actions performed by the server respect your WordPress user permissions and do not require sharing your main account password.

## How Authentication Works

- You generate an application password in your WordPress user profile.
- The MCP server uses this password to authenticate API requests on your behalf.
- All actions are performed with your user’s permissions and are logged by WordPress.

## Generating an Application Password

1. Log in to your WordPress site as the user you want to connect.
2. Go to **Users > Profile** (or **Your Profile**).
3. Scroll down to the **Application Passwords** section.
4. Enter a name (e.g., "AutoWP MCP") and click **Add New Application Password**.
5. Copy the generated password and keep it safe (you won’t see it again).

## Connecting MCP to WordPress

When prompted by Claude or your LLM client, provide:

- Your WordPress site URL
- Your WordPress username
- The application password you generated

> **Tip:** Never share your main WordPress password. Use application passwords for each integration.

## Testing the Connection

Use the `test-wp-connection` tool to verify that your credentials and site URL are correct.

**Example:**

```json
{
  "tool": "test-wp-connection",
  "params": {
    "site_url": "https://your-site.com",
    "username": "yourusername",
    "application_password": "xxxx xxxx xxxx xxxx"
  }
}
```

---

For more on setup, see [Installation & Setup](./installation.md).
