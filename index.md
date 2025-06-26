---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AutoWP MCP"
  text: "Documentation"
  tagline: Automated AI WordPress Site Management via MCP
  actions:
    - theme: brand
      text: Getting Started
      link: /authentication
    - theme: alt
      text: Configuration
      link: /configuration

features:
  - title: Secure Authentication
    details: Handles secure login using WordPress application passwords and manages authentication sessions safely.
  - title: Content Management
    details: Create, format, and publish blog posts with categories, tags, and post metadata.
  - title: Draft Workflow
    details: Save drafts locally, load previous drafts, and enable iterative content development.
  - title: Media Management
    details: Upload, edit, optimize, and manage media files directly from your AI assistant.
  - title: Taxonomy Management
    details: Manage categories, tags, and custom taxonomies, including advanced operations like merging and bulk assignment.
  - title: User Management
    details: Create, update, and manage users and roles, including password resets and role assignments.
  - title: Plugin & Theme Tools (Upcoming)
    details: Install, update, and manage plugins and themes directly from the MCP server.
  - title: Site Health & Maintenance
    details: Perform core updates, backups, security checks, and site health diagnostics.
---


# AutoWP MCP Server Documentation

Welcome to the documentation for **AutoWP MCP Server** – a bridge between Claude (or other LLM clients) and WordPress sites. This server allows you to automate WordPress content creation, management, and site administration tasks directly from AI-powered conversations.

## What is AutoWP MCP?

AutoWP MCP (Model Context Protocol) server connects Claude to WordPress sites and enables users to:

- Create and publish blog posts
- Manage categories, tags, and taxonomies
- Upload and manage media files
- Handle user accounts and roles
- Perform site health checks and maintenance
- And much more, all via secure, authenticated commands

## Key Features

- **Secure Authentication** with WordPress application passwords
- **Content Management**: Create, format, and publish posts
- **Draft Workflow**: Save and load drafts locally
- **Media Management**: Upload, edit, and optimize media
- **Taxonomy Management**: Categories, tags, and custom taxonomies
- **User Management**: Create, update, and manage users and roles
- **Plugin & Theme Tools**: (Upcoming) Install, update, and manage plugins/themes
- **Site Health & Maintenance**: Core updates, backups, and security checks

## Getting Started

- [Installation & Setup](./installation.md)

## Tool Reference

- [Content Management](./content-management.md)
- [Draft Management](./draft-management.md)
- [Media Management](./media-management.md)
- [Taxonomy Management](./taxonomy-management.md)
- [User Management](./user-management.md)
- [Plugin & Theme Settings](./plugin-theme-settings.md)
- [Site Health & Maintenance](./site-health.md)

## Frequently Asked Questions (FAQ)

### **How do I connect AutoWP MCP to my WordPress site?**

Use the `authenticate-wp` tool with your WordPress application password. See [Authentication](./authentication.md) for details.

### **Can I save drafts before publishing?**

Yes! Use the `save-draft` tool to save your work locally and `load-draft` to continue editing later.

### **What types of media can I upload?**

You can upload images, videos, documents, and other file types supported by WordPress using the `upload-media` tool.

### **How do I manage plugins and themes?**

Plugin and theme management tools are available or planned. See [Plugin & Theme Settings](./plugin-theme-settings.md) for current capabilities.

### **Is my data secure?**

Authentication uses WordPress application passwords and all operations respect your WordPress user permissions.

### **Where can I get support or contribute?**

See the [Contribution](./contribution.md) page or open an issue

---

For more details on each tool and command, see the relevant section above.

---

*Contributions and feedback are welcome! See the [Contribution](./contribution.md) page for more info.*

---
