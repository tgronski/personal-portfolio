import leadership from './Lead/leadership.jpg'
import computersmall from './Lead/computersmall.jpg'
import keywords from "./keywords.png"
import hacktoberfest from './Lead/hacktoberfest.jpg'
import React from 'react';

let article1=<span>As a woman looking to break into tech (and a career changer), I am always on the lookout for helpful & motivating resources. 
    Learning to code is already challenging. It's important to have tons of great resources you can turn to for help.
<br/>
<br/>
Disclaimer: Not all of these resources are marketed as "inclusive." However, based on my research and/or personal experience, these resources are great for any under-represented individuals looking to break into tech.
<br/>
<br/>
Organizations:
I highly recommend these groups (remote & local to the Bay Area).
<br/>
<ul className='articleList'>
<li>-Tech Ladies</li>
<li>-Women Who Code</li>
<li>-Write/Speak/Code</li>
<li>-This Dot Media</li>
<li>-Tech Inclusion</li>
<li>-Techtonica</li>
<li>-General Assembly</li>
<li>-Include.io</li>
</ul>
<br/>
Podcasts:
I've found a few podcasts that were not inclusive (i.e. using the pronouns he/him/his to describe hypothetical developers, career advice that if you apply enough you'll just fall into a tech career, etc). These podcasts, however, are inclusive, high quality, and share motivating stories.
<br/>
<ul className='articleList'>
<li>-Code Newbie</li>
<li>-Learn to Code With Me</li>
<li>-The Free Code Camp Podcast</li>
<li>-Front End Happy Hour</li>
<li>-This Dot Media Fempire</li>
<li>-Command Line Heroes</li>
<li>-The Ladybug Podcast</li>
</ul>
<br/>
Online resources:
<br/>
<ul className='articleList'>
<li>-Free Code Camp</li>
<li>-Programming With Mosh</li>
<li>-Code Academy</li>
<li>-100 Days of Code</li>
</ul>
<br/>
Conferences:
<br/>
<br/>
-Write/Speak/Code Conference is probably the most inclusive place on earth
<br/>
<br/>
{/* Twitter:
<ul className='articleList'></ul>
@WellPaidGeek
<br/>
@moshhamedani */}
{/* <ul/> */}
Do you have any suggestions for more code newbie resources? I'd love to add to my list!
</span>

let article2=<span>Imagine a world where you’re constantly discouraged from speaking too much or from talking too loudly. Imagine a work environment where socializing with others is actually seen as a distraction, rather than a source of energy and resourcefulness. What if success was determined based on your ability to build relationships through written communication, rather than speaking and networking? Would you feel out of your element? Would you be biting your tongue? Would you be compromising part of your personality to fit in?
This is how many introverts feel all the time. They are expected to change their inherent personality traits in order to earn respect and professional success. It is exhausting. <br/><br/>As an introvert who loves leading teams with both extroverts and introverts, this is my actionable advice:<br/><br/>

Tell them that the fact they are introvert can be valuable to the team/organization. This is so important. I once had a department head, who was known for her extroverted, positive, commanding personality, tell me that she admires my introverted traits. She told me that she was trying to break into the C-Suite, but it was hard because they were all introverts and she wasn’t. Hearing her go on to say that my introverted personality would actually help me earn respect and success at a higher level of leadership was astounding. I’d never heard anyone say that before. Up until that day, I’d only ever been asked to change my personality to fit in. I’ve since left that company and industry, but the confidence I gained through that one conversation still motivates me.
<br/><br/>
Offer multiple channels for feedback and ideas. The key here is that you cannot assume that someone does not have ideas to share, just because they did not voice them out loud. You will have employees that are totally out of their element in a 1:1 or team meeting, but if you ask them for feedback or ideas via online or written communication, they may have tons to offer. Writing ideas instead of speaking ideas does not make the ideas themselves any less valid.
<br/><br/>
Create spaces where they can share their ideas with others, without getting bulldozed over or cut off. As a leader, it is your job responsibility to combat people who are cutting off introverts, even if they are doing so unintentionally. Something as simple as “Thank you [well intentioned person with a loud voice]. We will get back to that, but I want to make sure we also hear everything [introvert with great ideas] has to say,” can go a long way.
<br/><br/>
Do not ask them to change everything. When I worked as a stock broker, I was constantly being told by my managers that if I wanted to be successful I would have to become an extrovert. There is a reason that Myers Briggs tests are split into I & E. Introverts exist. They are not going any where. Being an extrovert is not a job qualification. What I actually needed was someone to help me share my unique voice. Maybe the introvert on your team gets drained by your noisy co-working space. Is there a room they can check out to recharge? Maybe the introverts on your team don’t know how to network in your organization. Is there a leader or IC you can introduce them to? Maybe the introverts on your team find it hard to share ideas in meetings. Can you help them learn to ask thoughtful questions in meetings as a way to show they are engaged and impactful?
For me, the golden rule of managing introverts is that you cannot assume that not speaking up in meetings translates to a lack of interest.</span>
let article3=
<span>
    <h3>Contributing to open source is a great way to gain experience and confidence as a developer. 
