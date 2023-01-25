class SolveTimeSerializer < ActiveModel::Serializer
  attributes :time
  has_one :user
end
