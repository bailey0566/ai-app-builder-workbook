import type { Chapter } from "@/lib/workbookTypes";

export const chapter06: Chapter = {
  id: "chapter-06",
  chapterNumber: 6,
  title: "Planning Before Building",

  sectionTitle: "Working with Artificial Intelligence",

  introduction: [
    "Many people want to jump straight into writing code.",
    "Successful app creators spend time planning before they begin building.",
    "Planning helps avoid confusion, save time, and build with confidence."
  ],

  quote: "Good planning makes building easier.",

  parts: [
    {
      title: "Asking AI Clarifying Questions",

      background: [
        "Artificial intelligence works best when you have conversations with it.",
        "You do not have to know everything before you begin.",
        "Professional programmers constantly ask questions."
      ],

      quote:
        "There are no perfect questions. There are only questions that help you learn.",

      leadingQuestions: [
        "What do I still not understand?",
        "What parts of my app seem confusing?",
        "What would I like AI to explain?",
        "What information do I need before I begin?",
        "What might cause problems later?"
      ],

      examples: [
        {
          question: "What screens should my app have?"
        },
        {
          question:
            "What are three features beginners can build easily?"
        },
        {
          question:
            "What colors would work well for my audience?"
        },
        {
          question:
            "What should users see when they first open my app?"
        },
        {
          question:
            "What could make this project too difficult?"
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "stillConfusing",
          label: "Something I still do not understand is"
        },

        {
          type: "textarea",
          id: "questionOne",
          label: "A question I want to ask AI"
        },

        {
          type: "textarea",
          id: "answerOne",
          label: "AI's answer"
        },

        {
          type: "textarea",
          id: "questionTwo",
          label: "Another question I want to ask"
        },

        {
          type: "textarea",
          id: "answerTwo",
          label: "AI's answer"
        },

        {
          type: "text",
          id: "question1",
          label: "Question #1"
        },

        {
          type: "text",
          id: "question2",
          label: "Question #2"
        },

        {
          type: "text",
          id: "question3",
          label: "Question #3"
        },

        {
          type: "text",
          id: "question4",
          label: "Question #4"
        },

        {
          type: "text",
          id: "question5",
          label: "Question #5"
        }
      ]
    },

    {
      title: "Organizing Project Requirements",

      background: [
        "Requirements are the things your app must do.",
        "Requirements help creators stay focused.",
        "Not every idea belongs in Version 1."
      ],

      quote: "Not every idea belongs in Version 1.",

      leadingQuestions: [
        "What problem am I solving?",
        "Who will use my app?",
        "What features are absolutely necessary?",
        "What information should users be able to enter?",
        "What information should users be able to see?",
        "What can wait until later?"
      ],

      examples: [
        {
          app: "Homework Tracker",
          requirements: "- Add homework assignments\n- Mark assignments as completed\n- See due dates"
        },

        {
          app: "Pet Care App",
          requirements: "- Record pet names\n- Add feeding times\n- Keep track of appointments"
        },

        {
          app: "Movie App",
          requirements: "- Save favorite movies\n- Mark movies as watched\n- Search movie titles"
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "problemSolved",
          label: "What problem am I solving?"
        },

        {
          type: "textarea",
          id: "users",
          label: "Who will use my app?"
        },

        {
          type: "text",
          id: "requirement1",
          label: "What should users be able to do? #1"
        },

        {
          type: "text",
          id: "requirement2",
          label: "What should users be able to do? #2"
        },

        {
          type: "text",
          id: "requirement3",
          label: "What should users be able to do? #3"
        },

        {
          type: "text",
          id: "requirement4",
          label: "What should users be able to do? #4"
        },

        {
          type: "text",
          id: "requirement5",
          label: "What should users be able to do? #5"
        },

        {
          type: "textarea",
          id: "userInput",
          label: "What information will users enter?"
        },

        {
          type: "textarea",
          id: "userOutput",
          label: "What information will users see?"
        },

        {
          type: "text",
          id: "laterFeature1",
          label: "Feature I Can Save for Later #1"
        },

        {
          type: "text",
          id: "laterFeature2",
          label: "Feature I Can Save for Later #2"
        },

        {
          type: "text",
          id: "laterFeature3",
          label: "Feature I Can Save for Later #3"
        },

        {
          type: "checkboxGroup",
          id: "versionOneChecklist",
          label: "Version 1 Checklist",
          options: [
            "Add information",
            "Delete information",
            "Edit information",
            "Save information",
            "Use buttons",
            "Display messages",
            "Show pictures",
            "Keep scores",
            "Track progress",
            "Organize lists",
            "Play sounds"
          ]
        }
      ]
    },

    {
      title: "Creating a Development Plan",

      background: [
        "Large projects become easier when they are divided into smaller steps.",
        "Professional software developers work this way every day."
      ],

      leadingQuestions: [
        "What should I build first?",
        "What should I build second?",
        "Which features are easiest?",
        "Which features depend on other features?",
        "What can I finish during the internship?"
      ],

      examples: [
        {
          app: "Homework Tracker",
          steps: "- Create the home screen.\n- Add an assignment list.\n- Add due dates.\n- Add a completed button."
        },

        {
          app: "Pet Care App",
          steps: "- Create a pet profile.\n- Add feeding reminders.\n- Add appointment tracking."
        },

        {
          app: "Movie Tracker",
          steps: "- Create a movie list.\n- Allow users to add movies.\n- Mark movies as watched."
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "step1",
          label: "Step 1"
        },

        {
          type: "textarea",
          id: "step2",
          label: "Step 2"
        },

        {
          type: "textarea",
          id: "step3",
          label: "Step 3"
        },

        {
          type: "textarea",
          id: "step4",
          label: "Step 4"
        },

        {
          type: "textarea",
          id: "step5",
          label: "Step 5"
        },

        {
          type: "textarea",
          id: "step6",
          label: "Step 6"
        },

        {
          type: "text",
          id: "day1Goal",
          label: "Day 1 Goal"
        },

        {
          type: "text",
          id: "day2Goal",
          label: "Day 2 Goal"
        },

        {
          type: "text",
          id: "day3Goal",
          label: "Day 3 Goal"
        },

        {
          type: "text",
          id: "day4Goal",
          label: "Day 4 Goal"
        },

        {
          type: "textarea",
          id: "stretchGoal",
          label: "Stretch Goal"
        },

        {
          type: "textarea",
          id: "potentialProblems",
          label: "Potential Problems"
        },

        {
          type: "textarea",
          id: "aiSolutions",
          label: "How could AI help solve those problems?"
        }
      ]
    }
  ],

  reflection: [
    {
      id: "confidence",
      question:
        "What part of your app are you most confident about?"
    },

    {
      id: "confusion",
      question:
        "What part still feels confusing?"
    },

    {
      id: "firstBuild",
      question:
        "What is the first thing you plan to build?"
    }
  ],

  nextChapterMessage:
    "In the next section, you will begin designing how your app will actually look and how users will interact with it."
};