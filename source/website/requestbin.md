---
name: RequestBin
date: 2013-06-09
link: http://requestb.in/
open_source: true 
open_format:
rate_use: 1
rate_quality: 6
tags: ["request", "HTTP", "webhook", "api"]
language: en
layout: review
mathjax: false
---

source: <https://github.com/progrium/requestbin>

I come across the project 
[Ruhoh](https://github.com/ruhoh/ruhoh.rb), 
built by the author of 
[Jekyll-Bootstrap](https://github.com/plusjade/jekyll-bootstrap/).
Then I need to study the 
[web-hook](https://help.github.com/articles/post-receive-hooks)
of GitHub. 
That's where I get the pointer to RequestBin. 

This small tool is handy. 

Besides testing web API, it can also be used in temporary testing of XSS,
e.g. use it as a cookie stealer without any deploy cost.

A similar service can benefit the local use of 
[SNSApi](https://github.com/hupili/snsapi). 
Some OSNs prohibit localhost or port number in the callback URL. 
A service like RequestBin can be a workaround.
