# This assignment was made as a part of a frontend assessment done for schiphol

# Usage

- This project was made using nextjs 15 and pnpm 9.5.0
- To get started first run pnpm install in the root directory
- To run the project use pnpm dev
- To run test use pnpm test

# additional notes

The api is mocked and imported from a provided json file. Through the usage of the api folder -> flights -> route.ts there is an example of how an async function would fetch data

Filtering has more options than was stated in the assignment, the function to only use a single key to filter has also been built and is also in the file but commented out.

A flight will always display only the originalTime unless a flight is delayed, then it will display both times with the originalTime crossed out. I updated 1 of the flights to reflect this in the front-end.

Below is the assignment received assignment

# Assignment

Please create a page that contains an input field.
When the user enters _at least_ three characters into this input field,
you should display all flight information from the `flights.json` file where the destination airport matches the entered input.
Limit the search result to a maximum of 5 flights.

Please implement it using React. Try to keep it simple.

We think 4 hours should be enough to spend on this assignment.
Please don't spend more than that unless you're having fun and want to show off :)

## Requirements:

- Use React. Create your app with React but try to limit the use of third party UI libraries.
- Use Typescript. Make sure your app is typed correctly.
- Make it look nice. Make use of the provided colors. How you want to implement them is entirely your choice ;)
- Your application should treat the contents of `flights.json` as the output of an API endpoint.
  It should load this asynchronously using XHR or Fetch API and should not require a page reload when the user changes their input.
- Make sure the results are sortable. The filtered flight data should be sortable on date and (expected) time. Initial expected sorting is early to late.

## Submission:

- Create a clone of this repository locally.
  Then push it to **your GitHub account** and continue working from there.
  Once you have finished, please send us the URL of the repository you have created.

### Some things to consider:

- We like DRY and KISS
- We like tested code
- We like readable code
- We like using the latest features of ES6 where applicable
- Last but not least, have fun!
