module.exports = {
    "data": [
      {
        "text": "what is going on everybody welcome to",
        "start": 0
      },
      {
        "text": "another django with python for web",
        "start": 2
      },
      {
        "text": "development tutorial in this tutorial",
        "start": 5
      },
      {
        "text": "what we're talking about is the admin",
        "start": 6
      },
      {
        "text": "app that comes with your django",
        "start": 9
      },
      {
        "text": "applications so the first thing we need",
        "start": 11
      },
      {
        "text": "to do if we want to utilize the admin is",
        "start": 14
      },
      {
        "text": "as you'll see if we go to our website ok",
        "start": 16
      },
      {
        "text": "and you want to go to admin you just do",
        "start": 20
      },
      {
        "text": "slash admin and you get here and then",
        "start": 22
      },
      {
        "text": "your started thinking hmm what do I do",
        "start": 26
      },
      {
        "text": "now admin admin no right so you don't",
        "start": 29
      },
      {
        "text": "have an admin you don't know what the",
        "start": 33
      },
      {
        "text": "login is so the first thing you have to",
        "start": 35
      },
      {
        "text": "do is actually create a super user or an",
        "start": 36
      },
      {
        "text": "admin so that's what we're going to do",
        "start": 38
      },
      {
        "text": "first so we're going to go and break the",
        "start": 39
      },
      {
        "text": "running server and we'll go up here and",
        "start": 41
      },
      {
        "text": "get managed up PI and what we want to do",
        "start": 44
      },
      {
        "text": "is Python manage PI create super user",
        "start": 47
      },
      {
        "text": "hit enter and then now you can define",
        "start": 53
      },
      {
        "text": "the user",
        "start": 57
      },
      {
        "text": "I'll just call mine admin email address",
        "start": 57
      },
      {
        "text": "HS Keynes leage com password whatever",
        "start": 60
      },
      {
        "text": "you want it to be I think I picked a",
        "start": 64
      },
      {
        "text": "pretty pretty good one okay got our user",
        "start": 68
      },
      {
        "text": "and I need to login before I forget the",
        "start": 72
      },
      {
        "text": "password so come over here and the",
        "start": 74
      },
      {
        "text": "username will be admin oh wait hold on",
        "start": 79
      },
      {
        "text": "we need to run the server create super",
        "start": 81
      },
      {
        "text": "user so manage up I run server and now",
        "start": 85
      },
      {
        "text": "what we want to do is login so you'll",
        "start": 91
      },
      {
        "text": "ghost you know your your website slash",
        "start": 94
      },
      {
        "text": "admin password good ok so once you've",
        "start": 96
      },
      {
        "text": "done that you log in this is the Chango",
        "start": 102
      },
      {
        "text": "administration so you'll see here that",
        "start": 103
      },
      {
        "text": "you've got groups and you've got users",
        "start": 106
      },
      {
        "text": "in here and then what you could do is",
        "start": 109
      },
      {
        "text": "you can click on groups for example",
        "start": 111
      },
      {
        "text": "there we don't have any groups but you",
        "start": 113
      },
      {
        "text": "could like plus add a group and do span",
        "start": 115
      },
      {
        "text": "see stuff here and you can go into users",
        "start": 117
      },
      {
        "text": "and look at that there we are and we",
        "start": 120
      },
      {
        "text": "could set you know are we an active user",
        "start": 122
      },
      {
        "text": "if you uncheck this it's basically the",
        "start": 125
      },
      {
        "text": "equivalent of deleting an account it",
        "start": 127
      },
      {
        "text": "doesn't delete the account but it",
        "start": 129
      },
      {
        "text": "doesn't let them",
        "start": 130
      },
      {
        "text": "login staff status super user status you",
        "start": 131
      },
      {
        "text": "can create custom groups and give very",
        "start": 134
      },
      {
        "text": "specific custom user permissions what",
        "start": 136
      },
      {
        "text": "can they this user actually do you've",
        "start": 139
      },
      {
        "text": "got all this stuff available",
        "start": 140
      },
      {
        "text": "okay cool but we don't really care that",
        "start": 142
      },
      {
        "text": "much about that what we really want is",
        "start": 145
      },
      {
        "text": "well we want a pony right we want to",
        "start": 148
      },
      {
        "text": "being able to access our blog table",
        "start": 151
      },
      {
        "text": "basically here and edit the blog post",
        "start": 156
      },
      {
        "text": "blogs do everything by this",
        "start": 160
      },
      {
        "text": "administration panel okay because we",
        "start": 162
      },
      {
        "text": "want a pony so what we're going to do is",
        "start": 164
      },
      {
        "text": "first we have to admit that we're not",
        "start": 167
      },
      {
        "text": "going to get a pony but Jango is going",
        "start": 169
      },
      {
        "text": "to give us something close to a pony so",
        "start": 172
      },
      {
        "text": "what we're going to do is we're going to",
        "start": 174
      },
      {
        "text": "go into blog and you should already have",
        "start": 175
      },
      {
        "text": "an admin pie file go ahead and open that",
        "start": 178
      },
      {
        "text": "up and you'll see that we're importing",
        "start": 181
      },
      {
        "text": "some stuff naturally and then you can",
        "start": 184
      },
      {
        "text": "register your models here so what we're",
        "start": 186
      },
      {
        "text": "going to do is from blog models import",
        "start": 191
      },
      {
        "text": "posts so that's our post class which",
        "start": 195
      },
      {
        "text": "defines that table and all that fun",
        "start": 198
      },
      {
        "text": "stuff now we're going to do is simple",
        "start": 200
      },
      {
        "text": "admin dot sight register and we register",
        "start": 203
      },
      {
        "text": "post save that come back to your admin",
        "start": 208
      },
      {
        "text": "panel go back to the home boom there's",
        "start": 215
      },
      {
        "text": "post oh my goodness so now you can see",
        "start": 220
      },
      {
        "text": "that how we got add and change and we",
        "start": 224
      },
      {
        "text": "can also click but there's zero posts",
        "start": 226
      },
      {
        "text": "but then we can also add a post here so",
        "start": 228
      },
      {
        "text": "let's go ahead and add a post",
        "start": 230
      },
      {
        "text": "ermahgerd Django is awesome oh wow",
        "start": 233
      },
      {
        "text": "okay and then for date what's cool is",
        "start": 240
      },
      {
        "text": "you can very quickly just say today",
        "start": 242
      },
      {
        "text": "right now and save and add another let's",
        "start": 244
      },
      {
        "text": "say stay really December 4 oh my",
        "start": 247
      },
      {
        "text": "goodness it's December anyway probably",
        "start": 249
      },
      {
        "text": "by the time anybody's seen this will be",
        "start": 253
      },
      {
        "text": "even later anyway haha save and you can",
        "start": 255
      },
      {
        "text": "either save and continue editing you can",
        "start": 259
      },
      {
        "text": "save and add another or you could just",
        "start": 261
      },
      {
        "text": "save and we'll save and add another",
        "start": 263
      },
      {
        "text": "and then we'll say Amazing Grace today",
        "start": 264
      },
      {
        "text": "and now saving add another hello world",
        "start": 273
      },
      {
        "text": "good hiya and then we'll do today now",
        "start": 278
      },
      {
        "text": "but you can also do like this like you",
        "start": 282
      },
      {
        "text": "could say this post was back in",
        "start": 284
      },
      {
        "text": "September okay",
        "start": 286
      },
      {
        "text": "save alright so now these are our admin",
        "start": 288
      },
      {
        "text": "blog and posts so let's go back home and",
        "start": 292
      },
      {
        "text": "you would like if you just logged in",
        "start": 294
      },
      {
        "text": "admin you'd see this you can click on",
        "start": 296
      },
      {
        "text": "posts see like okay cool here's all our",
        "start": 298
      },
      {
        "text": "posts hello world and blah blah and you",
        "start": 299
      },
      {
        "text": "can edit it you could delete it you",
        "start": 302
      },
      {
        "text": "could save and continue editing and",
        "start": 305
      },
      {
        "text": "saving add another cool so now what if",
        "start": 306
      },
      {
        "text": "we just go to our home page and we click",
        "start": 311
      },
      {
        "text": "on blog there's our information right",
        "start": 314
      },
      {
        "text": "it's just there and sure enough the",
        "start": 317
      },
      {
        "text": "titles are links and in our excitement",
        "start": 319
      },
      {
        "text": "we click on one ah it doesn't work why",
        "start": 321
      },
      {
        "text": "doesn't it work you ask well of course",
        "start": 325
      },
      {
        "text": "we don't have any URL path that explains",
        "start": 327
      },
      {
        "text": "or works with slash blog / - we can even",
        "start": 331
      },
      {
        "text": "see",
        "start": 335
      },
      {
        "text": "well this your slash blog but this is",
        "start": 335
      },
      {
        "text": "the home page right it required it to be",
        "start": 337
      },
      {
        "text": "slash blog not slash blog - so now what",
        "start": 339
      },
      {
        "text": "we have to do is create the handling we",
        "start": 343
      },
      {
        "text": "need two URLs we need to view for the",
        "start": 348
      },
      {
        "text": "individual posts so that's what we're",
        "start": 352
      },
      {
        "text": "gonna be covering in the next tutorial",
        "start": 355
      },
      {
        "text": "this one should be quick and easy quick",
        "start": 357
      },
      {
        "text": "and painless easy enough for you guys to",
        "start": 358
      },
      {
        "text": "get up to this point but if you had any",
        "start": 360
      },
      {
        "text": "problems feel free to leave them below",
        "start": 361
      },
      {
        "text": "one thing to keep in mind if this is the",
        "start": 363
      },
      {
        "text": "first time you visited the admin which",
        "start": 366
      },
      {
        "text": "if you're following along it probably",
        "start": 368
      },
      {
        "text": "was if it didn't work for whatever",
        "start": 369
      },
      {
        "text": "reason you can always go to my site go",
        "start": 371
      },
      {
        "text": "to settings and make sure admin is",
        "start": 373
      },
      {
        "text": "installed so you'd come down here make",
        "start": 375
      },
      {
        "text": "sure you have this line it should be",
        "start": 377
      },
      {
        "text": "there by default but if it's not there",
        "start": 379
      },
      {
        "text": "for whatever reason you might need to",
        "start": 382
      },
      {
        "text": "add that part okay so uh that's that as",
        "start": 383
      },
      {
        "text": "always thanks for watching thanks for",
        "start": 388
      },
      {
        "text": "all the support subscriptions until next",
        "start": 389
      },
      {
        "text": "time",
        "start": 391
      }
    ]
  }