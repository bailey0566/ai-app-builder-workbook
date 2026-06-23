import type { Chapter } from "@/lib/workbookTypes";

export const chapter08: Chapter = {
  id: "chapter-08",
  chapterNumber: 8,
  title: "Thinking Like a User",

  sectionTitle: "Designing My App",

  introduction: [
    "Great apps are built for the people who will actually use them.",
    "Good designers think about the user's experience.",
    "The goal of good design is not to impress people. The goal is to help people."
  ],

  quote:
    "If users become confused, the design needs improvement, not the user.",

  parts: [
    {
      title: "Simplicity and Accessibility",

      background: [
        "Simple apps are easier to use.",
        "Accessibility means making sure many different people can successfully use your app.",
        "Good apps make people feel comfortable and successful."
      ],

      quote:
        "Simple does not mean boring. Simple means clear.",

      bulletPoints: [
        "Some people read quickly.",
        "Some people need larger text.",
        "Some people become overwhelmed by too many choices.",
        "Some people prefer pictures.",
        "Some people need clear instructions."
      ],

      leadingQuestions: [
        "Can users understand what to do?",
        "Is there too much information on the screen?",
        "Are buttons easy to find?",
        "Would someone younger understand my app?",
        "Could someone use my app without needing help?"
      ],

      goodExamples: [
        "Large buttons",
        "Easy-to-read text",
        "Clear instructions",
        "Few choices",
        "Organized layout"
      ],

      poorExamples: [
        "Tiny text",
        "Too many buttons",
        "Crowded screens",
        "Confusing instructions",
        "Too much information"
      ],

      prompts: [
        {
          type: "checkboxGroup",
          id: "userFeelings",
          label: "I want users to feel",
          options: [
            "Calm",
            "Happy",
            "Excited",
            "Comfortable",
            "Confident",
            "Relaxed",
            "Successful"
          ]
        },

        {
          type: "textarea",
          id: "possibleUsers",
          label: "People who might use my app include"
        },

        {
          type: "checkboxGroup",
          id: "userNeeds",
          label: "Some users may need",
          options: [
            "Larger text",
            "Pictures",
            "Simple instructions",
            "Bright colors",
            "Fewer choices",
            "Audio support",
            "Reminders"
          ]
        },

        {
          type: "textarea",
          id: "accessibilityIdeas",
          label: "How can I make my app easier to use?"
        }
      ]
    },

    {
      title: "User-Friendly Design",

      background: [
        "User-friendly design means people can quickly understand how to use your app.",
        "Good apps help users succeed without making them think too hard."
      ],

      quote: "Good design feels natural.",

      bulletPoints: [
        "You knew where to tap.",
        "The buttons made sense.",
        "The screens felt organized.",
        "You did not need a long instruction manual."
      ],

      leadingQuestions: [
        "Can users easily find buttons?",
        "Are labels easy to understand?",
        "Does the app feel organized?",
        "Does the user know what to do first?",
        "Would users feel frustrated or comfortable?"
      ],

      goodExamples: [
        "Add Homework",
        "Save",
        "Start Game",
        "Next",
        "Submit"
      ],

      poorExamples: [
        "Button 1",
        "Option A",
        "Click Here",
        "Continue Process"
      ],

      prompts: [
        {
          type: "textarea",
          id: "firstThingSeen",
          label: "The first thing users should see is"
        },

        {
          type: "textarea",
          id: "importantButton",
          label: "The most important button on my app is"
        },

        {
          type: "textarea",
          id: "usersUnderstand",
          label:
            "I want users to immediately understand how to"
        },

        {
          type: "radioGroup",
          id: "startQuestion",
          label: "Would users know how to start?",
          options: ["Yes", "Maybe", "No"]
        },

        {
          type: "radioGroup",
          id: "screenQuestion",
          label: "Would users know how to move between screens?",
          options: ["Yes", "Maybe", "No"]
        },

        {
          type: "radioGroup",
          id: "saveQuestion",
          label: "Would users know how to save information?",
          options: ["Yes", "Maybe", "No"]
        },

        {
          type: "radioGroup",
          id: "finishQuestion",
          label: "Would users know how to finish using the app?",
          options: ["Yes", "Maybe", "No"]
        },

        {
          type: "textarea",
          id: "userImprovements",
          label: "What improvements might help users?"
        }
      ]
    },

    {
      title: "Making Apps Easy to Understand",

      background: [
        "Good apps communicate clearly.",
        "Users should not have to guess what things mean.",
        "Apps should work like road signs by communicating information quickly."
      ],

      quote: "Confusion is the enemy of good design.",

      leadingQuestions: [
        "Are my instructions clear?",
        "Are my words easy to understand?",
        "Would younger users understand my language?",
        "Do my buttons clearly explain what they do?",
        "Could I replace long instructions with shorter ones?"
      ],

      comparisons: [
        {
          weak:
            "Proceed with educational task documentation input procedures.",
          better:
            "Enter your homework assignment and press Save."
        },

        {
          weak:
            "Database submission successfully completed.",
          better:
            "Great job! Your assignment was saved."
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "rewrite1",
          label:
            'Rewrite: "The operation has been executed successfully."'
        },

        {
          type: "textarea",
          id: "rewrite2",
          label:
            'Rewrite: "Proceed to the next interface."'
        },

        {
          type: "textarea",
          id: "rewrite3",
          label:
            'Rewrite: "User input is required."'
        },

        {
          type: "text",
          id: "buttonOne",
          label: "Button #1"
        },

        {
          type: "text",
          id: "buttonTwo",
          label: "Button #2"
        },

        {
          type: "text",
          id: "buttonThree",
          label: "Button #3"
        },

        {
          type: "text",
          id: "buttonFour",
          label: "Button #4"
        },

        {
          type: "textarea",
          id: "completionMessage",
          label:
            "What message will users see after they complete a task?"
        },

        {
          type: "textarea",
          id: "homeInstructions",
          label:
            "What instructions will appear on the home screen?"
        },

        {
          type: "textarea",
          id: "myUser",
          label: "My user is"
        },

        {
          type: "text",
          id: "userAge",
          label: "Their age is"
        },

        {
          type: "textarea",
          id: "userGoal",
          label: "They want to"
        },

        {
          type: "textarea",
          id: "userStruggle",
          label: "They might struggle with"
        },

        {
          type: "textarea",
          id: "appHelpsUser",
          label: "My app helps them by"
        },

        {
          type: "textarea",
          id: "userSays",
          label: "I want them to say"
        }
      ]
    }
  ],

  reflection: [
    {
      id: "userFriendlyMeaning",
      question:
        'What does "user-friendly" mean to you?'
    },

    {
      id: "frustratingApps",
      question:
        "What is one thing that makes apps frustrating?"
    },

    {
      id: "easyToUnderstand",
      question:
        "How can you make your app easier to understand?"
    },

    {
      id: "rememberMost",
      question:
        "What do you want users to remember most about your app?"
    }
  ],

  nextChapterMessage:
    "In the next chapter, you will begin preparing your app for development and turning your ideas into something people can actually use."
};