Anyone can create an open source project, but examples of major open source projects include Dev.to, Facebook's React.js, and Microsoft's VS Code. </h3>
<br/>
<a href="https://hacktoberfest.digitalocean.com/">Hacktoberfest</a> is a great time to get started with open source because there are so many projects that are welcoming new developers.  

<br/><br/>
<img className="articleImgSmall" scr="https://media.giphy.com/media/3h4Bo5fja4ZgYS0WEg/giphy.gif"/>



<ul className='articleList'><h3>Table of Contents</h3>
<li><a href="/leadership/3#keywords">Key words to help you get started</a> </li>
<li><a href="/leadership/3#projects">Find an Open Source Project</a></li>
<li><a href="/leadership/3#gitpractice">Git practice for total beginners</a></li>
<li><a href="/leadership/3#firstpr">Make your first Hacktoberfest Contribution</a></li>
</ul>
<br/><br/>
<h3 id="keywords">Key Words:</h3>
<br/>
<img className="articleImgSmall" src="https://media.giphy.com/media/l3q2TS4hLhi3rPBYI/giphy.gif"/>
<br/><br/>
<img className="articleImgSmall" src={keywords}/>
<br/><br/>

<h3 id="projects">Find an Open Source Project</h3>
<br/>
<img className="articleImgSmall" src="https://media.giphy.com/media/26gs78HRO8sOuhTkQ/giphy.gif"></img>
<br/>

<p>For 2020, Hacktoberfest is requiring 4 open source contributions. Once you have found a repo you want to contribute to, make sure it meets the <a href="https://hacktoberfest.digitalocean.com/details">quality standards</a>. 
<br/><br/> Not sure where you want to contribute? There are several ways to find projects:
<br/><br/>

1) Search for some Hacktoberfest key words directly in GitHub (ex. Hacktoberfest, first-timers-only, beginner-friendly)

<br/><br/>
2) Contribute to an open source website or technology that you already use in your tech stack (i.e. Dev.to, Women who code, React.js) 
<br/><br/>
</p>

<h3 id="gitpractice">Is this your first time ever making a pull request? </h3>I recommend getting comfortable with git by practicing on your own repo:
<br/><br/>
<i>Practicing making a PR on your own code is a great way to learn the process with the assurance that you won't mess up anything.</i>😅
<br/><br/>
1) Make a practice repo. 
<br/><br/>
<img className="articleImgSmall" src="https://dev-to-uploads.s3.amazonaws.com/i/09ppiyc4f3w6z8ezk2f1.png"/>
<br/><br/>
2) On your terminal, make a new directory for your practice repo and add a README file. This will act as our original project. Next, we'll make a pull request to add a new file to the original.
<br/><br/>
Run the following in your terminal: 
<br/><br/>
mkdir pr-practice
cd pr-practice
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/*insert-your-github-username*/pr-practice.git
git push -u origin master
<br/><br/>
3) We now have our practice open-source project on GitHub. We are going to make a pull request to add a new Hello World file. In your terminal, run the following: 
<br/><br/>
git checkout -b newbranch
git remote add upstream https://github.com/*insert-your-github-username*/pr-practice.git
touch HelloWorld.js
git add HelloWorld.js
git commit -m "Adds new Hello World file" 
git push -u origin newbranch
<br/><br/>
4) Refresh the repo on GitHub and click "Compare and pull request." 
<br/><br/>
<img className="articleImgSmall" src="https://dev-to-uploads.s3.amazonaws.com/i/ft1n4t8a9zfkmcczc1hz.png"/>
<br/><br/>
5) Make sure that the base is your master branch (the original project with our README file) and the compare branch is the new brach we created with the Hello World file. The title of the merge request should be a brief description of the changes.
<br/><br/>
<img className="articleImgSmall" src="https://dev-to-uploads.s3.amazonaws.com/i/ol1b10lsrzpvgukfuzhf.png"/>
<br/><br/>
6) If there are no conflicts with your pull request, go ahead and merge the new code with your original project by clicking "Merge pull request" & "Confirm merge"
<br/><br/>
<img className="articleImgSmall" src="https://dev-to-uploads.s3.amazonaws.com/i/wsealmq2oincjin04uql.png"/>
<br/><br/>
7) Congratulations! You have merged your new file.
<br/><br/>
<img className="articleImgSmall" src="https://media.giphy.com/media/U4dmUBCl91Q5bIq18A/giphy.gif"/>
<br/><br/>


