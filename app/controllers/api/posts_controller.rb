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
    @post = Post.new(post_params)

    if @post.save
      render json: @post
    else
      message ="naw"
      render json: message
    end
  end
  
  def destroy
  end

  private
  def post_params
    params.require(:post).permit(:title, :body, :user_id)
  end

end
