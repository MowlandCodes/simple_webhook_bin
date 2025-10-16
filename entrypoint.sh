#!/bin/sh

set -e

echo "📊 Running migrations..."

npx knex migrate:latest --knexfile build/knexfile.js

echo "🌐 Running server..."

exec "$@"
