class Api::PostsController < ApplicationController

  def index
    @posts =  current_user.posts.all
    render json: @posts
  end

  def show
  end

  def update
  end 

  def create
  end
  
  def destroy
  end

end
