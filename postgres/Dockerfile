FROM postgres:latest

COPY init-db.sh /docker-entrypoint-initdb.d/
COPY dump.sql /docker-entrypoint-initdb.d/

RUN chmod +x /docker-entrypoint-initdb.d/init-db.sh
