class Api::JobsController < ApplicationController
  before_action :authenticate_user!, :set_user, only: [:index, :show, :create, :update]
  def index
    render json: @user.jobs
  end

  def all_job
    render json: current_user.job.all
  end

  def show
    render json: Job.find(params[:id])
  end

  def create
    job = current_user.jobs.new(job_params)
    if job.save
      render json: job
    else
      render json: { errors: job.errors }, status: 420
    end
  end

  def update
    job = current_user.jobs.find(params[:id])
    if(job.update(job_params))
      render json: job
    else
      render json: {error:job.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    Job.find(params[:id]).destroy
    render json: {message: "Job Deleted"}
  end

  # def drag_job
  #   job = Job.find(params[:id])
  #   if job 

  private

  def job_params
    params.require(:job).permit(:company, :job_title, :salary, :location, :date_applied, :status, :description)
  end

  def set_user
    @user = User.find(params[:user_id])
  end
end
