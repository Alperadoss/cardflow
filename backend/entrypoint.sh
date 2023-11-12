#!/bin/sh

echo "Waiting for postgres..."

while ! nc -z 'postgres' 5432; do
  echo "Zzz"
  sleep 0.5
done

echo "PostgreSQL started"

python manage.py flush --no-input
python manage.py migrate
python manage.py createsuperuser --no-input --

python manage.py runserver 0.0.0.0:8000