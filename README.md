# fitU

# About

A weight-loss app that uses Statistical analysis to provide users insight into what activity, that they are performing daily/weekly, is affecting their the weight-loss the most.

# Key Features of the app:

- The shop -> serves as a reward center that allow the user to purchase virtual equipment with coins or jewels they earned.
              Virtual reward center will allow users to purchase equipment with earned coins or jewels.
              As users level up by completing lifestyle goals, they can buy items for their characters as rewards.
              Coins can be earned from finishing daily activities.
              Jewels are received for short-term goals, and used to purchase items permanently.
              Goal: to motivate users to achieve long-term goals.

- The DashBoard -> We use a virtual character to represent the user. 
                   The DashBoard contains the basic information about the user and their goals like walking goals, sleep goals etc.Goals section is designed to show  users their progress and daily/long-term goals.
                   
- The Goals Screen -> Allows user to set activity goals for themselves. 
                      Goals are tracked by activity screens.

 - Sleep and Steps screens - Shows Sleep and Steps specific (intended to be pulled directly from apple health kit initially, but currently MOCKED version) information for the user - Main Goal, A note-to-self and Difficulty of goal.
 
 - Stats Screen -> Present descriptions of correlation between each pair of variables through charts and scientific reasoning. 
                   As users get familiar with correlations in daily life, they could become self-organized and be specific about their target of fitness. 
                   Goal: to consolidate users’ confidence on the feasibility of our plans

# Tech-stack
- React Native + TypeScript for both View and Controller functionalities
- Firebase for the backend (no middleware created e.g expressJS API)
