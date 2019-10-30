class Game < ApplicationRecord
  mount_uploader :home_team_logo, ImageUploader
  mount_uploader :away_team_logo, ImageUploader
end
