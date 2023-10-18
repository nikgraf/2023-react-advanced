## Intro for the Exercise

- Ask what's wrong with the exercise start version (don't tell the solution).

Explain the issue

1. fetch for Bob
2. fetch for Taylor
3. Taylor result is coming back
4. Bob result is coming back

## Exercise: Fix fetching inside an Effect

Note: This exercise is directly taken from the beta docs: https://beta.reactjs.org/learn/synchronizing-with-effects.

This component shows the biography for the selected person. It loads the biography by calling an asynchronous function `fetchBio(person)` on mount and whenever `person` changes. That asynchronous function returns a Promise which eventually resolves to a string. When fetching is done, it calls `setBio` to display that string under the select box.

There is a bug in this code. Start by selecting “Alice”. Then select “Bob” and then immediately after that select “Taylor”. If you do this fast enough, you will notice that bug: Taylor is selected, but the paragraph below says “This is Bob’s bio.”

Why does this happen? Fix the bug inside this Effect.
