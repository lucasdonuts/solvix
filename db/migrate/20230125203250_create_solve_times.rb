class CreateSolveTimes < ActiveRecord::Migration[7.0]
  def change
    create_table :solve_times do |t|
      t.string :time
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
