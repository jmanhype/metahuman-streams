# Security Guidelines

## Environment Variables

This project requires sensitive API keys and credentials. **NEVER** commit these to version control.

### Required Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your actual API keys:
   ```bash
   # Required for ChatGPT LLM features
   OPENAI_API_KEY=your_actual_openai_api_key_here

   # Optional: Add other API keys as needed
   # GEMINI_API_KEY=your_gemini_key
   # QWEN_API_KEY=your_qwen_key
   ```

3. Ensure `.env` is in `.gitignore` (already configured)

### API Key Security Best Practices

- **Never** hardcode API keys in source code
- **Never** commit `.env` files to git
- Use environment variables for all secrets
- Rotate API keys regularly
- Use separate keys for development and production
- Limit API key permissions to minimum required

### Supported API Keys

| Service | Environment Variable | Required For |
|---------|---------------------|--------------|
| OpenAI ChatGPT | `OPENAI_API_KEY` | LLM chat features |
| Google Gemini | `GEMINI_API_KEY` | Gemini LLM (optional) |
| Qwen API | `QWEN_API_KEY` | Qwen LLM (optional) |

## Reporting Security Issues

If you discover a security vulnerability, please email the maintainers directly rather than opening a public issue.

## Secure Deployment

When deploying to production:

1. Use environment variables or secret management services (AWS Secrets Manager, Azure Key Vault, etc.)
2. Enable HTTPS for all web endpoints
3. Implement rate limiting on API endpoints
4. Use authentication for WebRTC/WebSocket connections
5. Regularly update dependencies for security patches

## Dependencies

Keep dependencies updated:
```bash
pip install --upgrade pip
pip install -r requirements.txt --upgrade
```

Check for known vulnerabilities:
```bash
pip install safety
safety check
```
