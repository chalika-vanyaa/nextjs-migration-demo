#!/usr/bin/env bash

# This script installs the recommended Gemini CLI agent skills for this workspace.
# It ensures each command is on a single line and uses the --path argument
# to specify the skill's location within the source git repository.

echo "Installing Next.js Best Practices skill..."
echo "y" | gemini skills install https://github.com/sickn33/antigravity-awesome-skills.git --path "skills/nextjs-best-practices" --scope workspace --consent

echo "Installing TypeScript Expert skill..."
echo "y" | gemini skills install https://github.com/sickn33/antigravity-awesome-skills.git --path "skills/typescript-expert" --scope workspace --consent

echo "Installing Node.js Best Practices skill..."
echo "y" | gemini skills install https://github.com/sickn33/antigravity-awesome-skills.git --path "skills/nodejs-best-practices" --scope workspace --consent

echo "Installing Systematic Debugging skill..."
echo "y" | gemini skills install https://github.com/sickn33/antigravity-awesome-skills.git --path "skills/systematic-debugging" --scope workspace --consent

echo "Installing Test-Driven Development skill..."
echo "y" | gemini skills install https://github.com/sickn33/antigravity-awesome-skills.git --path "skills/test-driven-development" --scope workspace --consent

echo ""
echo "All skills have been installed successfully into the .gemini/skills/ directory."
echo "Run './setup.sh' again if you need to reinstall the skills."
