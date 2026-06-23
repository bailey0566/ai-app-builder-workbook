export const chapter09 = {
  id: "chapter-09",
  chapterNumber: 9,
  title: "Preparing for Development",

  sectionTitle: "Designing My App",

  introduction: [
    "You have spent time identifying problems, understanding users, brainstorming ideas, and planning your project.",
    "Before builders begin construction, they review their plans one final time.",
    "Software developers do the same thing."
  ],

  quote: "Planning first makes building easier.",

  parts: [
    {
      title: "Finalizing Features",

      background: [
        "Many projects become difficult because creators try to build too much.",
        "Professional software developers often release simple versions first and add improvements later.",
        "Version 1 should focus on solving the main problem."
      ],

      quote: "Finished is better than perfect.",

      leadingQuestions: [
        "Which features are absolutely necessary?",
        "Which features are optional?",
        "What problem am I solving?",
        "Which features can wait until later?",
        "Can I realistically finish this during the internship?"
      ],

      examples: [
        {
          app: "Homework Tracker",
          versionOne: [
            "Add homework",
            "View assignments",
            "Mark assignments completed"
          ],
          futureFeatures: [
            "Notifications",
            "Calendar integration",
            "Color themes"
          ]
        },

        {
          app: "Pet Care App",
          versionOne: [
            "Add pet names",
            "Feeding schedule",
            "Appointment reminders"
          ],
          futureFeatures: [
            "Photos",
            "Multiple users",
            "Maps"
          ]
        },

        {
          app: "Movie Tracker",
          versionOne: [
            "Save movies",
            "Mark movies watched",
            "Favorite movie list"
          ],
          futureFeatures: [
            "Movie reviews",
            "Star ratings",
            "Recommendations"
          ]
        }
      ],

      prompts: [
        {
          type: "text",
          id: "mustFeature1",
          label: "Feature #1 (Must Have)"
        },

        {
          type: "textarea",
          id: "mustFeatureReason1",
          label: "Why is it important?"
        },

        {
          type: "text",
          id: "mustFeature2",
          label: "Feature #2 (Must Have)"
        },

        {
          type: "textarea",
          id: "mustFeatureReason2",
          label: "Why is it important?"
        },

        {
          type: "text",
          id: "mustFeature3",
          label: "Feature #3 (Must Have)"
        },

        {
          type: "textarea",
          id: "mustFeatureReason3",
          label: "Why is it important?"
        },

        {
          type: "text",
          id: "futureFeature1",
          label: "Future Feature #1"
        },

        {
          type: "text",
          id: "futureFeature2",
          label: "Future Feature #2"
        },

        {
          type: "text",
          id: "futureFeature3",
          label: "Future Feature #3"
        },

        {
          type: "text",
          id: "futureFeature4",
          label: "Future Feature #4"
        },

        {
          type: "text",
          id: "priorityA",
          label: "Feature A Priority"
        },

        {
          type: "text",
          id: "priorityB",
          label: "Feature B Priority"
        },

        {
          type: "text",
          id: "priorityC",
          label: "Feature C Priority"
        },

        {
          type: "text",
          id: "priorityD",
          label: "Feature D Priority"
        },

        {
          type: "text",
          id: "priorityE",
          label: "Feature E Priority"
        }
      ]
    },

    {
      title: "Reviewing the Project Plan",

      background: [
        "Before writing code, it is helpful to review everything you have learned so far.",
        "Think of this as your project's blueprint."
      ],

      leadingQuestions: [
        "What problem am I solving?",
        "Who will use my app?",
        "What is my app called?",
        "What are the three most important features?",
        "Why does this project matter?"
      ],

      examples: [
        {
          appName: "Homework Helper",
          problem: "Students forget assignments.",
          users: "Middle school students.",
          features: [
            "Add homework",
            "View assignments",
            "Mark assignments completed"
          ]
        }
      ],

      prompts: [
        {
          type: "text",
          id: "blueprintName",
          label: "App Name"
        },

        {
          type: "textarea",
          id: "blueprintProblem",
          label: "Problem My App Solves"
        },

        {
          type: "textarea",
          id: "blueprintUsers",
          label: "Who Will Use My App?"
        },

        {
          type: "textarea",
          id: "problemImportance",
          label: "Why Does This Problem Matter?"
        },

        {
          type: "text",
          id: "topFeature1",
          label: "Most Important Feature #1"
        },

        {
          type: "text",
          id: "topFeature2",
          label: "Most Important Feature #2"
        },

        {
          type: "text",
          id: "topFeature3",
          label: "Most Important Feature #3"
        },

        {
          type: "textarea",
          id: "purposeStatement",
          label: "My Purpose Statement"
        },

        {
          type: "textarea",
          id: "elevatorPitch",
          label: "Elevator Pitch"
        }
      ]
    },

    {
      title: "Ready to Build",

      background: [
        "Beginning a project can feel exciting and scary at the same time.",
        "Professional programmers constantly learn while they build.",
        "The goal is not perfection. The goal is progress."
      ],

      quote:
        "You do not have to know how to build everything today.",

      leadingQuestions: [
        "Am I ready to begin?",
        "What excites me most?",
        "What worries me most?",
        "What can I ask AI to help me with?",
        "What is the first step?"
      ],

      prompts: [
        {
          type: "textarea",
          id: "excitedAbout",
          label: "The part I am most excited about is"
        },

        {
          type: "textarea",
          id: "nervousAbout",
          label: "The part I am most nervous about is"
        },

        {
          type: "checkboxGroup",
          id: "stuckStrategies",
          label: "If I get stuck, I can",
          options: [
            "Ask AI for help",
            "Ask my instructor",
            "Review previous chapters",
            "Work with classmates",
            "Try a different approach",
            "Take a short break and try again"
          ]
        },

        {
          type: "textarea",
          id: "firstBuildGoal",
          label: "The first thing I plan to build is"
        },

        {
          type: "textarea",
          id: "firstScreen",
          label: "The first screen I want users to see is"
        },

        {
          type: "textarea",
          id: "firstFeature",
          label: "The first feature I want working is"
        },

        {
          type: "checkboxGroup",
          id: "developmentPromise",
          label: "I promise to",
          options: [
            "Keep trying when things are difficult",
            "Ask questions when I need help",
            "Focus on progress instead of perfection",
            "Respect other students and their ideas",
            "Use AI responsibly",
            "Finish what I start"
          ]
        },

        {
          type: "checkboxGroup",
          id: "readyChecklist",
          label: "Ready to Build Checklist",
          options: [
            "I know the problem my app solves",
            "I know who will use my app",
            "I have chosen an app name",
            "I have written a purpose statement",
            "I have selected my main features",
            "I have identified future features",
            "I know my first build goal",
            "I am ready to begin"
          ]
        }
      ]
    }
  ],

  reflection: [
    {
      id: "proudOf",
      question:
        "What part of your app are you most proud of so far?"
    },

    {
      id: "expectedChallenge",
      question:
        "What challenge do you expect to face?"
    },

    {
      id: "rememberWhileBuilding",
      question:
        "What is one thing you want to remember while building?"
    }
  ],

  nextChapterMessage:
    "You now have a plan. You are ready to build."
};