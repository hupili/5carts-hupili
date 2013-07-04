---
name: Triple Town
date: 2013-07-04
link: http://spryfox.com/our-games/tripletown/
open_source: false
open_format:
rate_use: 
rate_quality: 9
tags: ["iOS", "app", "game", "puzzle"]
language: en
layout: review
mathjax: true
---

## Introduction

It's the best game I have played on iOS.
Frankly speaking, I have not played too many games but it's the best so far.

   * Simple rule but infinite variations.
   * Requires good arrangement skills and resursive thinking.
   * Risk decisions and risk management.
   * Reasonable daily quota of free user 
   (150 moves in normal game and 1 trial rush town game).

Few games on iOS can do a good differentiaion between money players and skill players.
The iOS app world is already turned into a revenue generation machine.
Many organized and well planed teams can build "attractive games" very soon.
They either sell ADs (which is annoying) or expensive virtual items.
I would say, it's disgusting.
Most of the times, you can not "enjoy" the game if you don't pay.
The "enjoy" is quoted because you are not enjoying at all.
Getting some "achievements" without thinking (but with money) is enjoyable?
I don't think so.

Triple town is the only one (I find so far) to strike a balance between money players and skill players.
At first, you don't know how to play at all. 
You only have 150 turns and after that you need to wait.
Some people get addicted soon and can not wait so they pay the "infinite turns" item.
However, the game does give you a way to earn turns:
1) build churchs and turn them into a treasure box;
2) build stones and turn them into a treasure box.
With the money earned, you can buy more turns.
If you are skillful enough, the turns you earn can just balance out the turns you spend. 
If not, you can opt to watch some AD videos and earn some turns.
I think the design is descent.

At first, I do not build very high level buildings and can not earn enough turns.
However, I'm not very itchy to buy turns.
When I run out of turns, I just close the game and do other works.
I would come back the next day and continue playing.
Then, at one day, I seem to find the trick.
I can balance the turns spent there.
I can build higher level buildings than ever.
Before that day, what I can achieve is one 6561 object. 
Going to the next level requires 4 such objects **standing consecutively to each other**.
Usually, after building the 6561 object, my map is stuffed.
I can not survive to the 2nd 6561 object.
Amazingly, just at that day, I got the 2nd 6561 object. 
Then comes the 3rd and 4th one. 
However, they are not consecutive.
Then I had a crystal and merged them together.
At gives me the first 26244 object, which is the highest level in triple town.
In the same way, I managed to the get the 2nd 26244 object....
Since I can balance the turns, the flow becomes very smooth.
However, I can not always balance it becuase I need to buy some life saving items at strategic time.
The whole process actually goes about one week.
Following is the screenshot for my town...

![style=center]({{ site.base_links.pic }}/amuse/20130423-triple-town.png)

You see, after getting two 26244 object, I still have a lot of room in my town...
Obviously, one will lose interest at this stage if he understands the trick.
As I said before, triple town has a good balance between money players and skill players.
Without paying a penny, you can enjoy it.

## Facts and Conjectures

Usually, three objects merge into the next level.
Assume you only use grasses, 
the following list shows the number of turns you need to reach a certain level:

   * grass: 1
   * bush: 3
   * tree: 9
   * red house: 27
   * blue house: 81
   * yellow house: 729
   * castle: 2187
   * flying castle: 6561
   * triple castle: 26244

In the previous section, I name objects using those numbers.
Crystal is a special object. 
It can substitute any other object and merge into the next level.
If there is nothing to merge, it will turn into a stone, which is difficult to utilize.

The game will give you random items object 1 to object 27.
I have not numerically measured the probabilities but I think 
it is polynomially inverse to the value of the object.
This part looks stable. 
Even in the later part of the game, I do not feel changes.

The special object, crystal, is different.
Its probability apparently decreases with the progress of the game.
I think it's reasonable.
Without enough crystals, 
new players can not go very far, thus losing interest at a very early stage.
So how to make use of this fact?
You can turn the crystals into stones and merge into big stones. 
With one more crystal, you can turn two big stones into a treasure box with 1000 coin there.
That means: `7 Crystals --> 1000 coin`.
I think it's a good bargain. 
At the initial stage, your crystal can only be used as for example 27 or 81 objects.
This is not efficient.
I would rather turn them into coins and buy turns later.
Except for this, you will see that there may be some initial stones.
So you don't have to spend 7 crystals.
There is anohter formula: `3 crystals + 1 bot --> 500 coin`.
Choose the one that most fits your current scenario.

One last conjecture before ending this 5cart review:
it looks like there is an AI palying against you.
That is, the items are not served purely randomly. 
When you need something, it seldom comes. 
You you do not, they come.
However, I think the algortihm is fair, like a shuffling of items beforehand.
The AI just tune the positions such that your life is harder.
In the long run, the outcome probability stays the same.
I know this could be well explained by [murphy's law](http://en.wikipedia.org/wiki/Murphy's_law).
Nevertheless, I personally feel the existence of such AI.
This is not a blame. 
Even if there is an AI like this, it makes the game more interesting.

## Open Problem

I'm interested in the **minimum** space you need to reach object 26244 all from object 1.
Note that one reason that many players can get high score is that 
we get up to object 27 with different probability.
If all we have is object 1, the life is more difficult. 
In return, it makes an interesting math problem.
