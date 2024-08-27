# init-db.sh
#!/bin/bash
set -e

DUMP_APPLIED_FLAG="/var/lib/postgresql/data/dump_applied"

if [ ! -f "$DUMP_APPLIED_FLAG" ]; then
  echo "Database is empty or dump not applied. Importing dump.sql..."
  psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f /docker-entrypoint-initdb.d/dump.sql
  touch "$DUMP_APPLIED_FLAG"
else
  echo "Dump already applied. Skipping import."
fi
