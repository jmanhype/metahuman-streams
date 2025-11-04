# GitHub Actions Workflows

This directory contains automated workflows for the metahuman-streams project.

## Weekly Self-Improvement Workflow

**File**: `weekly-self-improvement.yml`

### Overview

This workflow uses the official Claude Code GitHub Action (`anthropics/claude-code-action@v1`) to perform automated code analysis and improvements on a weekly basis.

### Features

The workflow automatically:

1. **Code Quality Review** - Identifies code smells, anti-patterns, and refactoring opportunities
2. **Documentation Enhancement** - Improves README, docstrings, and code comments
3. **Dependency Audit** - Checks for outdated or vulnerable packages
4. **Bug Detection** - Analyzes code for potential bugs and issues
5. **Performance Analysis** - Identifies optimization opportunities
6. **Security Scan** - Reviews code for security vulnerabilities
7. **Configuration Review** - Optimizes project configuration files
8. **Test Coverage Analysis** - Suggests areas needing test coverage
9. **Project Maintenance** - General housekeeping and consistency checks

### Schedule

- **Automatic**: Runs every Monday at 2:00 AM UTC
- **Manual**: Can be triggered manually via GitHub Actions UI with specific focus areas

### Manual Trigger

To run the workflow manually:

1. Go to the "Actions" tab in your GitHub repository
2. Select "Weekly Self-Improvement" workflow
3. Click "Run workflow"
4. Optionally select a specific focus area:
   - `general` - Run all checks (default)
   - `documentation` - Focus on documentation only
   - `code_quality` - Focus on code quality only
   - `dependencies` - Focus on dependencies only
   - `performance` - Focus on performance only
   - `security` - Focus on security only

### How It Works

The Claude Code action:
- Analyzes the codebase using Claude AI
- Creates pull requests for automatic improvements
- Creates issues for items requiring human review
- Posts summary comments to track maintenance activities

### No API Key Required

This workflow uses the official GitHub Action which handles authentication automatically. You don't need to provide an Anthropic API key.

### Outputs

The workflow may create:
- **Pull Requests**: For automated improvements that can be safely applied
- **Issues**: For findings that require human review or decision-making
- **Comments**: Summary of the weekly run

### Permissions

The workflow requires:
- `contents: write` - To create commits and branches
- `pull-requests: write` - To create PRs
- `issues: write` - To create issues and comments

### Best Practices

1. **Review PRs Carefully**: While automated, always review changes before merging
2. **Prioritize Issues**: Address critical issues (security, bugs) first
3. **Customize Prompts**: Edit the workflow file to adjust prompts for your needs
4. **Monitor Frequency**: Adjust the cron schedule if weekly is too frequent/infrequent
5. **Track Improvements**: Keep merged PRs and closed issues for improvement tracking

### Customization

To customize the workflow:

1. **Change Schedule**: Modify the `cron` expression in the workflow file
2. **Adjust Prompts**: Edit the prompt text for each step
3. **Add/Remove Steps**: Comment out or add new steps as needed
4. **Modify Focus Areas**: Add custom focus areas in the workflow_dispatch inputs

### Troubleshooting

If the workflow fails:
- Check the Actions tab for error logs
- Ensure repository permissions are correctly set
- Verify the Claude Code action version is up to date
- Check if there are rate limiting issues

### Further Reading

- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Claude Code GitHub Action](https://github.com/anthropics/claude-code-action)
