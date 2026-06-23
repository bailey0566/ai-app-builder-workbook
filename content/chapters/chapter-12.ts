export const chapter12 = {
  id: "chapter-12",
  chapterNumber: 12,
  title: "Iteration and Growth",

  sectionTitle: "Building with AI",

  introduction: [
    "Successful apps are not created in one attempt.",
    "Professional developers improve their projects through iteration.",
    "Iteration means Build → Test → Improve → Repeat."
  ],

  quote:
    "Progress happens through improvement, not perfection.",

  parts: [
    {
      title: "Improving My Design",

      background: [
        "Good design helps users understand and enjoy your app.",
        "Design improvements often make apps easier to read, easier to use, and more enjoyable."
      ],

      leadingQuestions: [
        "Is my app easy to understand?",
        "Does the design feel organized?",
        "Are buttons easy to find?",
        "Is the text easy to read?",
        "What would make the experience more enjoyable?"
      ],

      examples: [
        {
          before: "Tiny text.",
          after: "Larger text for easier reading."
        },

        {
          before: "Too many colors.",
          after: "Simpler color scheme."
        },

        {
          before: "No instructions.",
          after: "Added directions."
        },

        {
          before: "Everything crowded together.",
          after: "Added spacing between sections."
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "designImprovement1",
          label: "Improvement #1: What needs improvement?"
        },

        {
          type: "textarea",
          id: "designChange1",
          label: "What change will I make?"
        },

        {
          type: "textarea",
          id: "designImprovement2",
          label: "Improvement #2: What needs improvement?"
        },

        {
          type: "textarea",
          id: "designChange2",
          label: "What change will I make?"
        },

        {
          type: "textarea",
          id: "designImprovement3",
          label: "Improvement #3: What needs improvement?"
        },

        {
          type: "textarea",
          id: "designChange3",
          label: "What change will I make?"
        },

        {
          type: "checkboxGroup",
          id: "designGoals",
          label: "I want my app to feel",
          options: [
            "Fun",
            "Friendly",
            "Simple",
            "Colorful",
            "Professional",
            "Calm",
            "Exciting",
            "Helpful",
            "Easy to use"
          ]
        }
      ]
    },

    {
      title: "Adding Features",

      background: [
        "Features make apps more useful.",
        "Successful developers add features slowly and carefully."
      ],

      quote:
        "Add one feature at a time.",

      leadingQuestions: [
        "What feature would help users the most?",
        "Which feature should come next?",
        "Will the feature improve the app?",
        "Can I explain why this feature matters?"
      ],

      examples: [
        {
          original: "Homework Tracker",
          addedFeature: "Completed Assignment Button"
        },

        {
          original: "Pet Care App",
          addedFeature: "Feeding Schedule"
        },

        {
          original: "Movie Tracker",
          addedFeature: "Favorite Movie List"
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "featureIdea1",
          label: "Feature #1: What feature do I want to add?"
        },

        {
          type: "textarea",
          id: "featureReason1",
          label: "Why is it important?"
        },

        {
          type: "textarea",
          id: "featureIdea2",
          label: "Feature #2: What feature do I want to add?"
        },

        {
          type: "textarea",
          id: "featureReason2",
          label: "Why is it important?"
        },

        {
          type: "textarea",
          id: "featureIdea3",
          label: "Feature #3: What feature do I want to add?"
        },

        {
          type: "textarea",
          id: "featureReason3",
          label: "Why is it important?"
        },

        {
          type: "textarea",
          id: "featurePrompt",
          label: "Write your AI feature prompt"
        },

        {
          type: "text",
          id: "aiSuggestion1",
          label: "AI Suggestion #1"
        },

        {
          type: "text",
          id: "aiSuggestion2",
          label: "AI Suggestion #2"
        },

        {
          type: "text",
          id: "aiSuggestion3",
          label: "AI Suggestion #3"
        },

        {
          type: "textarea",
          id: "firstFeatureChoice",
          label: "Which feature do I want to add first and why?"
        }
      ]
    },

    {
      title: "Learning from Mistakes",

      background: [
        "Mistakes are part of learning.",
        "Mistakes are evidence that you are trying."
      ],

      quote:
        "Mistakes are teachers.",

      leadingQuestions: [
        "What mistake did I make?",
        "What caused the mistake?",
        "What did I learn?",
        "What would I do differently next time?"
      ],

      examples: [
        {
          mistake: "Forgot to save work.",
          lesson: "Save frequently."
        },

        {
          mistake: "Added too many features.",
          lesson: "Build one feature at a time."
        },

        {
          mistake: "Did not test the app.",
          lesson: "Test often."
        },

        {
          mistake: "Expected everything to work immediately.",
          lesson: "Be patient."
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "mistake1",
          label: "Mistake #1: What happened?"
        },

        {
          type: "textarea",
          id: "lesson1",
          label: "What did I learn?"
        },

        {
          type: "textarea",
          id: "mistake2",
          label: "Mistake #2: What happened?"
        },

        {
          type: "textarea",
          id: "lesson2",
          label: "What did I learn?"
        },

        {
          type: "textarea",
          id: "mistake3",
          label: "Mistake #3: What happened?"
        },

        {
          type: "textarea",
          id: "lesson3",
          label: "What did I learn?"
        }
      ]
    },

    {
      title: "Growth Reflection",

      prompts: [
        {
          type: "textarea",
          id: "newUnderstanding",
          label:
            "Something that used to confuse me but now makes sense"
        },

        {
          type: "textarea",
          id: "newSkill",
          label:
            "Something I can do now that I could not do before"
        },

        {
          type: "textarea",
          id: "stillWantToLearn",
          label:
            "Something I still want to learn"
        },

        {
          type: "textarea",
          id: "beginningThoughts",
          label:
            "At the beginning of the internship, I thought"
        },

        {
          type: "textarea",
          id: "currentThoughts",
          label:
            "Now I think"
        },

        {
          type: "textarea",
          id: "proudStatement",
          label:
            "I am proud that I"
        },

        {
          type: "textarea",
          id: "adviceToFutureStudents",
          label:
            "Advice to Future Students"
        }
      ]
    }
  ],

  reflection: [
    {
      id: "bestImprovement",
      question:
        "What improvement are you most proud of?"
    },

    {
      id: "favoriteFeature",
      question:
        "What feature are you most excited about?"
    },

    {
      id: "biggestLesson",
      question:
        "What mistake taught you the most?"
    },

    {
      id: "growthSummary",
      question:
        "How have you grown during this project?"
    }
  ],

  nextChapterMessage:
    "In the next section, you will prepare your final app and share your work with others."
};