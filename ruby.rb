# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
  attr_accessor :model, :wheels, :current_speed

  # Constructor to initialize the Bike with a model and default values
  def initialize(model)
    @model = model
    @wheels = 2
    @current_speed = 0
  end

  # Method to pedal faster and increase the current speed
  def pedal_faster(amount)
    @current_speed += amount
  end

  # Method to brake and decrease the current speed (cannot go negative)
  def brake(amount)
    @current_speed = [0, @current_speed - amount].max
  end

  # Method to get bike information as a string
  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
end