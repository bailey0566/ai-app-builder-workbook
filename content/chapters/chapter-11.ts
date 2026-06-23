export const chapter11 = {
  id: "chapter-11",
  chapterNumber: 11,
  title: "Testing and Improving",

  sectionTitle: "Building with AI",

  introduction: [
    "Building an app is only part of the process.",
    "Professional developers spend a great deal of time testing and improving their projects.",
    "Mistakes and revisions are a normal part of software development."
  ],

  quote:
    "Finding a problem does not mean you failed. It means you are learning.",

  parts: [
    {
      title: "Finding Problems",

      background: [
        "Testing means using your app the way a real user would.",
        "Even professional software contains bugs.",
        "A bug is simply a problem that needs to be fixed."
      ],

      quote:
        "Bugs are problems to solve, not reasons to quit.",

      leadingQuestions: [
        "Does every button work?",
        "Can users understand what to do?",
        "Are there spelling mistakes?",
        "Are colors easy to see?",
        "Is anything confusing?"
      ],

      examples: [
        {
          problem: "The button does nothing.",
          solution: "Check the JavaScript code."
        },

        {
          problem: "The text is too small.",
          solution: "Increase the font size."
        },

        {
          problem: "Users do not know what to do.",
          solution: "Add instructions."
        },

        {
          problem: "The app looks crowded.",
          solution: "Add more spacing."
        }
      ],

      prompts: [
        {
          type: "checkboxGroup",
          id: "testingChecklist",
          label: "Testing Checklist",
          options: [
            "Buttons work correctly",
            "Instructions are clear",
            "Text is easy to read",
            "Colors are easy to see",
            "Images appear correctly",
            "Information displays correctly",
            "The app solves the intended problem",
            "I tested the app more than once"
          ]
        },

        {
          type: "textarea",
          id: "problem1",
          label: "Problem #1: What happened?"
        },

        {
          type: "textarea",
          id: "problem1Reason",
          label: "Why do I think this happened?"
        },

        {
          type: "textarea",
          id: "problem2",
          label: "Problem #2: What happened?"
        },

        {
          type: "textarea",
          id: "problem2Reason",
          label: "Why do I think this happened?"
        },

        {
          type: "textarea",
          id: "problem3",
          label: "Problem #3: What happened?"
        },

        {
          type: "textarea",
          id: "problem3Reason",
          label: "Why do I think this happened?"
        }
      ]
    },

    {
      title: "Asking AI for Help",

      background: [
        "Even experienced programmers ask for help.",
        "AI can explain problems and suggest solutions.",
        "Clear descriptions usually lead to better answers."
      ],

      quote:
        "Good questions lead to better answers.",

      leadingQuestions: [
        "What exactly is not working?",
        "What did I expect to happen?",
        "What actually happened?",
        "Can I explain the problem clearly?"
      ],

      comparisons: [
        {
          weak: "My app is broken.",
          better:
            "When I press the Save button, nothing happens. Can you help me figure out why?"
        },

        {
          weak: "Fix this.",
          better:
            "My text is difficult to read because the font is too small. How can I make it larger?"
        },

        {
          weak: "I don't understand.",
          better:
            "Can you explain this code like I am a beginner?"
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "promptBuilder",
          label: "Fill in the Blank Prompt"
        },

        {
          type: "textarea",
          id: "problemAsked",
          label: "Problem I Asked About"
        },

        {
          type: "textarea",
          id: "promptUsed",
          label: "The Prompt I Used"
        },

        {
          type: "textarea",
          id: "aiAdvice",
          label: "AI's Advice"
        },

        {
          type: "radioGroup",
          id: "adviceWorked",
          label: "Did the advice help?",
          options: [
            "Yes",
            "Partially",
            "Not Yet"
          ]
        },

        {
          type: "text",
          id: "questionStill1",
          label: "Question I Still Have #1"
        },

        {
          type: "text",
          id: "questionStill2",
          label: "Question I Still Have #2"
        },

        {
          type: "text",
          id: "questionStill3",
          label: "Question I Still Have #3"
        }
      ]
    },

    {
      title: "Making Revisions",

      background: [
        "Revision means making improvements.",
        "Most successful apps go through many versions.",
        "Improvement happens one small change at a time."
      ],

      quote:
        "Improvement happens one small change at a time.",

      leadingQuestions: [
        "What should I improve first?",
        "What feedback have I received?",
        "What feature am I most proud of?"
      ],

      examples: [
        {
          before: "No instructions.",
          after: "Added instructions."
        },

        {
          before: "Small text.",
          after: "Increased font size."
        },

        {
          before: "Only one screen.",
          after: "Added additional screens."
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "improvement1",
          label: "Improvement #1: What did I change?"
        },

        {
          type: "textarea",
          id: "improvementReason1",
          label: "Why did I make this change?"
        },

        {
          type: "textarea",
          id: "improvement2",
          label: "Improvement #2: What did I change?"
        },

        {
          type: "textarea",
          id: "improvementReason2",
          label: "Why did I make this change?"
        },

        {
          type: "textarea",
          id: "improvement3",
          label: "Improvement #3: What did I change?"
        },

        {
          type: "textarea",
          id: "improvementReason3",
          label: "Why did I make this change?"
        },

        {
          type: "textarea",
          id: "version1Notes",
          label: "Version 1: What worked?"
        },

        {
          type: "textarea",
          id: "version1Problems",
          label: "Version 1: What problems existed?"
        },

        {
          type: "textarea",
          id: "version2Changes",
          label: "Version 2 Improvements"
        },

        {
          type: "textarea",
          id: "version3Changes",
          label: "Version 3 Improvements"
        },

        {
          type: "text",
          id: "testerName",
          label: "Who tested my app?"
        },

        {
          type: "textarea",
          id: "positiveFeedback",
          label: "What did they like?"
        },

        {
          type: "textarea",
          id: "suggestions",
          label: "What suggestions did they make?"
        },

        {
          type: "textarea",
          id: "changesBasedOnFeedback",
          label: "What changes will I make?"
        }
      ]
    },

    {
      title: "My Progress Reflection",

      prompts: [
        {
          type: "textarea",
          id: "frustration",
          label: "Something that frustrated me was"
        },

        {
          type: "textarea",
          id: "successfulFix",
          label: "Something I successfully fixed was"
        },

        {
          type: "textarea",
          id: "futureImprovement",
          label: "Something I still want to improve is"
        },

        {
          type: "textarea",
          id: "problemSolvingLesson",
          label: "What have I learned about problem solving?"
        }
      ]
    }
  ],

  reflection: [
    {
      id: "biggestProblem",
      question:
        "What was the biggest problem you discovered?"
    },

    {
      id: "howSolved",
      question:
        "How did you solve it?"
    },

    {
      id: "mostProud",
      question:
        "What are you most proud of so far?"
    },

    {
      id: "adviceForBeginners",
      question:
        "What advice would you give another beginner?"
    }
  ],

  nextChapterMessage:
    "In the next chapter, you will continue refining your project and learn how small improvements can transform a good idea into a great app."
};