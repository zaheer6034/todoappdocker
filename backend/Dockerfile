from python:3
RUN python -m pip install --upgrade pip
WORKDIR /app
# Install python dependencies
COPY ./requirements.txt $WORKDIR
RUN python -m pip install -r ./requirements.txt

# FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

# COPY ./server /server

# ENV PORT=8080