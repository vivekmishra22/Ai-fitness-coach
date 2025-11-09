import { generateFitnessPlan } from '../services/aiService.js';

export const createPlan = async (req, res) => {
  try {
    const userData = req.body;
    
    // Validate required fields
    const required = ['name', 'age', 'gender', 'height', 'weight', 'fitnessGoal', 'fitnessLevel', 'workoutLocation', 'dietaryPreference'];
    const missing = required.filter(field => !userData[field]);
    
    if (missing.length > 0) {
      return res.status(400).json({
        error: `Missing required fields: ${missing.join(', ')}`
      });
    }

    const plan = await generateFitnessPlan(userData);
    
    res.json({
      success: true,
      data: plan,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Plan generation error:', error);
    res.status(500).json({
      error: 'Failed to generate fitness plan',
      details: error.message
    });
  }
};