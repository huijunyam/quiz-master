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
    @question = Question.new(question_params)
    if @question.save
      render "api/questions/show"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    render json: {}
  end

  private
  def question_params
    params.require(:question).permit(
      :question_text, :answers
    )
  end
end