<h3 id="firstpr">How to make your first contribution for Hacktoberfest:</h3>
<br/>
So, you're ready to make your first open source contribution (yay)!👩🏿‍💻
<br/>
<br/>
<i>There are a few extra steps you'll need to take when submitting a pull request on an open source project. Before you start writing code, make sure to sign up [here](https://hacktoberfest.digitalocean.com/) so that you contributions count</i> 
<br/>
<br/>
1) Check out the repo's README to see if they have any syntax (style) standards that you need to follow. Click on the "issues" tab of the repo to get an idea of where you may be able to contribute.
<br/>
<br/>
2) Fork the repo: The first step is to "fork" or copy the current version of the project. When we fork a repo, we get a copy of the code that we can edit on our own computer without impacting the original code. 
<br/>
<br/>
You can think of this like the "save a copy" feature in Excel. When someone sends you an excel file and it comes to you as read only, you have the option to edit the file. When you edit and save a copy of their original file, it is updated on your computer only. 
<br/>
<br/>
<img className="articleImgSmall" src="https://dev-to-uploads.s3.amazonaws.com/i/4bt3ppw9hefjrwz1agic.png"/>
<br/>
<br/>
2) Github will take you to your forked repo. Copy the link to the repo so that we can start coding: 
<br/><br/>
<img className="articleImgSmall" src="https://dev-to-uploads.s3.amazonaws.com/i/ar99i69tiopack0gprcf.png"/>
<br/>
<br/>
3) In your terminal run the following using a directory-name that describes your project: 
<br/>
<br/>
mkdir directory-name
cd directory-name
git clone copied-fork-repo-link
cd repo-name
git checkout -b newbranch
git git remote add upstream copied-fork-repo-link
<br/>
<br/>
4) Time to code! 
<br/>
<br/>
5) When you are ready to commit your changes, go back to the terminal and run the following: 
<br/>
<br/>
git add new-file-name *(if applicable)*
git commit -m "Description of your contribution"
git remote add origin copied-fork-repo-link
git push -u origin newbranch 
<br/>
<br/>
6) Go back to your repo on Github. You should see the option to submit a pull request: 
<br/>
<img  className="articleImgSmall" src="https://dev-to-uploads.s3.amazonaws.com/i/ft1n4t8a9zfkmcczc1hz.png"/>
<br/>
<br/>
5) Make sure that the base is the original repo and the compare branch is the new brach you created on your own repo. The title of the merge request should be a brief description of the changes. Click Create pull request to submit.
<br/>
<br/>
<img className="articleImgSmall" src="https://dev-to-uploads.s3.amazonaws.com/i/unw1biaqlwnr3ncanqub.png"/>
<br/>
<br/>

6) Now we wait to hear from the maintainer! When it comes to making an open source contribution, you need to be aware that not all PR requests get approved. It is also common for the maintainer to send you some feedback of things you need to change before your contribution is merged. 
<br/>
<br/>
<img className="articleImgSmall" src="https://media.giphy.com/media/dwAMmklywWNIfzr3vD/giphy.gif"/>
<br/><br/>
_____________________________________________________________

<br/><br/>
Disclaimer: Learning how to use the command line & learning how to use GitHub can be really challenging at first!  The most important thing to remember is that pretty much any mistake you make can be reversed. 🙌🏽 Even for experienced devs, practice makes perfect when it comes to using GitHub.
<br/>
</span>

export default{
    'articles':[{
                   
                    0:
                        {
                        'title': 'An Actionable Guide to Managing Introverts',
                        'article':'1',
                        'author': 'Tess Gronski ',
                        'date': 'Aug 18',
                        'read': '3 min read',
                        'img': leadership,
                        'original': 'Originally published at https://dev.to on August 18, 2019.',
                        'content1': article2
                        }
                    ,
                    1:
                        {
                        'title': 'A Running List of Resources for New Developers',
                        'article':'2',
                        'author': 'Tess Gronski ',
                        'date': 'Nov 3',
                        'read': '3 min read',
                        'img': computersmall,
                        'original': "Originally published at https://dev.to on November 3, 2019.",
                        'content1': article1
                    },
                    2: {
                        'title': 'Beginners Guide to Hacktoberfest',
                        'article':'3',
                        'author': 'Tess Gronski ',
                        'date': 'Sept 27',
                        'read': '5 min read',
                        'img': hacktoberfest,
                        'original': "Originally published at https://dev.to on September 27, 2020.",
                        'content1': article3

                    }
    }]

    
}

