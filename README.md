# Team Profile Generator

This is a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, how we design our code is just as important as the code itself. This Node CLI takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.

## Instructions

You will build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

- Use the Inquirer to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.
- Your app will run as a Node CLI to gather information about each employee.
- Below is an example of what your application may look like. Remember, the styling is completely up to you so try to make it unique.

The dependencies are Jest for running the provided tests, and Inquirer for collecting input from the user. There are also unit tests to help you build the classes necessary. It is recommended that you follow this workflow:

1. Run tests
2. Create or update classes to pass a single test case
3. Repeat

Remember: you can run the tests at any time with `npm run test`

### Hints

- You will want to make your methods as pure as possible. Make your methods simple so that they are easier to test.
- The different employee types should all inherit some methods and properties from a base class of `Employee`.

## Requirements

- User can use the CLI to generate an HTML page that displays information about their team.
- All tests must pass.

### Classes

The project must have the these classes: `Employee`, `Manager`, `Engineer`, `Intern`. The tests for these classes in the `tests` directory must all pass.

### Roster output

The project must generate a `team.html` page in the `output` directory that displays a formatted team roster. Each team member should display the following:

- Name
- Role
- ID
- Role-specific property

## Bonus

- Use validation to ensure that the information provided is in the proper expected format.
- Add the application to your portfolio.
