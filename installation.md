# Installation & Setup

This is how to install and set up the AutoWP MCP Server so you can connect Claude (or other LLM clients) to your WordPress site.

---

## Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** (Node package manager)
- Access to your WordPress site (admin or application password)
- (Optional) [Claude Desktop](https://claude.ai/download) or another LLM client that supports MCP

---

## 1. Clone the Repository

Clone the AutoWP MCP Server repository to your local machine:

```bash
git clone https://github.com/Njengah/autowpmcp.git
cd autowpmcp
```

---

## 2. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

---

## 3. Build the Project

Build the MCP server:

```bash
npm run build
```

---

## 4. Start the Server

Start the MCP server:

```bash
npm start
```

By default, the server will run on the configured port (see `.env` or configuration section).

---

## 5. Configure Your LLM Client

If you are using Claude Desktop, add the MCP server to your configuration:

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

Replace `/path/to/your/autowp-mcp/build/index.js` with the actual path to your built server file.

---

## 6. Connect to Your WordPress Site

You will need a WordPress application password for your user account.  
See [Authentication](./authentication.md) for details on generating and using application passwords.

---

## Next Steps

- [Authentication](./authentication.md): How to securely connect to your WordPress site.
- [Configuration](./configuration.md): Environment variables and advanced setup.
- [Content Management](./content-management.md): Start creating and managing
