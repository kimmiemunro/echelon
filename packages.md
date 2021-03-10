---
title: Packages
layout: default
subtitle: 
left-contents:
  - title: 4 wall
    alt: 4 wall
    body: 
    src: https://picsum.photos/300
  - title: Décor
    alt: Décor
    body: 
    src: https://picsum.photos/300
  - title: Ministers
    alt: Ministers
    body: 
    src: https://picsum.photos/300
  - title: Videographers
    alt: Videographers
    body: 
    src: https://picsum.photos/300
right-contents:
  - title: Photographers
    alt: Photographers
    body: 
    src: https://picsum.photos/300
  - title: Catering food & beverages
    alt: Catering food & beverages
    body: 
    src: https://picsum.photos/300
  - title: Complete staffing
    alt: Complete staffing
    body: 
    src: https://picsum.photos/300
  - title: Military / Law Enforcement / Senior discounts
    alt: Military / Law Enforcement / Senior discounts
    body: 
    src: https://picsum.photos/300
---

<div class="container">
    <br/>
    <h1 class="is-size-3 has-text-centered">{{page.title}}</h1>
    <h2 class="is-size-5 has-text-centered">{{page.subtitle}}</h2>
    <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">
            {% for content in page.left-contents %}
                <div class="tile is-parent">
                    <article class="tile is-child">
                    <div class="photo">
                        <figure class="image is-square">
                            <img src="{{content.src}}" alt="{{content.alt}}"/>
                        </figure>
                        <p class="subtitle has-text-centered">{{content.title}}</p>
                        </div>
                        <p>{{content.body}}</p>
                    </article>
                </div>
            {% endfor %}
        </div>
        <div class="tile is-parent is-vertical">
            {% for content in page.right-contents %}
                <div class="tile is-parent">
                    <article class="tile is-child">
                    <div class="photo">
                        <figure class="image is-square">
                            <img src="{{content.src}}" alt="{{content.alt}}"/>
                        </figure>
                        <p class="subtitle has-text-centered">{{content.title}}</p>
                        </div>
                        <p>{{content.body}}</p>
                    </article>
                </div>
            {% endfor %}
        </div>
    </div>
</div>