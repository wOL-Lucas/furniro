#!/bin/bash
set -e

if [ -z "$(psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c '\dt' | grep -v 'No relations found.')" ]; then
  echo "Database is empty. Importing dump.sql..."
  psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f /docker-entrypoint-initdb.d/dump.sql
else
  echo "Database is not empty. Skipping import."
fi
