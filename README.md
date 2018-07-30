# Django - React
Test app to try the deployment of a create-react-app served by django, with hot reloading

Clone the repository, then start a django server (using python livereload) and the webpack watcher.

In a shell run:
```
pipenv install
pipenv run python manage.py migrate
pipenv run python manage.py livereload
```

And in a separate shell run:
```
cd frontend
yarn
yarn watch
```
