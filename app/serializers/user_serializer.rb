class UserSerializer < ActiveModel::Serializer
  attributes :username, :email

  has_many :solve_times
end
