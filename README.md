# The SQUARES game (test task)

This is a test task for INDG. The descriptions of task in the file [Programming_case_Grip.docx](./Programming_case_Grip.docx).

The answers of the task's question is in the [part 2](#2-questions-answers).

## 1. Using

1. Clone this repo:

```bash
git clone https://github.com/VelikiyYaroslav/grip_indg_test.git
```

2. Install packages:

```bash
npm i
```

> note that you should have already installed nodejs+npm

3. Run the application:

```bash
npm start
```

The app should automatically open in browser.

## 2. Questions answers

Answers of tasks questions.

### 1. Create the application

Done.

### 2. App architecture

> Show or explain how you structured the application, e.g. by describing or sharing architecture.

The app is not big so. The app's structure and architecture is not so pronounced.

Now the app has next structure:

`/` - the root of app codebase. Here contains the meta info (docs, packages, etc).

`/public/` - the folder for public static data (for future site).

`/src/` - the main code of app. On this level is placed app's entry-point and some shared styles (should be moved to separate folder in future).

`/src/Store/` - The state driver of app (Redux for now). It contains index file and folders for each entity (each entity ha it's own files for: actions, reducers and types).

> Note. Maybe should move types separately in future. Especially if different entity will have shared types.

`/src/Selectors/` - Helpers for easy select some logical parts of Store.

`/src/Helpers/` - Helpers for different actions.

> Note. Selectors and Helpers is not structured now - it should be changed in future.

`/src/Components/` - High order or ready to reuse components (each component can contain each own sub components that not independent).

### 3. App realization insights

In the realization there next 4 points that deserve attention:

1. There no design in task. So I try to do it in more simple way and do the UI the most accessible as possible.

2. There was needed to implement the sort of `Breadth-first search` algorithm. It was pretty interesting. The implementation is here [/src/Helpers/CalculateGameScore.ts](./src/Helpers/CalculateGameScore.ts).

3. I decide to use css grid - so practice in it was be interesting too.

4. The game is realized as state machine (but it may be redundant).

### 4. Thinking about game

> Do you think the game is fair?

Pretty well, at the big board.

> Does any player have an advantage by going first?

> Is this true for any board size?

Yes.
No (see below).

* BoardsSize=2 always draw.
* BoardsSize=3 the first player has advantage (the second player lose or draw, if first player take an optimal strategy).
* BoardsSize=4+ on each next step the first player has less of advantage .

> Is this provable?

Yes. See more in theory of GO and Tic-tac-toe games.
