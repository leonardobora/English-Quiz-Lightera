# Teacher Leo's Interactive Quiz - Project Documentation

## Overview
An interactive English learning platform with Portuguese interface designed for Brazilian students. The application features conversational English questions, ENEM exam preparation, local rankings, text-to-speech functionality, and comprehensive feedback systems.

## Project Architecture

### Core Technologies
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js with HTTP server
- **Database**: PostgreSQL with Drizzle ORM
- **External APIs**: OpenAI (Text-to-Speech, GPT-4o)
- **Storage**: LocalStorage for client-side data persistence

### Key Features
1. **Main Quiz System**
   - 40 conversational English questions (American English focus)
   - Random selection of 10 questions per session
   - Audio pronunciation with OpenAI TTS
   - Smart audio caching system
   - Scoring and leaderboard functionality

2. **ENEM Extension** (Added: January 26, 2025)
   - Dedicated ENEM preparation quiz mode
   - 10 authentic ENEM English questions from 2017-2020
   - Translation functionality for comprehension assistance
   - Separate scoring and leaderboard system
   - Audio support for question reading

3. **User Experience**
   - Student registration with emoji selection
   - Portuguese interface for Brazilian students
   - Progress tracking and confetti celebrations
   - Comprehensive feedback collection system
   - ENEM/vestibular preparation reminders

## Recent Changes

### January 26, 2025 - ENEM Extension Implementation
- Added complete ENEM quiz extension with dedicated interface
- Implemented 10 authentic ENEM questions (2017-2020) with proper formatting
- Created translation feature for student comprehension assistance
- Built separate audio caching system for ENEM content
- Added dedicated ENEM scoring and leaderboard functionality
- Integrated feedback system specifically for ENEM quiz experience
- Designed responsive UI with distinct ENEM branding and styling

### Previous Updates
- Implemented OpenAI text-to-speech integration with audio caching
- Created database schema for scores, users, and feedback
- Added comprehensive feedback system (thumbs up/down + written comments)
- Enhanced UI with vibrant styling and responsive design
- Integrated confetti celebrations and progress indicators

## User Preferences
- Focus on American English content and pronunciation
- Brazilian Portuguese interface for accessibility
- ENEM and vestibular exam preparation priority
- Interactive learning approach with immediate feedback
- Clean, engaging UI suitable for young learners

## Technical Architecture

### File Structure
```
├── index.html          # Main application interface
├── styles.css          # Application styling and animations
├── script.js           # Core application logic
├── server.js           # Node.js backend server
├── server/
│   └── db.ts          # Database connection setup
├── shared/
│   └── schema.ts      # Database schema definitions
└── assets/            # Logo and visual assets
```

### Database Schema
- **users**: Student registration and profile data
- **scores**: Quiz results for both main and ENEM modes
- **feedback**: User feedback collection for continuous improvement

### External Dependencies
- OpenAI API for text-to-speech functionality
- PostgreSQL database for data persistence
- Drizzle ORM for database operations
- Tailwind CSS for responsive design framework

## Deployment Notes
- Server runs on port 5000 with 0.0.0.0 binding for accessibility
- Environment variables required: DATABASE_URL, OPENAI_API_KEY
- Audio caching implemented for performance optimization
- Responsive design supports mobile and desktop usage

## Future Considerations
- Potential expansion with additional ENEM subject areas
- Integration with formal assessment tracking
- Enhanced analytics for student progress monitoring
- Possible migration to dedicated ENEM preparation platform