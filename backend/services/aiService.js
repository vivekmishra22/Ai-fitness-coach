import axios from 'axios';

export const generateFitnessPlan = async (userData) => {
  console.log('🎯 Generating fitness plan for:', userData.name);
  
  // TEMPORARY: Use mock data to avoid API rate limits
  // Remove this when you have valid API keys
  console.log('📝 Using mock data (API rate limited)');
  return await generateMockPlan(userData);

  /* COMMENT OUT THE REAL API CALL FOR NOW:
  try {
    const prompt = createPrompt(userData);
    
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 2000,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );

    const content = response.data.choices[0].message.content;
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    throw new Error('Invalid response format from AI');
    
  } catch (error) {
    console.error('❌ AI API Error:', error.message);
    // Fallback to mock data
    return await generateMockPlan(userData);
  }
  */
};

const createPrompt = (userData) => {
  // ... keep your existing prompt
};

// Enhanced Mock Data Generator
const generateMockPlan = async (userData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const goals = {
    weight_loss: {
      focus: "Fat Burning & Cardio",
      intensity: "High Intensity",
      workoutFocus: "cardio and full-body circuits"
    },
    muscle_gain: {
      focus: "Strength Training", 
      intensity: "Progressive Overload",
      workoutFocus: "compound movements"
    },
    maintenance: {
      focus: "Overall Fitness",
      intensity: "Moderate Intensity", 
      workoutFocus: "balanced training"
    }
  };
  
  const goal = goals[userData.fitnessGoal] || goals.maintenance;
  
  return {
    workoutPlan: {
      monday: {
        day: `Monday - Upper Body ${goal.focus}`,
        exercises: [
          { name: "Push-ups", sets: "3", reps: "12-15", rest: "60s", description: "Keep body straight" },
          { name: "Dumbbell Rows", sets: "3", reps: "10-12", rest: "60s", description: "Squeeze back muscles" },
          { name: "Shoulder Press", sets: "3", reps: "10-15", rest: "60s", description: "Use dumbbells" }
        ]
      },
      tuesday: {
        day: `Tuesday - Lower Body`,
        exercises: [
          { name: "Squats", sets: "4", reps: "12-15", rest: "75s", description: "Keep chest up" },
          { name: "Lunges", sets: "3", reps: "12-15 each", rest: "60s", description: "Step forward carefully" },
          { name: "Plank", sets: "3", reps: "30-60s", rest: "45s", description: "Maintain straight line" }
        ]
      },
      wednesday: {
        day: "Wednesday - Active Recovery",
        exercises: [
          { name: "Light Cardio", sets: "1", reps: "20-30 min", rest: "0s", description: "Brisk walking" },
          { name: "Stretching", sets: "1", reps: "15-20 min", rest: "0s", description: "Full body stretches" }
        ]
      },
      thursday: {
        day: `Thursday - ${goal.focus} Focus`,
        exercises: [
          { name: "HIIT Circuit", sets: "3-4", reps: "45s work/15s rest", rest: "60s", description: "High intensity intervals" },
          { name: "Core Work", sets: "3", reps: "15-20", rest: "45s", description: "Abdominal exercises" }
        ]
      },
      friday: {
        day: "Friday - Full Body",
        exercises: [
          { name: "Full Body Circuit", sets: "3", reps: "12-15", rest: "30s", description: "Circuit training" },
          { name: "Cardio Finisher", sets: "1", reps: "15-20 min", rest: "0s", description: "Moderate pace" }
        ]
      },
      saturday: {
        day: "Saturday - Cardio",
        exercises: [
          { name: "Choice of Cardio", sets: "1", reps: "30-45 min", rest: "As needed", description: "Enjoyable activity" }
        ]
      },
      sunday: {
        day: "Sunday - Rest Day",
        exercises: [
          { name: "Complete Rest", sets: "-", reps: "-", rest: "-", description: "Essential recovery" }
        ]
      }
    },
    dietPlan: {
      breakfast: "Oatmeal with fruits and nuts (350 calories) - Energy boosting",
      lunch: "Vegetable quinoa salad with chickpeas (450 calories) - Balanced nutrition", 
      dinner: "Lentil curry with brown rice (400 calories) - High protein",
      snacks: "Greek yogurt with honey (200 calories) - Protein snack",
      hydration: "3-4L water daily"
    },
    tips: [
      `Stay hydrated - drink at least ${Math.round(userData.weight * 0.033)}L water daily`,
      "Get 7-8 hours of quality sleep for recovery",
      "Maintain proper form in all exercises",
      `Focus on consistency for your ${userData.fitnessGoal} goals`,
      "Track your progress with photos and measurements"
    ],
    motivation: `You're capable of amazing things, ${userData.name}! Keep going and never underestimate your progress! 💪`,
    summary: {
      goal: userData.fitnessGoal,
      intensity: goal.intensity,
      weeklySchedule: "5-6 days of structured workouts",
      focusAreas: goal.workoutFocus
    }
  };
};

