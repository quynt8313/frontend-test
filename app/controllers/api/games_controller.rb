class Api::GamesController < ApiController
  def update
    @game = Game.find(params[:id])
    if @game.update(minutes_booked: params[:minutes_booked])
      success_json @game
    else
      error_json @game.errors, 422
    end
  end
end