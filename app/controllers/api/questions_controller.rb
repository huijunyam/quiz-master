class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
    render :index
  end

  def show
    @question = Question.find(params[:id])
    render :show
  end

  def create
    @question = Question.create("question_text" => params["question"]["question_text"],
    "answers" => params["question"]["answers"])
    if @question.save
      render "api/questions/show"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = Question.find(params[:id])
    if @question.update("question_text" => params["question"]["question_text"],
    "answers" => params["question"]["answers"])
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    question = Question.find(params[:id])
    question.destroy
    @questions = Question.all
    render :index
  end

end
