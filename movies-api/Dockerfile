FROM ruby:3.0.0

RUN apt-get update
WORKDIR /movies-api

COPY Gemfile .
COPY Gemfile.lock .

RUN gem install bundler && bundle install

COPY . /movies-api
