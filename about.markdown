---
layout: page
title: Обо мне
permalink: /about/
---

<h3 style="margin-bottom: 3rem;">Блог</h3>
<ul>
	{% for post in site.categories.blog %}
	<li>
		{{post.date | date: "%d-%m-%Y"}}
		<a style="color: #1a8080; margin-left: 1rem;" href="{{post.url}}">{{post.title}}</a>
	</li>
	{% endfor %}
</ul>