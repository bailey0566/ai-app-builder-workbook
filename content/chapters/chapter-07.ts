import type { Chapter } from "@/lib/workbookTypes";

export const chapter07: Chapter = {
  id: "chapter-07",
  chapterNumber: 7,
  title: "Sketching My App",

  sectionTitle: "Designing My App",

  introduction: [
    "Before professional developers write code, they often sketch their ideas.",
    "Sketching helps creators think about what users will see and how they will move through the app.",
    "A sketch does not have to be beautiful. It only needs to communicate ideas."
  ],

  quote: "Good design begins with simple sketches.",

  parts: [
    {
      title: "Home Screen Design",

      background: [
        "The home screen is usually the first thing users see.",
        "A good home screen should help users understand what the app does.",
        "Simple layouts are often easier to understand."
      ],

      leadingQuestions: [
        "What should users see first?",
        "What information is most important?",
        "Should there be instructions?",
        "What should users be able to do immediately?"
      ],

      examples: [
        {
          app: "Homework Helper",
          homeScreen: "- App title\n- Add assignment button\n- Assignment list"
        },

        {
          app: "Pet Pal",
          homeScreen: "- Pet profile\n- Feeding schedule\n- Reminder button"
        },

        {
          app: "Movie Match",
          homeScreen: "- Favorite movies\n- Search button\n- Recently watched list"
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "homeScreenItems",
          label: "What should appear on my home screen?"
        },

        {
          type: "textarea",
          id: "firstThingUsersSee",
          label: "What should users see first?"
        },

        {
          type: "textarea",
          id: "homeInstructions",
          label: "What instructions should appear?"
        },

        {
          type: "textarea",
          id: "homeSketch",
          label: "Sketch Your Home Screen"
        }
      ]
    },

    {
      title: "Buttons and Navigation",

      background: [
        "Buttons help users move through your app.",
        "Navigation should feel simple and natural.",
        "Users should always know what to do next."
      ],

      quote: "Confused users usually mean confused design.",

      leadingQuestions: [
        "What buttons will users need?",
        "Where should the buttons go?",
        "Would users understand the labels?",
        "Can users easily return to the home screen?"
      ],

      goodExamples: [
        "Save",
        "Next",
        "Add Homework",
        "Start Game",
        "Back"
      ],

      poorExamples: [
        "Button 1",
        "Option A",
        "Continue Process",
        "Unknown"
      ],

      prompts: [
        {
          type: "text",
          id: "button1",
          label: "Button #1"
        },

        {
          type: "text",
          id: "button2",
          label: "Button #2"
        },

        {
          type: "text",
          id: "button3",
          label: "Button #3"
        },

        {
          type: "textarea",
          id: "navigationFlow",
          label: "How will users move through the app?"
        },

        {
          type: "textarea",
          id: "navigationSketch",
          label: "Sketch Your Navigation"
        }
      ]
    },

    {
      title: "Colors, Images, and Layout",

      background: [
        "Visual design affects how people feel when using an app.",
        "Colors, images, and spacing should support the user experience.",
        "Good design is usually simple and consistent."
      ],

      leadingQuestions: [
        "What colors fit my audience?",
        "Should I use pictures?",
        "Should my app feel fun or professional?",
        "Will the text be easy to read?"
      ],

      examples: [
        {
          audience: "Children",
          design: "Bright colors and large buttons"
        },

        {
          audience: "Teenagers",
          design: "Modern colors and simple layouts"
        },

        {
          audience: "Adults",
          design: "Professional colors and organized screens"
        }
      ],

      prompts: [
        {
          type: "checkboxGroup",
          id: "designStyle",
          label: "How should my app feel?",
          options: [
            "Fun",
            "Professional",
            "Colorful",
            "Relaxing",
            "Simple",
            "Exciting",
            "Friendly"
          ]
        },

        {
          type: "textarea",
          id: "colorIdeas",
          label: "What colors would I like to use?"
        },

        {
          type: "textarea",
          id: "imageIdeas",
          label: "What images or icons should appear?"
        },

        {
          type: "textarea",
          id: "layoutIdeas",
          label: "Describe the overall layout of your app."
        },

        {
          type: "textarea",
          id: "fullAppSketch",
          label: "Sketch Your Entire App"
        }
      ]
    }
  ],

  reflection: [
    {
      id: "favoriteDesign",
      question:
        "What part of your design are you most excited about?"
    },

    {
      id: "designChallenge",
      question:
        "What part of designing your app seems most difficult?"
    },

    {
      id: "appFeeling",
      question:
        "How do you want users to feel when using your app?"
    }
  ],

  nextChapterMessage:
    "In the next chapter, you will learn how to think like a user and create apps that are easy to understand and enjoyable to use."
};