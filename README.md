# WorkoutFitnessTracker

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

The user should be able to:

  * Add exercises to the most recent workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

  * View the total duration of each workout from the past seven workouts on the `stats` page.

> **Important:** Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.

To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. Be sure to use the following guides for support:

  * [Set Up MongoDB Atlas](../supplemental/mongo_atlas_setup.md)

  * [Deploy with Heroku and MongoDB Atlas](../supplemental/mongo_atlas_deploy.md)

  ## Application
  ![fitnessStart](https://user-images.githubusercontent.com/70153419/105610566-3a482080-5d7e-11eb-9a7a-82929dc1134b.PNG)

  ![addexcersieData](https://user-images.githubusercontent.com/70153419/105610538-14228080-5d7e-11eb-9418-30996eceda05.PNG)
  ![dataCompleteWorkout](https://user-images.githubusercontent.com/70153419/105610559-2f8d8b80-5d7e-11eb-9ef2-094d23be87cb.PNG)
  ![lastWorkoutData](https://user-images.githubusercontent.com/70153419/105610573-47650f80-5d7e-11eb-8967-cd39bab67dfb.PNG)

  


## Questions and Comments

You are required to submit the following:

* Email: silverman.tyler@gmail.com

* Github: tylersilverman

