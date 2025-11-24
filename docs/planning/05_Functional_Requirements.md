# Functional Requirements (FRD) for Budgeting App
## 1. User Authentication & Account Management
    1.1 User Login
    -The system must allow users to log in using email + password.
    -The system must validate user credentials against stored records.
    -The system must display errors for invalid credentials.
    -The system must redirect authenticated users to the dashboard.

### 1.2 User Signup

The system must allow new users to register using:
- Name
- Email

Password

The system must check if the email already exists.
The system must send errors for invalid or weak passwords.
Upon successful signup, the system must redirect the user to onboarding.

### 1.3 Password Recovery

The system must allow users to request a password reset via email.
The system must generate a secure reset token.
The system must allow users to set a new password.
The system must redirect users back to the login page afterward.

### 1.4 Logout

Users must be able to log out and be returned to the login page.
Session tokens must be invalidated on logout.

## 2. Onboarding Flow
### 2.1 First-Time User Detection

The system must detect whether a logged-in user is new.
New users must be redirected to a multi-step onboarding flow.

### 2.2 Onboarding Steps

Add first income entry.

Add basic expenses.

Set an initial savings goal.

### 2.3 Completion

Completing all steps must redirect the user to the dashboard.

## 3. Dashboard
3.1 Data Overview

The dashboard must display:

Total monthly income

Total monthly expenses

Total savings progress

Remaining balance

Quick links to modules (Income, Expenses, Cards, Savings, Reports, Forecasting)

3.2 Navigation

Users must be able to access:

Income module

Expense module

Card module

Savings module

Reports module

Forecasting module

Settings

Logout

4. Income Module
4.1 View Income

Users must be able to view all income entries.

Each entry must show amount, category, date, and description.

4.2 Add Income

Users must be able to add a new income entry.

4.3 Edit Income

Users must be able to modify an existing income entry.

4.4 Delete Income

Users must be able to delete an income entry.

The system must confirm deletion.

5. Expense Module
5.1 View Expenses

The system must display a list of all expenses.

Each entry must include amount, category, payment method, and date.

5.2 Add Expense

Users must be able to record a new expense.

5.3 Edit Expense

Users must be able to update an existing expense entry.

5.4 Delete Expense

Users must be able to remove an existing expense entry.

Confirmation required.

6. Cards Module
6.1 View Cards

Users must be able to view all saved bank cards.

6.2 Add Card

Users must be able to add a new card with:

Card name

Card type

Last 4 digits

6.3 Edit Card

Users must be able to update card details.

6.4 Delete Card

Users must be able to delete a saved card.

The system must confirm deletion.

7. Savings Module
7.1 View Savings Goals

Users must see all savings goals with progress bars.

7.2 Add Savings Goal

Users must be able to set a new goal:

Goal name

Target amount

Monthly contribution

Deadline

7.3 Update Goal

Users must be able to adjust target amounts or contributions.

7.4 Delete Goal

Users must be able to delete a savings goal.

Confirmation required.

8. Reports Module
8.1 Monthly Reports

Users must be able to view a monthly breakdown of:

Income

Expenses

Savings

Remaining balance

8.2 Weekly Reports

Users must be able to generate weekly analysis.

8.3 Custom Date Range

Users must be able to select a custom period for reports.

8.4 Export Reports

The system must allow exporting reports as PDF.

9. Forecasting Module
9.1 Set Forecast Period

Users must be able to set a forecast period (e.g., 3–12 months).

9.2 Adjust Spending Assumptions

Users must be able to simulate:

Reduced expenses

Increased income

Different savings contributions

9.3 Simulate Savings Plan

The system must generate future projections visually.

10. Settings
10.1 Profile Information

Users must be able to update:

Name

Email

10.2 Password Management

Users must be able to update their password.

10.3 Notification Preferences

Users must toggle:

Monthly reminders

Weekly summaries

Goal tracking alerts

10.4 Theme Settings

Users must switch between light and dark theme.

11. System Requirements
11.1 Data Persistence

All data must be stored in a permanent database.

CRUD operations must be atomic.

11.2 Security

Passwords must be hashed.

Authentication must use secure tokens.

API requests must be protected.

11.3 Performance

Dashboard loading time must be < 2 seconds.

Reports must generate within 1 second for typical dataset.