# TaskBeam: Simple and Efficient Task Management Application

TaskBeam is a simple yet powerful task management application developed using React Native. This application
demonstrates the essential capabilities of creating, editing, and deleting task cards, with a clear distinction between
completed and ongoing tasks.

## Requirements and Constraints

The application was built keeping in mind the following requirements and constraints:

- The application is developed solely using official React Native libraries.
- The development has been carried out using TypeScript, ensuring type safety and better code readability.
- State management is handled using React's `useContext` and `useReducer` hooks.
- MVVC design pattern is followed, separating concerns and improving maintainability.

## Features

- Task Management: Easily add, modify or delete tasks.
- Task Status: Distinctively identify between completed and ongoing tasks.
- Smooth Experience: The implementation of animations ensures a smooth and interactive experience.
- Cross-Platform: The application is designed to work on both Android and iOS.

## Setup and Execution

Setting up and running TaskBeam is straightforward. You first need to clone the repository and install the dependencies.
The following commands can guide you through this process:

```bash
git clone https://github.com/chuducandev/TaskBeam.git
cd TaskBeam
npm install
```

After the successful installation of dependencies, you can run the project on iOS and Android using the following
commands:

```bash
# for iOS
npm run ios

# for Android
npm run android
```

## Testing and Code Coverage

TaskBeam has a comprehensive suite of unit tests to ensure its functionality. You can run these tests using the
following command:

```bash
npm run test
```

To generate a code coverage report, you can use the following command:

```bash
npm run test:coverage
```

The project maintains an impressive overall code coverage of 85.13%.

## Dependencies

TaskBeam is built using the latest version of React and React Native along with other necessary libraries. Here are some
of the significant dependencies:

- react: 18.2.0
- react-native: 0.72.3
- @testing-library/jest-native: ^5.4.2
- @testing-library/react-hooks: ^8.0.1
- @testing-library/react-native: ^12.1.3
- typesafe-actions: ^5.1.0

Please refer to the `package.json` file in the repository for the complete list of dependencies and devDependencies.

## Conclusion

TaskBeam is a testament to what can be achieved with React Native and TypeScript while adhering strictly to using only
official libraries. It is an efficient and user-friendly task management application that could be easily scaled and
enhanced with more features.

## Future Work

In future iterations, we plan to include features like reminders, categorization of tasks, and integration with APIs for
data persistence.

We look forward to your valuable feedback and suggestions to help us improve TaskBeam.
