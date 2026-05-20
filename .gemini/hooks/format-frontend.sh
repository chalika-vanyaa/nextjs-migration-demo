#!/usr/bin/env bash

# read the json payload from the cli via stdin
input=$(cat)

# extract the file_path being modified
file_path=$(echo "$input" | jq -r '.tool_input.file_path // empty')

# only run on .js files inside app/ or backend/
if [[ "$file_path" == *"pages/"* || "$file_path" == *"components/"* || "$file_path" == *"lib/"* ]] && [[ "$file_path" == *.js ]]; then
  echo "JS file changed ($file_path). Checking syntax..." >&2

  if ! node --check "$file_path" 2>&1 >&2; then
    echo '{"decision": "deny", "reason": "Syntax error detected in '"$file_path"'. Fix before proceeding."}'
    exit 0
  fi

  echo "Syntax OK." >&2
fi

# print strictly valid json to stdout to tell the cli to continue
echo '{"decision": "allow"}'
exit 0