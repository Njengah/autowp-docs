# Configuration

This page explains how to configure the AutoWP MCP Server for your environment and workflow.

## Environment Variables

You can use a `.env` file or environment variables to customize the server:

- `PORT` – The port the MCP server listens on (default: `3000`)
- `LOG_LEVEL` – Logging verbosity (`info`, `debug`, `warn`, `error`)
- `WORDPRESS_SITE_URL` – (Optional) Default WordPress site URL
- `ALLOWED_ORIGINS` – (Optional) Comma-separated list of allowed origins for CORS

**Example `.env` file:**

```md
PORT=3000
LOG_LEVEL=info
WORDPRESS_SITE_URL=https://your-site.com
ALLOWED_ORIGINS=https://your-site.com,https://another-site.com
```

## Claude Desktop Integration

If using Claude Desktop, add the MCP server to your configuration:

```json
{
  "mcpServers": {
    "autowp": {
      "command": "node",
      "args": ["/path/to/your/autowp-mcp/build/index.js"]
    }
  }
}
```

## Advanced Options

- You can run multiple MCP servers for different sites or environments.
- For production, consider using a process manager like PM2 or Docker.

## Troubleshooting

- Check logs for errors (`LOG_LEVEL=debug` for more detail).
- Ensure your WordPress site is reachable and the REST API is enabled.
- Verify your application password and user permissions.

---

For installation steps, see [Installation & Setup](./installation.md).
