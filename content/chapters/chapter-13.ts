import type { Chapter } from "@/lib/workbookTypes";

export const chapter13: Chapter = {
  id: "chapter-13",
  chapterNumber: 13,
  title: "Preparing My Final App",

  sectionTitle: "Completing My Mini Capstone Project",

  introduction: [
    "You have spent time brainstorming, planning, building, testing, and improving your project.",
    "Professional developers complete one final review before sharing their work.",
    "Your goal is to share something useful that you created."
  ],

  quote:
    "Your goal is not perfection. Your goal is to share something useful that you created.",

  parts: [

    {
      title: "Final Review",

      background: [
        "A final review allows you to look at your app through the eyes of a user.",
        "Good creators slow down before sharing their work."
      ],

      leadingQuestions: [
        "Does my app solve the original problem?",
        "Would users understand how to use it?",
        "Is everything working correctly?",
        "Did I include the features I promised?",
        "Am I proud of what I created?"
      ],

      goodExamples: [
        "Does every button work?",
        "Are there spelling mistakes?",
        "Are instructions easy to understand?",
        "Is the design organized?",
        "Does the app do what I planned?"
      ],

      poorExamples: [
        "Is my app perfect?",
        "Does it look exactly like professional software?",
        "Did I build every feature I imagined?"
      ],

      prompts: [
        {
          type: "text",
          id: "finalAppName",
          label: "App Name"
        },

        {
          type: "textarea",
          id: "finalProblemSolved",
          label: "What problem does my app solve?"
        },

        {
          type: "textarea",
          id: "finalUsers",
          label: "Who will use my app?"
        },

        {
          type: "textarea",
          id: "favoriteFeature",
          label: "What feature am I most proud of?"
        },

        {
          type: "textarea",
          id: "stillNeedsImprovement",
          label: "What part of the app still needs improvement?"
        },

        {
          type: "textarea",
          id: "projectSurprise",
          label: "What surprised me during this project?"
        }
      ]
    },

    {
      title: "Functionality Checklist",

      background: [
        "Functionality means your app actually works.",
        "Working features are more important than extra features."
      ],

      quote:
        "A simple app that works well is better than a complicated app that does not work.",

      leadingQuestions: [
        "Does every button work?",
        "Can users understand what to do?",
        "Does information appear correctly?",
        "Did I test everything?"
      ],

      prompts: [
        {
          type: "checkboxGroup",
          id: "basicFunctionality",
          label: "Basic Functions",
          options: [
            "App opens correctly",
            "Home screen appears correctly",
            "Buttons work properly",
            "Instructions are easy to understand",
            "Information displays correctly",
            "Text is easy to read",
            "Colors are easy to see",
            "No major problems prevent users from using the app"
          ]
        },

        {
          type: "text",
          id: "featureOneName",
          label: "Feature #1"
        },

        {
          type: "text",
          id: "featureTwoName",
          label: "Feature #2"
        },

        {
          type: "text",
          id: "featureThreeName",
          label: "Feature #3"
        },

        {
          type: "checkboxGroup",
          id: "testingComplete",
          label: "Testing",
          options: [
            "I tested the app myself",
            "Another person tested my app",
            "I fixed problems I discovered",
            "I saved my most recent version"
          ]
        },

        {
          type: "textarea",
          id: "finalProblem1",
          label: "Problem #1 Found During Final Testing"
        },

        {
          type: "textarea",
          id: "finalFix1",
          label: "How did I fix it?"
        },

        {
          type: "textarea",
          id: "finalProblem2",
          label: "Problem #2 Found During Final Testing"
        },

        {
          type: "textarea",
          id: "finalFix2",
          label: "How did I fix it?"
        },

        {
          type: "textarea",
          id: "finalProblem3",
          label: "Problem #3 Found During Final Testing"
        },

        {
          type: "textarea",
          id: "finalFix3",
          label: "How did I fix it?"
        }
      ]
    },

    {
      title: "User Experience Improvements",

      background: [
        "User experience means how people feel while using your app.",
        "People remember how an app makes them feel."
      ],

      leadingQuestions: [
        "Is my app easy to understand?",
        "Would younger users understand it?",
        "Would people enjoy using it?"
      ],

      examples: [
        {
          before: "No instructions.",
          after: "Added a welcome message."
        },

        {
          before: "Tiny buttons.",
          after: "Larger buttons."
        },

        {
          before: "Confusing labels.",
          after: "Clear button names."
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "uxImprovement1",
          label: "Improvement #1: What change did I make?"
        },

        {
          type: "textarea",
          id: "uxReason1",
          label: "Why did I make this change?"
        },

        {
          type: "textarea",
          id: "uxImprovement2",
          label: "Improvement #2: What change did I make?"
        },

        {
          type: "textarea",
          id: "uxReason2",
          label: "Why did I make this change?"
        },

        {
          type: "textarea",
          id: "uxImprovement3",
          label: "Improvement #3: What change did I make?"
        },

        {
          type: "textarea",
          id: "uxReason3",
          label: "Why did I make this change?"
        },

        {
          type: "textarea",
          id: "futureFeature",
          label: "If I Had More Time, One Feature I Would Add"
        },

        {
          type: "textarea",
          id: "futureRedesign",
          label: "One Thing I Would Redesign"
        },

        {
          type: "textarea",
          id: "futureImprovement",
          label: "One Thing I Would Improve"
        }
      ]
    },

    {
      title: "My Final App Summary",

      prompts: [
        {
          type: "text",
          id: "summaryName",
          label: "My app is called"
        },

        {
          type: "textarea",
          id: "summaryHelps",
          label: "My app helps"
        },

        {
          type: "textarea",
          id: "summaryProblem",
          label: "It solves this problem"
        },

        {
          type: "text",
          id: "summaryFeature1",
          label: "Main Feature #1"
        },

        {
          type: "text",
          id: "summaryFeature2",
          label: "Main Feature #2"
        },

        {
          type: "text",
          id: "summaryFeature3",
          label: "Main Feature #3"
        },

        {
          type: "textarea",
          id: "summaryProudFeature",
          label: "The feature I am most proud of is"
        },

        {
          type: "textarea",
          id: "summaryPride",
          label: "I am proud of my app because"
        },

        {
          type: "imageUpload",
          id: "finalScreenshot",
          label: "Upload Final App Screenshot"
        },

        {
          type: "url",
          id: "vercelLink",
          label: "Published App URL"
        },

        {
          type: "imageUpload",
          id: "additionalScreenshot",
          label: "Additional Screenshot (Optional)"
        }
      ]
    }
  ],

  reflection: [
    {
      id: "hardestPreparation",
      question:
        "What was the most challenging part of preparing your final app?"
    },

    {
      id: "largestImprovement",
      question:
        "What improvement made the biggest difference?"
    },

    {
      id: "helpingOthers",
      question:
        "How does your app help others?"
    },

    {
      id: "selfLearning",
      question:
        "What have you learned about yourself during this project?"
    }
  ],

  nextChapterMessage:
    "In the next chapter, you will prepare to share your work and explain your project to others."
};