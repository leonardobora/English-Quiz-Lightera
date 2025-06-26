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

### January 26, 2025 - ENEM Enhanced Features (Evening Update)
- Enhanced layout to handle long texts with expandable container (max-width: 1200px)
- Implemented text expansion/contraction functionality for better readability
- Added comprehensive menu system with pause, restart, and navigation options
- Integrated user confirmation dialogs for destructive actions (restart/exit)
- Added direct LinkedIn link for Leonardo feedback (linkedin.com/in/leonardobora)
- Created pause overlay with visual feedback for interrupted sessions
- Improved responsive design for optimal text display on all screen sizes

### January 26, 2025 - Compact Header & Improved Text Expansion (Final Update)
- Created compact horizontal header design to maximize question space
- Redesigned ENEM header with logo, title, progress, and menu in horizontal layout
- Fixed text expansion to use modal-style overlay instead of breaking page layout
- Enhanced expansion with proper backdrop, scroll handling, and click-outside-to-close
- Optimized header responsiveness for mobile devices with adaptive layout
- Improved visual hierarchy with gradient backgrounds and cleaner button styling

### January 26, 2025 - Menu System Implementation & UI Polish (Final Evening Update)
- Removed problematic text expansion feature per user feedback (caused overlay issues)
- Implemented comprehensive menu system for both normal quiz and ENEM extension
- Added horizontal compact header design with gradient styling for normal quiz
- Enhanced button differentiation: blue gradient for main quiz, green for ENEM extension
- Created pause functionality with overlay and confirmation dialogs for both quiz modes
- Added LinkedIn feedback integration and professional menu options
- Optimized responsive layout for better question display and user experience

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