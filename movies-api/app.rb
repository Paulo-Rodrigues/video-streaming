require 'sinatra'
require 'json'

class App < Sinatra::Base
  configure do
    enable :cross_origin
  end

  before do
    response.headers['Access-Controll-Allow-Origin'] = '*'
    # response.headers['Allow'] = "HEAD, GET, PUT, POST, DELETE, OPTIONS"
  end

  get '/' do
    {hello: 'World'}.to_json
  end
end
