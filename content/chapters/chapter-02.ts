export const chapter02 = {
  id: "chapter-02",
  chapterNumber: 2,
  title: "Who Will Use My App?",

  introduction: [
    "A great app is not just about what you want. Great apps are designed to help other people.",
    "Before building an app, it is important to think about the people who will actually use it.",
    "Understanding your users helps you make better decisions about what features to include and how your app should work."
  ],

  quote: "Apps are built for people.",

  parts: [
    {
      title: "Identifying Users",

      background: [
        "A user is the person who uses your app.",
        "Many successful apps solve problems for a specific group of people.",
        "When you know who your users are, you can create something they will actually enjoy using."
      ],

      bulletPoints: [
        "Students",
        "Parents",
        "Teachers",
        "Athletes",
        "Pet owners",
        "Gamers",
        "Families",
        "Friends",
        "Yourself"
      ],

      examples: [
        {
          service: "Spotify",
          audience: "Music listeners"
        },
        {
          service: "Duolingo",
          audience: "Language learners"
        },
        {
          service: "Google Maps",
          audience: "Travelers"
        },
        {
          service: "YouTube",
          audience: "People looking for videos"
        }
      ],

      leadingQuestions: [
        "Who experiences this problem?",
        "Who would benefit from your app?",
        "Would children use your app?",
        "Would adults use your app?",
        "Is this app mainly for you?",
        "Is this app for a hobby or interest group?"
      ],

      exampleTable: {
        headers: ["App Idea", "Primary Users"],
        rows: [
          ["Homework Tracker", "Students"],
          ["Pet Reminder App", "Pet Owners"],
          ["Soccer Practice App", "Athletes"],
          ["Recipe Organizer", "Families"],
          ["Mood Journal", "Teenagers"],
          ["Video Game Collection App", "Gamers"],
          ["Chore Tracker", "Children and Parents"]
        ]
      },

      prompts: [
        {
          type: "checkboxGroup",
          id: "mainAudience",
          label: "My app is mainly for",
          options: [
            "Me",
            "Students",
            "Teachers",
            "Parents",
            "Kids",
            "Teenagers",
            "Adults",
            "Families",
            "Pet Owners",
            "Gamers",
            "Athletes"
          ]
        },
        {
          type: "textarea",
          id: "whoUsesApp",
          label: "The people who would use my app are"
        },
        {
          type: "textarea",
          id: "whyUseApp",
          label: "Why would these people want to use my app?"
        },
        {
          type: "textarea",
          id: "userGroup1",
          label: "User Group #1"
        },
        {
          type: "textarea",
          id: "userGroup2",
          label: "User Group #2"
        },
        {
          type: "textarea",
          id: "userGroup3",
          label: "User Group #3"
        }
      ]
    },

    {
      title: "Understanding User Needs",

      background: [
        "People use apps because they need help with something.",
        "Good app designers ask 'What does the user need?' instead of 'What do I think is cool?'"
      ],

      bulletPoints: [
        "Remembering things",
        "Staying organized",
        "Saving time",
        "Learning new information",
        "Having fun",
        "Tracking progress",
        "Solving problems"
      ],

      leadingQuestions: [
        "What problem does the user have?",
        "What frustrates the user?",
        "What would make life easier for the user?",
        "What information does the user need?",
        "What would save the user time?",
        "What would make the experience enjoyable?"
      ],

      examples: [
        {
          user: "Student",
          need: "Remember assignments",
          feature: "Homework reminders"
        },
        {
          user: "Dog Owner",
          need: "Remember feeding times",
          feature: "Daily notifications"
        },
        {
          user: "Movie Fan",
          need: "Keep track of movies already watched",
          feature: "Favorite movie list"
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "userNeeds",
          label: "My users need help with"
        },
        {
          type: "textarea",
          id: "biggestChallenge",
          label: "Their biggest challenge is"
        },
        {
          type: "textarea",
          id: "lifeEasier",
          label: "My app could make their lives easier by"
        },
        {
          type: "textarea",
          id: "userName",
          label: "User Name (Real or Imaginary)"
        },
        {
          type: "text",
          id: "userAge",
          label: "Age"
        },
        {
          type: "textarea",
          id: "userProblem",
          label: "What problem do they have?"
        },
        {
          type: "textarea",
          id: "wishEasier",
          label: "What do they wish was easier?"
        },
        {
          type: "textarea",
          id: "howAppHelps",
          label: "How could your app help them?"
        }
      ]
    },

    {
      title: "Designing with Others in Mind",

      background: [
        "Sometimes people forget that not everyone thinks the same way.",
        "Good designers create apps that are easy to understand and easy to use."
      ],

      quote: "Simple is usually better.",

      bulletPoints: [
        "Read quickly",
        "Need larger text",
        "Prefer simple instructions",
        "Like colorful designs",
        "Need reminders",
        "Become overwhelmed by too many choices"
      ],

      leadingQuestions: [
        "Would the buttons be easy to understand?",
        "Would younger users understand your app?",
        "Would the text be easy to read?",
        "Would users know what to do first?",
        "Could someone use your app without needing lots of instructions?"
      ],

      goodExamples: [
        "Large buttons",
        "Simple words",
        "Clear instructions",
        "Easy navigation"
      ],

      poorExamples: [
        "Tiny text",
        "Too many buttons",
        "Confusing instructions",
        "Too much information on one screen"
      ],

      prompts: [
        {
          type: "checkboxGroup",
          id: "appFeeling",
          label: "I want my app to feel",
          options: [
            "Fun",
            "Relaxing",
            "Simple",
            "Helpful",
            "Professional",
            "Colorful",
            "Exciting",
            "Friendly"
          ]
        },

        {
          type: "textarea",
          id: "usersSay1",
          label: "Thing users might say #1"
        },
        {
          type: "textarea",
          id: "usersSay2",
          label: "Thing users might say #2"
        },
        {
          type: "textarea",
          id: "usersSay3",
          label: "Thing users might say #3"
        },

        {
          type: "textarea",
          id: "usersFeel1",
          label: "Thing users might feel #1"
        },
        {
          type: "textarea",
          id: "usersFeel2",
          label: "Thing users might feel #2"
        },
        {
          type: "textarea",
          id: "usersFeel3",
          label: "Thing users might feel #3"
        },

        {
          type: "text",
          id: "idealUserName",
          label: "Ideal User Name"
        },
        {
          type: "text",
          id: "idealUserAge",
          label: "Age"
        },
        {
          type: "textarea",
          id: "interests",
          label: "Interests"
        },
        {
          type: "textarea",
          id: "biggestProblem",
          label: "Biggest Problem"
        },
        {
          type: "textarea",
          id: "appHelps",
          label: "How My App Helps"
        },
        {
          type: "textarea",
          id: "whyKeepUsing",
          label: "Why They Would Keep Using My App"
        }
      ]
    }
  ],

  reflection: [
    {
      id: "whoUses",
      question: "Who will use your app?"
    },
    {
      id: "whatProblem",
      question: "What problem are they trying to solve?"
    },
    {
      id: "lifeEasierReflection",
      question: "How will your app make their lives easier?"
    }
  ],

  nextChapterMessage:
    "In the next chapter, you will begin defining exactly what your app will do and what features it should include."
};