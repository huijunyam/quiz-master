class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :question_text, null: false
      t.string :answers, array: true, default: []
      t.timestamps
    end
    add_index(:questions, :question_text, unique: true)
  end
end
