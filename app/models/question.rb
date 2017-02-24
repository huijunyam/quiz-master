class Question < ActiveRecord::Base
  validates :question_text, presence: true
  validate :check_answer
  
  def check_answer
    if answers.empty?
      errors.add(:answers, "can't be empty")
    end
  end
end
