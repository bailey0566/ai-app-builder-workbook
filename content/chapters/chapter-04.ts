import type { Chapter } from "@/lib/workbookTypes";

export const chapter04: Chapter = {
  id: "chapter-04",
  chapterNumber: 4,
  title: "AI as a Creative Partner",

  sectionTitle: "Working with Artificial Intelligence",

  introduction: [
    "Artificial intelligence (AI) is a powerful tool, but it works best when people work alongside it.",
    "Think of AI as a partner rather than a replacement for your thinking.",
    "AI can help you brainstorm ideas, answer questions, explain concepts, and even write computer code."
  ],

  quote: "AI is a tool. You are the creator.",

  parts: [
    {
      title: "What AI Can and Cannot Do",

      background: [
        "Artificial intelligence can help us solve problems faster, but it is not perfect.",
        "AI learns patterns from information.",
        "Good creators know when to use AI and when to rely on their own ideas."
      ],

      canDo: [
        "Generate ideas",
        "Explain concepts",
        "Answer questions",
        "Help write code",
        "Suggest improvements",
        "Help organize information",
        "Assist with problem solving",
        "Help revise work"
      ],

      cannotDo: [
        "Read your mind",
        "Know exactly what you want without instructions",
        "Guarantee that every answer is correct",
        "Replace human creativity",
        "Make decisions for you",
        "Understand feelings the same way humans do",
        "Build great projects without your guidance"
      ],

      leadingQuestions: [
        "What kinds of tasks might AI help you with?",
        "When would you still need to think for yourself?",
        "Why is it important to check AI answers?",
        "Why do humans still matter?"
      ],

      examples: [
        {
          situation: "I need ideas for my app.",
          aiHelps: "Generate possible ideas."
        },
        {
          situation: "My code is not working.",
          aiHelps: "Suggest possible fixes."
        },
        {
          situation: "I need to decide which idea is best.",
          aiHelps: "Provide suggestions.",
          youMust: "Make the final decision."
        },
        {
          situation: "I want my app to reflect my personality.",
          aiHelps: "Offer examples.",
          youMust: "Choose what represents you."
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "aiCanHelp",
          label: "I think AI could help me with"
        },
        {
          type: "textarea",
          id: "doMyself",
          label: "Some things I should still do myself are"
        },
        {
          type: "textarea",
          id: "humansMatter",
          label: "One reason humans are still important is"
        }
      ]
    },

    {
      title: "Asking Better Questions",

      background: [
        "AI gives better answers when we ask better questions.",
        "Adding details helps AI understand what you want.",
        "Think of AI like a helpful assistant."
      ],

      leadingQuestions: [
        "Did I explain the problem clearly?",
        "Did I describe who will use the app?",
        "Did I explain what I want the AI to do?",
        "Did I include enough details?"
      ],

      comparisons: [
        {
          weak: "Make an app.",
          better:
            "Help me build a homework reminder app for middle school students."
        },
        {
          weak: "Fix this.",
          better:
            "My button does not work when I click it. Can you help me find the problem?"
        },
        {
          weak: "Give me ideas.",
          better:
            "Can you suggest three ideas for an app that would help pet owners?"
        }
      ],

      prompts: [
        {
          type: "textarea",
          id: "betterHelpMe",
          label: 'Rewrite "Help me." into a better question'
        },
        {
          type: "textarea",
          id: "betterFixCode",
          label: 'Rewrite "Fix my code." into a better question'
        },
        {
          type: "textarea",
          id: "betterIdeas",
          label: 'Rewrite "Give me ideas." into a better question'
        },

        {
          type: "textarea",
          id: "question1",
          label: "Question #1 I might ask AI"
        },
        {
          type: "textarea",
          id: "question2",
          label: "Question #2 I might ask AI"
        },
        {
          type: "textarea",
          id: "question3",
          label: "Question #3 I might ask AI"
        }
      ]
    },

    {
      title: "Writing Effective Prompts",

      background: [
        "A prompt is the instruction you give to AI.",
        "Prompts tell AI what you want, who the project is for, how the answer should look, and what details are important."
      ],

      quote:
        "The quality of the answer often depends on the quality of the prompt.",

      bulletPoints: [
        "What you want",
        "Who the project is for",
        "How the answer should look",
        "What details are important"
      ],

      promptFormula: [
        "Help me create a __________",
        "for __________",
        "that helps them __________",
        "by __________"
      ],

      examples: [
        {
          prompt:
            "Help me create a homework reminder app for middle school students that helps them remember assignments and due dates."
        },
        {
          prompt:
            "Help me create a pet care app for dog owners that reminds them about feeding times and appointments."
        },
        {
          prompt:
            "Help me create a movie tracker app for families that keeps track of favorite movies and movies already watched."
        }
      ],

      prompts: [
        {
          type: "text",
          id: "appType",
          label: "Step 1: What type of app are you creating?"
        },
        {
          type: "text",
          id: "appUsers",
          label: "Step 2: Who will use the app?"
        },
        {
          type: "textarea",
          id: "appProblem",
          label: "Step 3: What problem does the app solve?"
        },
        {
          type: "textarea",
          id: "appFeatures",
          label: "Step 4: What features should the app have?"
        },

        {
          type: "textarea",
          id: "firstPrompt",
          label: "My First Complete Prompt"
        },

        {
          type: "checkboxGroup",
          id: "bonusPromptPractice",
          label: "Ask AI to...",
          options: [
            "Generate app ideas",
            "Suggest colors for my app",
            "Help me write code",
            "Explain an error message",
            "Improve my design",
            "Suggest names for my app",
            "Add a feature",
            "Explain something I do not understand"
          ]
        },

        {
          type: "textarea",
          id: "conversationNotes",
          label: "AI Conversation Notes"
        }
      ]
    }
  ],

  reflection: [
    {
      id: "surprisedAI",
      question: "What surprised you about AI?"
    },
    {
      id: "aiStrength",
      question: "What is one thing AI does well?"
    },
    {
      id: "cannotReplace",
      question: "What is one thing AI cannot replace?"
    }
  ],

  nextChapterMessage:
    "In the next chapter, you will learn how AI can help you brainstorm ideas, improve designs, and explore different possibilities for your app."
};