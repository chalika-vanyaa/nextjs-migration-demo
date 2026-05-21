#!/usr/bin/env bash

# This script installs agent skills for this workspace into .agents/skills/.

SKILLS_DIR=".agents/skills"
TMP_DIR=".agents/.tmp-skills"

mkdir -p "$SKILLS_DIR"

echo "Installing Next.js, TypeScript, Node.js skills..."
rm -rf "$TMP_DIR/antigravity-awesome-skills"
git clone --no-checkout --filter=blob:none --depth=1 \
  https://github.com/sickn33/antigravity-awesome-skills \
  "$TMP_DIR/antigravity-awesome-skills"
cd "$TMP_DIR/antigravity-awesome-skills"
git sparse-checkout init --cone
git sparse-checkout set skills/nextjs-best-practices skills/typescript-expert skills/nodejs-best-practices
git checkout
cd -
rm -rf "$SKILLS_DIR/nextjs-best-practices" "$SKILLS_DIR/typescript-expert" "$SKILLS_DIR/nodejs-best-practices"
mv "$TMP_DIR/antigravity-awesome-skills/skills/nextjs-best-practices" "$SKILLS_DIR/"
mv "$TMP_DIR/antigravity-awesome-skills/skills/typescript-expert" "$SKILLS_DIR/"
mv "$TMP_DIR/antigravity-awesome-skills/skills/nodejs-best-practices" "$SKILLS_DIR/"
rm -rf "$TMP_DIR/antigravity-awesome-skills"

echo "Installing superpowers skills..."
rm -rf "$TMP_DIR/superpowers"
git clone --no-checkout --filter=blob:none --depth=1 \
  https://github.com/obra/superpowers \
  "$TMP_DIR/superpowers"
cd "$TMP_DIR/superpowers"
git sparse-checkout init --cone
git sparse-checkout set skills/brainstorming skills/executing-plans skills/systematic-debugging skills/writing-plans
git checkout
cd -
rm -rf "$SKILLS_DIR/brainstorming" "$SKILLS_DIR/executing-plans" "$SKILLS_DIR/systematic-debugging" "$SKILLS_DIR/writing-plans"
mv "$TMP_DIR/superpowers/skills/brainstorming" "$SKILLS_DIR/"
mv "$TMP_DIR/superpowers/skills/executing-plans" "$SKILLS_DIR/"
mv "$TMP_DIR/superpowers/skills/systematic-debugging" "$SKILLS_DIR/"
mv "$TMP_DIR/superpowers/skills/writing-plans" "$SKILLS_DIR/"
rm -rf "$TMP_DIR/superpowers"

rmdir "$TMP_DIR" 2>/dev/null || true

echo ""
echo "All skills have been installed successfully into $SKILLS_DIR."
echo "Run './setup.sh' again if you need to reinstall the skills."
