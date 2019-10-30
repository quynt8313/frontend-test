# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times.each do |i|
  Game.create!(
    title: Faker::Science.element,
    game_time: DateTime.current,
    remote_home_team_logo_url: "https://picsum.photos/id/#{Faker::Number.between(from: 1, to: 100)}/500/500.jpg",
    remote_away_team_logo_url: "https://picsum.photos/id/#{Faker::Number.between(from: 1, to: 100)}/500/500.jpg",
    reach: Faker::Number.between(from: 1, to: 10),
    league: 'Serie A',
    channel: 'Rai1',
    price_per_minute: Faker::Number.between(from: 1000, to: 5000),
    minutes_booked: Faker::Number.between(from: 1, to: 10),
  )
end