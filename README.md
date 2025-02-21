# Typo
<image src="https://github.com/user-attachments/assets/e9ecc20f-8b3e-4e9a-bbea-6546dbd701a8" width=500 />


## Contents
* [Overview](#overview)
* [Built With](#built-with)
* [Screenshots](#screenshots)
* [Links](#links)
* [Process](#the-process)
* [Key Takeaways](#key-takeaways)
* [Continued development](#continued-development)
* [Author](#author)

## Overview
Given a day and a half to produce educational material in the medium of our choice. For this project 
I had young coders in mind, who would have some experience with JavaScript. The main idea was to promote TypeScript as a tool they could start using now to help avoid type errors. It expanded slightly into a basic introduction and laying out a couple of options to start trying TypeScript without having to be a master of the command line.
  
## Built With
  Next.js - TypeScript - CSS - ClaudeAI
  
## Screenshots
<img src="https://github.com/user-attachments/assets/88e638a6-60f7-428d-8661-2a5751633c43" width="750" />

<img src="https://github.com/user-attachments/assets/0b695f37-9a72-4b01-bb53-a4a576728061" align="center" />\


![dinoReadMe](https://github.com/user-attachments/assets/1586020a-3bf7-4e5d-9ebd-8dc70d646707)
  
## Links
Scratch  https://scratch.mit.edu/

Figma  https://www.figma.com/

## The Process
I started out brainstorming the facts about Typescript and potential mediums for my project to get the ball rolling. I initially wanted to make a video, but having  had  a play around with a few different video editing tools I decided that within the time limits I was better off using technologies that I had some experience of. During that process though, I had become sure that I wanted to incorporate animation to keep the attention of younger viewers. One technology we became quite familiar with early on in the School of Code Bootcamp was Scratch, which is easy to use for making animations. It was also a good choice as it was a tool that I thought would be familiar to the target audience. If you've never played around with it, I highly recommend it as a learning tool and hobby! You can do a lot more with it than it might first seem and it's brilliant for kids to get used to the idea of coding with components.

I made a rough animation of my own and thought about how I would display it. I didn't want to spend my entire time animating, so I looked at the initial Story I had come up with and tried to tie it to what I had so far. My first idea was to follow a programmer as they transform from dinosaur to agile bird, freed from type errors! That was far too ambitious! I went with a reducted version for the cartoon, lots of small bugs causing a nuisance to the developer (a charming dinosaur) when using JS vs the developer free to work on more abstracted ideas with TypeScript. Animation time reduced, great, but now where was the education coming in?

![ideation](https://github.com/user-attachments/assets/b2054217-2672-4013-9179-bc6b1fc874e7)
*Initial planning*

The two other mediums I had briefly considered were a LinkedIn article and a webpage. Clearly LinkedIn wasn't the place for this project to live but a website would give me the freedom to explore my ideas. I was becoming very aware of time, having spent a good deal of it by this point and I knew from the offset that if I was going to go down the webpage route I was going to need help. I made a micro plan, deciding immediately that I would go for next.js so that my project would be set up, ready to go straight away and that pathing, if there was any, would be made easy. I also decided instantly to try to use AI to help me code.

Ai is a tool we've been looking into during the course of the bootcamp. Like it or loathe it it's not going away, so we've been working on when, where and how to use it. I've had a love hate thing going with CoPilot, which we were lucky enough to get a pro version of in our GitHub student packs. I don't feel that CoPilot has the knack for picking up on intent in the same way that chatGPT does, the ability to produce code to the same level as Claude and it lacks the process sharing that you get with DeepSeek. I guess everyone has a go-to by now and I have been pretty verbose about my preference for Claude! Which is why when a team mate (we were working in pods on individual tasks this week) saw that I was using CoPilot in VSC she queried why I wasn't using Claude. G a m e C h a n g e r. As it turns out you can pick between a few AI models in VSCode! With my dearest AI companion by my side I set to work.

Claude and I worked until late in the evening. I was having a blast. Using it in all the right ways: asking questions, talking code through, getting suggestions. Let's be clear, Claude built a lot of this website, but i did too. Not only was this project a real breakthrough in prompt engineering for me but I was learning so much from the...well the collaboration! The problems came when I didn't stop while I was ahead.

As it got late I realised I was starting to using Claude as a crutch. Not questioning the code too much, just being extremely specific about my needs and checking in on anything that seemed off. The same was somewhat true in the morning as bleary eyed I returned to the project. I noticed that the scratch content was taking a long time to render and after talking it through with Claude we spent an hour or maybe even two adding clients and states and spinners and yeah they were loading faster but it was around then I realised I had lost my way in the code. I asked Claude to confirm that it wouldn't be possible to render the components completely server side and being sure of that and feeling that I hadn't really done the work on that bit I thought it might be best to remove that code as I'm not comfortable enough with AI to hand it the keyboard entirely! I don't know if SoC has done an amazing job of getting me automatically communicating with the team or if my sleepy brain did consider Claude my team mate but we had a review of our work as a team to make the decision. I've included a little of our interaction. I found it especially helpful when making the rollback decision to ask Claude to recap everything we had changed and its impact.


<img src="https://github.com/user-attachments/assets/e3e31c4d-500c-4d56-9c4b-d151f0b4b156" width=300 />
<img src="https://github.com/user-attachments/assets/6914a3ae-adac-49d6-94a6-b2544f161e7d" height=150 />
<img src="https://github.com/user-attachments/assets/b5da2708-2373-4331-9000-aced2ffd3f99" width=200 />

Team Retrospective\
<img src="https://github.com/user-attachments/assets/3f6c0c36-3915-41de-950f-f1c8f771b117" height="50" />\
<img src="https://github.com/user-attachments/assets/d8b63985-564c-4c89-8d4e-88e5004a0c8b" height="200" />\
<img src="https://github.com/user-attachments/assets/9dc43fe5-63ea-4150-b104-70957d4579d8" width="400"  align="center"/>

Certainly Claude would have as many recommendations for what we should add or change next but I'll keep it to my own in the Continued Development section.

## Key Takeaways
* Efficient use of AI tools and when not to use them.
* Deeper understanding of file structure.
* More comfortable with React
* Trying out some React tools that were completely unknown to me before like useMemo and useCallback, even if they didn't make this iteration of the project.

## Continued Development
* To get user feedback
* To check some of the CSS as what looked great on my machine showed weak edges on another.
* Add more accessibility. Including the colour scheme which, while fun for kids might not have been the greatest choice for readability or constrast.
* Tailor the language better for kids.
* Add an on website TypeScript Playground.
* Add clearer explanations and maybe walk through tutorials.
* Consider other options for adding the scratch content.

## Author
Holly - 
https://github.com/Holl4444

https://www.linkedin.com/in/holly-goulbourne-9b0952122/
