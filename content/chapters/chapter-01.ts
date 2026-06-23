import type { Chapter } from "@/lib/workbookTypes";

export const chapter01: Chapter = {
  id: "chapter-01",
  chapterNumber: 1,
  title: "What Problems Need Solving?",
  introduction: [
    "Before people build apps, they first identify a problem.",
    "Some of the most successful apps in the world began with simple frustrations.",
    "Apps do not have to solve huge problems. Many useful apps solve small problems that people experience every day."
  ],

  quote: "Good apps solve real problems.",

  parts: [
    {
      title: "Everyday Problems Around Me",

      background: [
        "Think about your daily life.",
        "You probably encounter small challenges every day without even realizing it.",
        "These problems can become opportunities for creating something useful."
      ],

      leadingQuestions: [
        "What do you do every day?",
        "What tasks take too much time?",
        "What do you often forget?",
        "What problems do your family members have?",
        "What problems do your friends complain about?",
        "What do you wish was easier?"
      ],

      exampleTable: {
        headers: ["Situation", "Possible Problem"],
        rows: [
          ["School", "Forgetting assignments"],
          ["Home", "Forgetting chores"],
          ["Sports", "Losing track of practice times"],
          ["Pets", "Forgetting feeding schedules"],
          ["Gaming", "Keeping track of favorite games"],
          ["Health", "Remembering medications"],
          ["Entertainment", "Choosing movies to watch"],
          ["Shopping", "Remembering what to buy"]
        ]
      },

      prompts: [
        {
          type: "textarea",
          id: "problem1",
          label: "Problem #1"
        },
        {
          type: "textarea",
          id: "problem2",
          label: "Problem #2"
        },
        {
          type: "textarea",
          id: "problem3",
          label: "Problem #3"
        },
        {
          type: "textarea",
          id: "problem4",
          label: "Problem #4"
        },
        {
          type: "textarea",
          id: "problem5",
          label: "Problem #5"
        }
      ]
    },

    {
      title: "Things That Frustrate Me",

      background: [
        "Frustration is not always bad.",
        "Sometimes frustration points us toward something that needs improvement.",
        "Many inventions and apps were created because someone became frustrated and decided to do something about it."
      ],

      quote: "What bothers me enough that I would like to fix it?",

      leadingQuestions: [
        "What annoys you?",
        "What wastes your time?",
        "What do you complain about?",
        "What makes school harder than it needs to be?",
        "What do you often forget?",
        "What do you wish someone would invent?"
      ],

      examples: [
        {
          problem: "I never know what homework I have.",
          appIdea: "Homework Tracker"
        },
        {
          problem: "I forget to feed my dog.",
          appIdea: "Pet Care Reminder"
        },
        {
          problem: "I can never decide what movie to watch.",
          appIdea: "Movie Picker"
        },
        {
          problem: "I forget to drink water.",
          appIdea: "Hydration Reminder"
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "frustration",
          label: "Something that frustrates me is"
        },
        {
          type: "textarea",
          id: "because",
          label: "Because"
        },
        {
          type: "textarea",
          id: "easierWay",
          label: "I wish there was an easier way to"
        },
        {
          type: "textarea",
          id: "appCouldHelp",
          label: "An app could help by"
        }
      ]
    },

    {
      title: "Problems Worth Solving",

      background: [
        "Not every problem needs an app."
      ],

      principles: [
        {
          title: "Real",
          description: "People actually experience it."
        },
        {
          title: "Useful",
          description: "The solution would help someone."
        },
        {
          title: "Interesting",
          description: "You care enough about the problem to spend time building it."
        },
        {
          title: "Simple",
          description: "The project can be completed in a short amount of time."
        }
      ],

      leadingQuestions: [
        "Is this a real problem?",
        "Would someone actually use this?",
        "Would I enjoy building this?",
        "Can I finish this project during the internship?"
      ],

      examples: [
        {
          strength: "Strong",
          problem: "I forget assignments.",
          appIdea: "Homework Reminder App",
          explanation: "Many students experience this problem."
        },
        {
          strength: "Strong",
          problem: "I forget my chores.",
          appIdea: "Daily Chore Tracker",
          explanation: "Simple and useful."
        },
        {
          strength: "Weak",
          problem: "I want to build the next Fortnite.",
          explanation: "The project is too large for two weeks."
        }
      ],

      prompts: []
    }
  ],

  reflection: [
    {
      id: "favoriteIdea",
      question: "Which idea excites you the most?"
    },
    {
      id: "whyImportant",
      question: "Why does this idea matter to you?"
    },
    {
      id: "continueExploring",
      question: "Which idea would you like to continue exploring?"
    }
  ],

  nextChapterMessage:
    "The next chapter will help you decide who will use your app and why their needs matter."
};