Consider this scenario:
You are building an application that connects people who want to learn languages with each other. Each user is fluent in at least one language, and is trying to learn at least one other language. Your application matches compatible users with one another so that through an exchange, they can teach each other the languages they are good at.

Your matching algorithm is as follows:

For a user who is fluent in language X and wants to learn how to speak language Y, match them with all the users who are fluent in language Y and desire to speak language X.

Note that users can be fluent in multiple languages, and can also desire to learn multiple languages.
For example, say your site has the following users:
- Iris:    fluent in English and Spanish | wants to learn French and German
- Finn:    fluent in German              | wants to learn Spanish
- Nathan:  fluent in French              | wants to learn English and Spanish
- Natasha: fluent in English             | wants to learn Mandarin

When Iris signs on, she'll be matched with Finn and Nathan.
When Finn or Nathan sign on, they'll be matched with Iris.
Natasha will not be matched with anyone until the site has more users.

Part 1:
You currently have two tables: Users and Languages. Draw a diagram that describes how you will store users' desired languages and users' fluent languages, including any added tables you need, as well as those tables' columns.

Part 2:
When a user logs on to your site, describe the algorithm you will use to match that user with other users. Starting with the current user's id, how will you fetch his desired and fluent languages? What will you do after that?