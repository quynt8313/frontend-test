class ApiController < ApplicationController
  protect_from_forgery with: :null_session
  def json_with_message(data, message = nil, status = 200)
    render json: json_struct(data, message, status), status: status
  end

  def success_json(data, status = 200)
    json_with_message(data, nil, status)
  end

  def error_json(message, status = 400)
    json_with_message(nil, message, status)
  end

  private

  def json_struct(data, message = nil, code)
    result = {}
    result[:message] = message if message.present?
    result[:data] = data if data.present?
    result[:code] = code if code.present?
    result
  end
end