export default { generateFitnessPlan };

// import axios from 'axios';

// export const generateFitnessPlan = async (userData) => {
//   const prompt = createPrompt(userData);
  
//   try {
//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: prompt }],
//         max_tokens: 2000,
//         temperature: 0.7
//       },
//       {
//         headers: {
//           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//           'Content-Type': 'application/json'
//         }
//       }
//     );

//     const content = response.data.choices[0].message.content;
    
//     // Extract JSON from response
//     const jsonMatch = content.match(/\{[\s\S]*\}/);
//     if (jsonMatch) {
//       return JSON.parse(jsonMatch[0]);
//     }
    
//     throw new Error('Invalid response format from AI');
    
//   } catch (error) {
//     console.error('AI API Error:', error);
//     // Fallback to mock data
//     return generateMockPlan(userData);
//   }
// };

// const createPrompt = (userData) => `
// As a professional fitness coach, create a detailed, personalized 7-day fitness plan.

// USER PROFILE:
// - Name: ${userData.name}
// - Age: ${userData.age}, Gender: ${userData.gender}
// - Height: ${userData.height}cm, Weight: ${userData.weight}kg
// - Fitness Goal: ${userData.fitnessGoal}
// - Experience Level: ${userData.fitnessLevel}
// - Workout Location: ${userData.workoutLocation}
// - Dietary Preference: ${userData.dietaryPreference}
// - Medical Considerations: ${userData.medicalHistory || 'None'}
// - Stress Level: ${userData.stressLevel || 'Not specified'}

// Generate a COMPREHENSIVE plan including:

// 1. WORKOUT PLAN (7 days):
//    - Include exercises suitable for ${userData.workoutLocation}
//    - Adjust intensity for ${userData.fitnessLevel} level
//    - Focus on ${userData.fitnessGoal}
//    - Specify sets, reps, rest periods

// 2. DIET PLAN:
//    - Create ${userData.dietaryPreference} meals
//    - Include breakfast, lunch, dinner, snacks
//    - Add approximate calories

// 3. TIPS & MOTIVATION:
//    - 5 personalized tips
//    - 1 motivational quote

// Return ONLY valid JSON in this exact format:
// {
//   "workoutPlan": {
//     "monday": {
//       "day": "Monday - Workout Focus",
//       "exercises": [
//         {
//           "name": "Exercise Name",
//           "sets": "3",
//           "reps": "10-12", 
//           "rest": "60s",
//           "description": "Brief instructions"
//         }
//       ]
//     }
//   },
//   "dietPlan": {
//     "breakfast": "Meal description (calories)",
//     "lunch": "Meal description (calories)",
//     "dinner": "Meal description (calories)", 
//     "snacks": "Snack description (calories)"
//   },
//   "tips": ["Tip 1", "Tip 2", "Tip 3", "Tip 4", "Tip 5"],
//   "motivation": "Inspirational quote here"
// }
// `;

// // Include the mock plan generator from frontend version here
// const generateMockPlan = async (userData) => {
//   // ... same mock data generator from frontend version
// };