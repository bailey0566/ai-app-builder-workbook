import type { Chapter } from "@/lib/workbookTypes";

export const chapter05: Chapter = {
  id: "chapter-05",
  chapterNumber: 5,
  title: "Brainstorming with AI",

  sectionTitle: "Working with Artificial Intelligence",

  introduction: [
    "One of the most powerful uses of artificial intelligence is brainstorming.",
    "Great ideas often start small and improve over time.",
    "AI can help generate ideas, improve ideas, add features, and explore different possibilities."
  ],

  quote:
    "You do not need the perfect idea. You only need a starting point.",

  parts: [
    {
      title: "Generating Ideas",

      background: [
        "Brainstorming means creating many possible ideas before choosing one.",
        "Good creators rarely stop after their first idea.",
        "AI can help you think of ideas you might never have considered on your own."
      ],

      leadingQuestions: [
        "What interests me?",
        "What hobbies do I enjoy?",
        "What problems do I care about?",
        "What would make life easier?",
        "What do I wish existed?",
        "What would be fun to create?"
      ],

      examples: [
        {
          prompt: "Give me five app ideas for students.",
          ideas:
            "- Homework Tracker\n- Study Timer\n- Vocabulary Builder\n- Assignment Reminder\n- Goal Tracker"
        },

        {
          prompt: "Give me three app ideas for pet owners.",
          ideas:
            "- Pet Feeding Reminder\n- Vet Appointment Tracker\n- Dog Walking Log"
        },

        {
          prompt: "Give me ideas for sports fans.",
          ideas:
            "- Practice Schedule Tracker\n- Team Statistics App\n- Fitness Progress Log"
        }
      ],

      prompts: [
        {
          type: "text",
          id: "idea1",
          label: "Idea #1"
        },
        {
          type: "text",
          id: "idea2",
          label: "Idea #2"
        },
        {
          type: "text",
          id: "idea3",
          label: "Idea #3"
        },
        {
          type: "text",
          id: "idea4",
          label: "Idea #4"
        },
        {
          type: "text",
          id: "idea5",
          label: "Idea #5"
        },
        {
          type: "text",
          id: "idea6",
          label: "Idea #6"
        },
        {
          type: "text",
          id: "idea7",
          label: "Idea #7"
        },
        {
          type: "text",
          id: "idea8",
          label: "Idea #8"
        },

        {
          type: "text",
          id: "interestArea",
          label:
            'Complete the prompt: "Give me five app ideas for people who enjoy..."'
        },

        {
          type: "text",
          id: "aiIdea1",
          label: "AI Suggested Idea #1"
        },
        {
          type: "text",
          id: "aiIdea2",
          label: "AI Suggested Idea #2"
        },
        {
          type: "text",
          id: "aiIdea3",
          label: "AI Suggested Idea #3"
        },
        {
          type: "text",
          id: "aiIdea4",
          label: "AI Suggested Idea #4"
        },
        {
          type: "text",
          id: "aiIdea5",
          label: "AI Suggested Idea #5"
        },

        {
          type: "textarea",
          id: "favoriteIdea",
          label: "Which idea do I like best?"
        },

        {
          type: "textarea",
          id: "favoriteIdeaWhy",
          label: "Why?"
        }
      ]
    },

    {
      title: "Refining Features",

      background: [
        "Most ideas become stronger when we improve them.",
        "Sometimes your original idea may be too large or too complicated.",
        "AI can help you simplify your project and focus on the most important parts."
      ],

      quote: "Simple projects are easier to finish.",

      leadingQuestions: [
        "What feature is most important?",
        "What features are unnecessary?",
        "What could be added later?",
        "What would users care about most?",
        "Is my project realistic for two weeks?"
      ],

      examples: [
        {
          originalIdea: "Build the next Fortnite.",
          problem: "Too large.",
          refinedIdea: "Create a simple trivia game."
        },

        {
          originalIdea: "Create a complete social media platform.",
          problem: "Too complicated.",
          refinedIdea:
            "Create an app where friends can share favorite movies."
        },

        {
          originalIdea: "Build an app with twenty different screens.",
          problem: "Too many features.",
          refinedIdea: "Build three useful screens first."
        }
      ],

      prompts: [
        {
          type: "text",
          id: "mustHave1",
          label: "Must-Have Feature #1"
        },
        {
          type: "text",
          id: "mustHave2",
          label: "Must-Have Feature #2"
        },
        {
          type: "text",
          id: "mustHave3",
          label: "Must-Have Feature #3"
        },

        {
          type: "text",
          id: "niceFeature1",
          label: "Nice-to-Have Feature #1"
        },
        {
          type: "text",
          id: "niceFeature2",
          label: "Nice-to-Have Feature #2"
        },
        {
          type: "text",
          id: "niceFeature3",
          label: "Nice-to-Have Feature #3"
        },

        {
          type: "textarea",
          id: "featurePrompt",
          label: "Write your own AI feature prompt"
        },

        {
          type: "text",
          id: "featureSuggestion1",
          label: "AI Suggested Feature #1"
        },
        {
          type: "text",
          id: "featureSuggestion2",
          label: "AI Suggested Feature #2"
        },
        {
          type: "text",
          id: "featureSuggestion3",
          label: "AI Suggested Feature #3"
        },

        {
          type: "textarea",
          id: "mostImportantFeature",
          label: "Which feature is MOST important?"
        },

        {
          type: "textarea",
          id: "mostImportantWhy",
          label: "Why?"
        }
      ]
    },

    {
      title: "Exploring Alternatives",

      background: [
        "There is usually more than one way to solve a problem.",
        "Good creators explore different possibilities before making decisions.",
        "Sometimes an alternative idea turns out to be even better than the original."
      ],

      leadingQuestions: [
        "Is there another way to solve this problem?",
        "Could I simplify my idea?",
        "Could I change the audience?",
        "Could I make the app more fun?",
        "Could I make the app easier to use?"
      ],

      examples: [
        {
          problem: "Students forget homework.",
          possibleSolutions:
            "- Homework Reminder App\n- Assignment Calendar\n- Study Checklist\n- Daily Planner"
        },

        {
          problem: "People forget to drink water.",
          possibleSolutions:
            "- Water Reminder App\n- Daily Health Tracker\n- Habit Builder"
        },

        {
          problem: "People struggle to choose movies.",
          possibleSolutions:
            "- Movie Picker\n- Favorite Movie List\n- Random Movie Generator"
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "originalIdea",
          label: "Original Idea"
        },

        {
          type: "textarea",
          id: "alternative1",
          label: "Alternative Idea #1"
        },

        {
          type: "textarea",
          id: "alternative2",
          label: "Alternative Idea #2"
        },

        {
          type: "textarea",
          id: "alternative3",
          label: "Alternative Idea #3"
        },

        {
          type: "textarea",
          id: "bestVersion",
          label: "Which version do I like best?"
        },

        {
          type: "textarea",
          id: "bestVersionWhy",
          label: "Why?"
        },

        {
          type: "textarea",
          id: "comparisonPrompt",
          label: "Write your own AI comparison prompt"
        },

        {
          type: "textarea",
          id: "comparisonAdvice",
          label: "What advice did AI give you?"
        },

        {
          type: "textarea",
          id: "brainstormNotes",
          label: "Brainstorming Notes"
        }
      ]
    }
  ],

  reflection: [
    {
      id: "excitedIdea",
      question: "What idea are you most excited about?"
    },

    {
      id: "excitedFeature",
      question: "What feature are you most excited to build?"
    },

    {
      id: "unexpectedSuggestion",
      question: "Did AI suggest something you had not thought about?"
    },

    {
      id: "brainstormSurprise",
      question: "What surprised you during brainstorming?"
    }
  ],

  nextChapterMessage:
    "In the next chapter, you will learn how to organize your ideas and create a clear plan before building your app."
};