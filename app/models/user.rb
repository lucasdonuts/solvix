class User < ApplicationRecord
  has_secure_password

  has_many :solve_times
end
