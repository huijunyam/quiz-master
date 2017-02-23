Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :questions, only: [:index, :create, :update, :show, :destroy]
  end
end
