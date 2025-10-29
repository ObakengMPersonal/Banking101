# Architecture Decisions

## 1: Framework Choice
**Decision:** Use Vite + React + TypeScript.  
**Context:** Provides fast build times, modularity, and scalability.  
**Alternatives Considered:** Create React App, Next.js.  
**Consequences:** Static site generation not included by default (acceptable for this project).

## 2: Styling
**Decision:** Use TailwindCSS for utility-first styling.  
**Context:** Quicker iteration, easier responsive design.  
**Alternative:** Styled Components, CSS Modules.  
**Consequence:** Slight learning curve with utility classes.

## 3: Containerization
**Decision:** Use Docker for both development and production.  
**Context:** Guarantees environment consistency.  
**Consequence:** Slightly slower local dev, but easier CI/CD.

## 4: Database Solution

**Decision:** Use Supabase as the backend database solution.

**Context:**  
The budgeting app requires a reliable, scalable, and easy-to-integrate database for storing user data, including authentication info, income/expense records, and saving goals. Supabase provides:

- Hosted PostgreSQL database
- Built-in authentication
- REST and GraphQL APIs
- Easy integration with frontend frameworks (React + TypeScript)
- Free tier suitable for small projects or solo developers

**Alternatives Considered:**  
- Firebase (NoSQL, different querying model)  
- Self-hosted PostgreSQL (requires manual setup, more maintenance)

**Consequences:**  
- Simplifies backend development and deployment  
- Easy integration with Docker and CI/CD workflow  
- Limits to Supabase’s free tier for production usage  
- Ties the app to Supabase’s ecosystem, though switching later is possible

## 5: Frontend State Management

**Decision:** Use React Context + useReducer for state management.

**Context:**  
The budgeting app has multiple components that need to share and update state, such as:

- User authentication info  
- Income and expense records  
- Saving goals and progress  
- Dashboard summary data  

React Context + `useReducer` is chosen because:

- It integrates seamlessly with React + TypeScript  
- Simple to implement for small-to-medium apps  
- No external library required, keeping bundle size small  
- Easy to debug and maintain

**Alternatives Considered:**  
- **Redux Toolkit:** More boilerplate for a small app; more complexity  
- **Zustand / Jotai:** Lightweight and flexible, but less widely adopted than Context + `useReducer`  

**Consequences:**  
- Suitable for the app’s scale and functionality  
- Easy integration with Supabase API calls  
- If the app grows significantly, migration to Redux or Zustand is possible in the future

