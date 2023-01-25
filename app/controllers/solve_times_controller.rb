class SolveTimesController < ApplicationController
  def index
    user = User.find(session[:user_id])
    times = Times.where(user_id: user.id)
    render json: times, status: :ok
  end

  def show
    time = Time.find(params[:id])
    render json: time, status: :ok
  end

  def create
    time = Time.create!(time_params)
    render json: time, status: :created
  end

  def destroy
    time = Time.find(params[:id])
    time.destroy
    head :no_content
  end

  private

  def time_params
    params.permit(:time, :user_id)
  end
end
