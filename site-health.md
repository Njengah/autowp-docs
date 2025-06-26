# Site Health & Maintenance

AutoWP MCP provides tools for monitoring, maintaining, and updating your WordPress site. These tools help you keep your site secure, up-to-date, and running smoothly—all from your LLM client.

---

## System Information & Health

### `get-system-info`

Get comprehensive WordPress system information, including PHP version, server details, and plugin/theme status.

**Example:**

```json
{
  "tool": "get-system-info"
}
```

---

### `get-site-health`

Check WordPress core health status and identify errors or issues.

**Example:**

```json
{
  "tool": "get-site-health"
}
```

---

## Updates & Backups

### `check-core-updates`

Check for available WordPress core updates.

**Example:**

```json
{
  "tool": "check-core-updates"
}
```

---

### `apply-core-update`

Install available WordPress core updates.

**Example:**

```json
{
  "tool": "apply-core-update"
}
```

---

### `backup-database`

Create a backup of your WordPress database.

**Example:**

```json
{
  "tool": "backup-database"
}
```

---

## Security & Maintenance

### `scan-for-malware`

Scan your WordPress site for malware and security threats.

**Example:**

```json
{
  "tool": "scan-for-malware"
}
```

---

### `lock-site`

Enable maintenance mode to lock the site for updates or troubleshooting.

**Example:**

```json
{
  "tool": "lock-site"
}
```

---

## Planned & Advanced Tools

- **send-test-email** – Send a test email to verify mail server configuration (Planned)
- **run-cron-jobs** – Manually trigger WordPress cron jobs (Planned)
- **log-system-info** – Log server and WordPress system info (Planned)

---

For more on plugin, theme, and settings management, see [Plugin & Theme Settings](./plugin-theme-settings.md).
