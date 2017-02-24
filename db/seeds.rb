# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

question1 = Question.create("question_text":"How many vowels are there in the English alphabet?", "answers":["5", "five"])
question2 = Question.create("question_text":"How many letters are there in the English alphabet?", "answers":["26", "twenty six"])
question3 = Question.create("question_text":"How many consonants are there in the English alphabet?", "answers":["21", "twenty one"])
question4 = Question.create("question_text":"What is the result of 1 + 5?", "answers":["6", "six"])
question5 = Question.create("question_text":"What is the result of 5 x 3?", "answers":["15", "fifteen"])
question6 = Question.create("question_text":"What is the result of 3 + 6?", "answers":["9", "nine"])
question7 = Question.create("question_text":"What is the result of 4 x 12?", "answers":["48", "forty eight"])
question8 = Question.create("question_text":"What is the result of 10 + 4?", "answers":["14", "fourteen"])
