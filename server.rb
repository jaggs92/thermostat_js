require 'sinatra'
require 'json'

set :public_folder, proc { File.join(root) }git st

get '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'

end
