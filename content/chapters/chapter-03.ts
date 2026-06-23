export const chapter03 = {
  id: "chapter-03",
  chapterNumber: 3,
  title: "Defining My App",

  introduction: [
    "Now that you have identified a problem and thought about who will use your app, it is time to begin defining exactly what your app will do.",
    "Many successful apps begin with a simple idea.",
    "Before writing any code, app creators first answer three important questions."
  ],

  numberedList: [
    "What will my app be called?",
    "What problem will my app solve?",
    "What features should my app include?"
  ],

  quote: "Simple ideas often become great projects.",

  parts: [
    {
      title: "Naming My Project",

      background: [
        "Every project needs a name.",
        "A good app name should be easy to remember, easy to say, related to the purpose of the app, and something you enjoy.",
        "You can always change your app name later."
      ],

      bulletPoints: [
        "Easy to remember",
        "Easy to say",
        "Related to the purpose of the app",
        "Something you enjoy"
      ],

      leadingQuestions: [
        "What words describe your app?",
        "What problem does your app solve?",
        "Should the name be serious or fun?",
        "Would someone remember the name after hearing it once?",
        "Does the name tell people what the app does?"
      ],

      exampleTable: {
        headers: ["App Purpose", "Possible App Name"],
        rows: [
          ["Homework reminders", "Homework Helper"],
          ["Pet care reminders", "Pet Pal"],
          ["Daily chores", "Chore Champion"],
          ["Movie organizer", "Movie Match"],
          ["Exercise tracker", "Move More"],
          ["Water reminders", "Hydrate Hero"],
          ["Study flashcards", "Smart Study"]
        ]
      },

      prompts: [
        {
          type: "text",
          id: "nameIdea1",
          label: "Name Idea #1"
        },
        {
          type: "text",
          id: "nameIdea2",
          label: "Name Idea #2"
        },
        {
          type: "text",
          id: "nameIdea3",
          label: "Name Idea #3"
        },
        {
          type: "text",
          id: "nameIdea4",
          label: "Name Idea #4"
        },
        {
          type: "text",
          id: "nameIdea5",
          label: "Name Idea #5"
        },
        {
          type: "text",
          id: "finalAppName",
          label: "My Final App Name"
        },
        {
          type: "textarea",
          id: "whyThisName",
          label: "Why did I choose this name?"
        }
      ]
    },

    {
      title: "Writing My App Purpose Statement",

      background: [
        "A purpose statement explains who the app helps, what problem it solves, and how it helps users.",
        "Think of your purpose statement as the mission of your app.",
        "Good purpose statements are clear and simple."
      ],

      bulletPoints: [
        "Who the app helps",
        "What problem it solves",
        "How it helps users"
      ],

      leadingQuestions: [
        "Who will use the app?",
        "What problem are they experiencing?",
        "How will the app help them?",
        "Why is this problem important?"
      ],

      examples: [
        {
          statement:
            "Homework Helper helps students keep track of assignments so they can stay organized and avoid missing homework."
        },
        {
          statement:
            "Pet Pal helps pet owners remember feeding schedules and important pet care tasks."
        },
        {
          statement:
            "Movie Match helps families choose movies by organizing favorites and suggesting new films."
        }
      ],

      prompts: [
        {
          type: "text",
          id: "purposeAppName",
          label: "My app is called"
        },
        {
          type: "textarea",
          id: "purposeUsers",
          label: "It helps"
        },
        {
          type: "textarea",
          id: "purposeProblem",
          label: "Because they struggle with"
        },
        {
          type: "textarea",
          id: "purposeBenefit",
          label: "It makes their lives easier by"
        },
        {
          type: "textarea",
          id: "fullPurposeStatement",
          label: "My Complete Purpose Statement"
        }
      ]
    },

    {
      title: "Selecting Key Features",

      background: [
        "Features are the things your app can do.",
        "Many beginning designers make one common mistake: they try to include too many features.",
        "Your goal is not to build the biggest app. Your goal is to build a working app."
      ],

      quote: "Simple apps are easier to build and easier to use.",

      leadingQuestions: [
        "What absolutely must the app do?",
        "Which features are most important?",
        "Which features can wait until later?",
        "What would users expect from the app?"
      ],

      examples: [
        {
          app: "Homework Helper",
          features: [
            "Add assignments",
            "Due date reminders",
            "Mark assignments as completed"
          ]
        },
        {
          app: "Pet Pal",
          features: [
            "Feeding reminders",
            "Medication schedule",
            "Pet information page"
          ]
        },
        {
          app: "Movie Match",
          features: [
            "Favorite movie list",
            "Search movies",
            "Mark movies as watched"
          ]
        }
      ],

      prompts: [
        {
          type: "text",
          id: "mustFeature1",
          label: "Must-Have Feature #1"
        },
        {
          type: "textarea",
          id: "mustFeatureReason1",
          label: "Why is this important?"
        },

        {
          type: "text",
          id: "mustFeature2",
          label: "Must-Have Feature #2"
        },
        {
          type: "textarea",
          id: "mustFeatureReason2",
          label: "Why is this important?"
        },

        {
          type: "text",
          id: "mustFeature3",
          label: "Must-Have Feature #3"
        },
        {
          type: "textarea",
          id: "mustFeatureReason3",
          label: "Why is this important?"
        },

        {
          type: "text",
          id: "bonusFeature1",
          label: "Bonus Feature #1"
        },
        {
          type: "text",
          id: "bonusFeature2",
          label: "Bonus Feature #2"
        },
        {
          type: "text",
          id: "bonusFeature3",
          label: "Bonus Feature #3"
        },

        {
          type: "checkboxGroup",
          id: "featureChecklist",
          label: "Features I Plan to Build",
          options: [
            "Add information",
            "Edit information",
            "Delete information",
            "Save progress",
            "Display reminders",
            "Show images",
            "Use buttons",
            "Play sounds",
            "Keep scores",
            "Track progress",
            "Organize lists",
            "Search for information",
            "Display messages"
          ]
        }
      ]
    },

    {
      title: "My App Blueprint",

      prompts: [
        {
          type: "text",
          id: "blueprintName",
          label: "App Name"
        },
        {
          type: "textarea",
          id: "blueprintUsers",
          label: "Who Will Use My App?"
        },
        {
          type: "textarea",
          id: "blueprintProblem",
          label: "What Problem Does It Solve?"
        },
        {
          type: "text",
          id: "mainFeature1",
          label: "Main Feature #1"
        },
        {
          type: "text",
          id: "mainFeature2",
          label: "Main Feature #2"
        },
        {
          type: "text",
          id: "mainFeature3",
          label: "Main Feature #3"
        },
        {
          type: "text",
          id: "optionalFeature1",
          label: "Optional Feature #1"
        },
        {
          type: "text",
          id: "optionalFeature2",
          label: "Optional Feature #2"
        },
        {
          type: "text",
          id: "optionalFeature3",
          label: "Optional Feature #3"
        }
      ]
    }
  ],

  reflection: [
    {
      id: "excitedProject",
      question: "What excites you most about your project?"
    },
    {
      id: "favoriteFeature",
      question: "What feature are you most excited to build?"
    },
    {
      id: "describeApp",
      question:
        "If someone asked you what your app does, what would you tell them?"
    }
  ],

  nextChapterMessage:
    "In the next section, you will begin learning how artificial intelligence can become your creative partner and help bring your ideas to life."
};