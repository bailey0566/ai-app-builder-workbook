import type { Chapter } from "@/lib/workbookTypes";

export const chapter14: Chapter = {
  id: "chapter-14",
  chapterNumber: 14,
  title: "Sharing My Project",

  sectionTitle: "Completing My Mini Capstone Project",

  introduction: [
    "Creating an app is an accomplishment.",
    "Sharing your work is another important part of the process.",
    "The goal is to communicate your ideas and celebrate your work."
  ],

  quote:
    "Sharing your work takes courage, and every creator starts somewhere.",

  parts: [
    {
      title: "Explaining My App",

      background: [
        "People may not immediately understand your app.",
        "As the creator, it is your job to explain what your app does, who it helps, why you created it, and what problem it solves.",
        "Good explanations are simple and easy to understand."
      ],

      quote: "You know your project better than anyone else.",

      leadingQuestions: [
        "What is the name of my app?",
        "What problem does my app solve?",
        "Who uses my app?",
        "Why did I choose this project?",
        "Why is this problem important?"
      ],

      examples: [
        {
          statement:
            "My app is called Homework Helper. It helps students remember assignments and stay organized."
        },
        {
          statement:
            "My app is called Pet Pal. It helps pet owners remember feeding times and appointments."
        },
        {
          statement:
            "My app is called Movie Match. It helps families organize movies they enjoy watching together."
        }
      ],

      prompts: [
        {
          type: "text",
          id: "appName",
          label: "My app is called"
        },
        {
          type: "textarea",
          id: "appHelps",
          label: "It helps"
        },
        {
          type: "textarea",
          id: "problemSolved",
          label: "It solves the problem of"
        },
        {
          type: "textarea",
          id: "whyChosen",
          label: "I chose this project because"
        },
        {
          type: "textarea",
          id: "users",
          label: "The people who would use my app are"
        },
        {
          type: "textarea",
          id: "projectExplanation",
          label: "My Project Explanation"
        },
        {
          type: "textarea",
          id: "oneSentenceSummary",
          label: "One-Sentence Summary"
        },

        {
          type: "url",
          id: "publishedAppUrl",
          label: "Published App Link"
        },
        {
          type: "imageUpload",
          id: "presentationScreenshot",
          label: "Upload a Screenshot for Your Portfolio"
        }
      ]
    },

    {
      title: "Demonstrating Features",

      background: [
        "A demonstration shows others what your app can do.",
        "When demonstrating your app, focus on the most important features.",
        "You do not need to show everything."
      ],

      quote: "Show what works best.",

      leadingQuestions: [
        "Which feature should I show first?",
        "Which feature am I most proud of?",
        "What would users find most useful?",
        "In what order should I demonstrate features?"
      ],

      examples: [
        {
          app: "Homework Tracker",
          steps: "- Add homework.\n- View assignments.\n- Mark assignments complete."
        },
        {
          app: "Pet Care App",
          steps: "- Add pet information.\n- View feeding schedule.\n- Display reminders."
        },
        {
          app: "Movie Tracker",
          steps: "- Add movies.\n- Save favorites.\n- Mark movies watched."
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "demoFeature1",
          label: "Feature #1: What will I show?"
        },
        {
          type: "textarea",
          id: "demoFeature1Why",
          label: "Why is this feature important?"
        },
        {
          type: "textarea",
          id: "demoFeature2",
          label: "Feature #2: What will I show?"
        },
        {
          type: "textarea",
          id: "demoFeature2Why",
          label: "Why is this feature important?"
        },
        {
          type: "textarea",
          id: "demoFeature3",
          label: "Feature #3: What will I show?"
        },
        {
          type: "textarea",
          id: "demoFeature3Why",
          label: "Why is this feature important?"
        },

        {
          type: "text",
          id: "demoStep1",
          label: "Demonstration Step 1"
        },
        {
          type: "text",
          id: "demoStep2",
          label: "Demonstration Step 2"
        },
        {
          type: "text",
          id: "demoStep3",
          label: "Demonstration Step 3"
        },
        {
          type: "text",
          id: "demoStep4",
          label: "Demonstration Step 4"
        },

        {
          type: "textarea",
          id: "openingStatement",
          label: "What would you say first?"
        },
        {
          type: "textarea",
          id: "showNext",
          label: "What would you show next?"
        },
        {
          type: "textarea",
          id: "favoriteDemoFeature",
          label: "What feature are you most excited to demonstrate?"
        },

        {
          type: "videoUpload",
          id: "demoVideo",
          label: "Upload a Short Demo Video"
        },
        {
          type: "imageUpload",
          id: "featureScreenshot1",
          label: "Feature Screenshot #1"
        },
        {
          type: "imageUpload",
          id: "featureScreenshot2",
          label: "Feature Screenshot #2"
        }
      ]
    },

    {
      title: "Receiving Feedback",

      background: [
        "Feedback helps creators improve.",
        "Feedback is not criticism. Feedback is information that helps us learn and grow.",
        "Professional developers receive feedback throughout the design process."
      ],

      quote: "Feedback helps good ideas become even better.",

      leadingQuestions: [
        "What do people like about my app?",
        "What suggestions do they have?",
        "What surprised them?",
        "What improvements do they recommend?",
        "Which suggestions do I want to use?"
      ],

      examples: [
        {
          feedback: "I like how easy it is to use.",
          possibleAction: "Keep the design simple."
        },
        {
          feedback: "The buttons are hard to see.",
          possibleAction: "Make the buttons larger."
        },
        {
          feedback: "I wish there were instructions.",
          possibleAction: "Add directions to the home screen."
        }
      ],

      prompts: [
        {
          type: "text",
          id: "feedbackPerson1",
          label: "Person #1 Name"
        },
        {
          type: "textarea",
          id: "person1Liked",
          label: "What did they like?"
        },
        {
          type: "textarea",
          id: "person1Suggestions",
          label: "What suggestions did they make?"
        },

        {
          type: "text",
          id: "feedbackPerson2",
          label: "Person #2 Name"
        },
        {
          type: "textarea",
          id: "person2Liked",
          label: "What did they like?"
        },
        {
          type: "textarea",
          id: "person2Suggestions",
          label: "What suggestions did they make?"
        },

        {
          type: "text",
          id: "feedbackPerson3",
          label: "Person #3 Name"
        },
        {
          type: "textarea",
          id: "person3Liked",
          label: "What did they like?"
        },
        {
          type: "textarea",
          id: "person3Suggestions",
          label: "What suggestions did they make?"
        },

        {
          type: "textarea",
          id: "suggestion1",
          label: "Suggestion #1"
        },
        {
          type: "radioGroup",
          id: "useSuggestion1",
          label: "Will I use this suggestion?",
          options: ["Yes", "Maybe", "No"]
        },
        {
          type: "textarea",
          id: "suggestion1Why",
          label: "Why?"
        },

        {
          type: "textarea",
          id: "suggestion2",
          label: "Suggestion #2"
        },
        {
          type: "radioGroup",
          id: "useSuggestion2",
          label: "Will I use this suggestion?",
          options: ["Yes", "Maybe", "No"]
        },
        {
          type: "textarea",
          id: "suggestion2Why",
          label: "Why?"
        },

        {
          type: "checkboxGroup",
          id: "presentationNotes",
          label: "Things I want to remember when presenting",
          options: [
            "Speak slowly",
            "Explain the problem first",
            "Demonstrate one feature at a time",
            "Do not worry about being perfect",
            "Answer questions honestly",
            "Be proud of my work",
            "Thank people for their feedback"
          ]
        }
      ]
    },

    {
      title: "Portfolio Showcase",

      background: [
        "Your portfolio is a record of what you created and how you grew.",
        "A strong portfolio includes your app link, screenshots, explanation, feedback, and reflection.",
        "This section can help your instructor understand your work and help you remember what you accomplished."
      ],

      prompts: [
        {
          type: "url",
          id: "finalAppLink",
          label: "Final App Link"
        },
        {
          type: "url",
          id: "githubLink",
          label: "Code or GitHub Link (Optional)"
        },
        {
          type: "imageUpload",
          id: "portfolioImage1",
          label: "Portfolio Image #1"
        },
        {
          type: "imageUpload",
          id: "portfolioImage2",
          label: "Portfolio Image #2"
        },
        {
          type: "textarea",
          id: "portfolioCaption",
          label: "Portfolio Caption"
        },
        {
          type: "textarea",
          id: "creatorStatement",
          label: "Creator Statement"
        },
        {
          type: "radioGroup",
          id: "showcasePermission",
          label: "May your project be included in a class showcase?",
          options: ["Yes", "Ask me first", "No"]
        }
      ]
    }
  ],

  reflection: [
    {
      id: "excitedToShare",
      question:
        "What part of your app are you most excited to share?"
    },
    {
      id: "complimentsReceived",
      question:
        "What compliments did you receive?"
    },
    {
      id: "helpfulSuggestions",
      question:
        "What suggestions helped you the most?"
    },
    {
      id: "sharingFeeling",
      question:
        "How did it feel to share something you created?"
    }
  ],

  nextChapterMessage:
    "In the final chapter, you will reflect on your experience, celebrate your accomplishments, and think about what you want to create next."
};