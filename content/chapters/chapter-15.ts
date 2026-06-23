export const chapter15 = {
  id: "chapter-15",
  chapterNumber: 15,
  title: "Reflection",

  sectionTitle: "Completing My Mini Capstone Project",

  introduction: [
    "Congratulations!",
    "You completed the AI App Builder Internship.",
    "Reflection helps us recognize how much we have grown."
  ],

  quote:
    "Success is not only about what you built. It is also about what you learned.",

  parts: [

    {
      title: "What I Learned",

      background: [
        "Learning happens in many ways.",
        "Sometimes we learn skills.",
        "Sometimes we discover strengths we did not know we had."
      ],

      leadingQuestions: [
        "What new skills did I learn?",
        "What surprised me?",
        "What did I learn about AI?",
        "What did I learn about myself?"
      ],

      prompts: [

        {
          type: "textarea",
          id: "beforeInternship",
          label: "Before this internship, I did not know how to"
        },

        {
          type: "textarea",
          id: "nowIKnow",
          label: "Now I know how to"
        },

        {
          type: "textarea",
          id: "surprisedMe",
          label: "Something that surprised me was"
        },

        {
          type: "textarea",
          id: "enjoyedLearning",
          label: "Something I enjoyed learning about was"
        },

        {
          type: "checkboxGroup",
          id: "newSkills",
          label: "New Skills I Developed",
          options: [
            "Problem solving",
            "Creativity",
            "Communication",
            "Using AI tools",
            "Coding",
            "Patience",
            "Organization",
            "Teamwork",
            "Persistence"
          ]
        },

        {
          type: "textarea",
          id: "biggestLesson",
          label: "The most important thing I learned was"
        }
      ]
    },

    {
      title: "Challenges I Overcame",

      background: [
        "Every creator experiences challenges.",
        "Growth often happens when things are difficult."
      ],

      quote:
        "Challenges do not mean you failed.",

      prompts: [

        {
          type: "textarea",
          id: "challenge1",
          label: "Challenge #1: What happened?"
        },

        {
          type: "textarea",
          id: "response1",
          label: "How did I respond?"
        },

        {
          type: "textarea",
          id: "lesson1",
          label: "What did I learn?"
        },

        {
          type: "textarea",
          id: "challenge2",
          label: "Challenge #2: What happened?"
        },

        {
          type: "textarea",
          id: "response2",
          label: "How did I respond?"
        },

        {
          type: "textarea",
          id: "lesson2",
          label: "What did I learn?"
        },

        {
          type: "textarea",
          id: "challenge3",
          label: "Challenge #3: What happened?"
        },

        {
          type: "textarea",
          id: "response3",
          label: "How did I respond?"
        },

        {
          type: "textarea",
          id: "lesson3",
          label: "What did I learn?"
        },

        {
          type: "text",
          id: "helper1",
          label: "Person Who Helped Me #1"
        },

        {
          type: "text",
          id: "helper2",
          label: "Person Who Helped Me #2"
        },

        {
          type: "text",
          id: "helper3",
          label: "Person Who Helped Me #3"
        },

        {
          type: "text",
          id: "helper4",
          label: "Person Who Helped Me #4"
        },

        {
          type: "textarea",
          id: "proudMoment",
          label: "Something I Am Proud Of"
        }
      ]
    },

    {
      title: "Future Improvements",

      background: [
        "Projects are never truly finished.",
        "Good creators always think about what comes next."
      ],

      prompts: [

        {
          type: "textarea",
          id: "nextFeature",
          label: "Feature I Would Add"
        },

        {
          type: "textarea",
          id: "nextFeatureWhy",
          label: "Why?"
        },

        {
          type: "textarea",
          id: "redesignItem",
          label: "Something I Would Redesign"
        },

        {
          type: "textarea",
          id: "redesignWhy",
          label: "Why?"
        },

        {
          type: "textarea",
          id: "futureFeedback",
          label: "Feedback I Would Use"
        },

        {
          type: "textarea",
          id: "stillWantLearn",
          label: "Something I Still Want to Learn"
        },

        {
          type: "radioGroup",
          id: "continueProject",
          label: "Would I Continue Working on This Project?",
          options: [
            "Yes",
            "Maybe",
            "Not Right Now"
          ]
        },

        {
          type: "textarea",
          id: "continueWhy",
          label: "Why?"
        }
      ]
    },

    {
      title: "Looking Back",

      prompts: [

        {
          type: "textarea",
          id: "beginningThought",
          label: "At the Beginning of the Internship, I Thought"
        },

        {
          type: "textarea",
          id: "currentThought",
          label: "Now I Think"
        },

        {
          type: "textarea",
          id: "hardestPart",
          label: "The Hardest Part Was"
        },

        {
          type: "textarea",
          id: "bestPart",
          label: "The Best Part Was"
        },

        {
          type: "text",
          id: "oneWord",
          label: "One Word That Describes My Experience"
        },

        {
          type: "text",
          id: "word1",
          label: "Word #1 That Describes Me Now"
        },

        {
          type: "text",
          id: "word2",
          label: "Word #2 That Describes Me Now"
        },

        {
          type: "text",
          id: "word3",
          label: "Word #3 That Describes Me Now"
        },

        {
          type: "textarea",
          id: "futureLetter",
          label: "Letter to My Future Self"
        }
      ]
    },

    {
      title: "My Digital Portfolio",

      background: [
        "This section preserves your work for the future.",
        "Your portfolio shows what you created and how you grew."
      ],

      prompts: [

        {
          type: "url",
          id: "finalAppUrl",
          label: "Final App URL"
        },

        {
          type: "url",
          id: "githubRepository",
          label: "GitHub Repository (Optional)"
        },

        {
          type: "imageUpload",
          id: "portfolioScreenshot1",
          label: "Portfolio Screenshot #1"
        },

        {
          type: "imageUpload",
          id: "portfolioScreenshot2",
          label: "Portfolio Screenshot #2"
        },

        {
          type: "videoUpload",
          id: "portfolioVideo",
          label: "Demo Video (Optional)"
        },

        {
          type: "textarea",
          id: "creatorStatement",
          label: "Creator Statement"
        },

        {
          type: "radioGroup",
          id: "publicShowcasePermission",
          label: "May your project be included in future showcases?",
          options: [
            "Yes",
            "Ask Me First",
            "No"
          ]
        }
      ]
    },

    {
      title: "Completion Certificate Reflection",

      prompts: [

        {
          type: "checkboxGroup",
          id: "completionChecklist",
          label: "I Successfully",
          options: [
            "Identified a problem",
            "Designed a solution",
            "Worked with AI",
            "Built a prototype",
            "Improved my app",
            "Shared my project",
            "Learned from mistakes",
            "Finished what I started"
          ]
        }
      ]
    }
  ],

  reflection: [

    {
      id: "greatestAccomplishment",
      question:
        "What accomplishment are you most proud of?"
    },

    {
      id: "howChanged",
      question:
        "How have you changed during this experience?"
    },

    {
      id: "adviceToDayOne",
      question:
        "What advice would you give yourself if you could go back to Day 1?"
    },

    {
      id: "whatNext",
      question:
        "What would you like to create next?"
    }
  ],

  completionMessage: [
    "You learned how to think like a creator.",
    "You learned how to solve problems.",
    "You learned how to work with artificial intelligence.",
    "You proved that you do not have to know everything to build something meaningful."
  ]
};