---
title: Services
layout: default
left-contents:
  - title: Weddings
    body: Create the memories that are forever, as you celebrate the new beginning in our intimate location off the Las Vegas Strip. Echelon Event Center, is elegant, classy, which accommodate all individuals with affordable prices
    src: https://picsum.photos/300
    alt: Weddings
  - title: Banquets
    body: Formal occasions for businesses or family and friends gatherings. Echelon is the perfect look to accomplish the goal of providing a beautiful and elegant space with our design team. We will keep the tradition held to enhance the prestige of host, or reinforce social bonds amongst joint contributors
    src: https://picsum.photos/300
    alt: Banquets
  - title: Private Events
    body: We specialize in hosting private events, rather corporate or private events, Echelon Event Center is the place to be. Having a perfect location, and spacious venue to provides intimate and appealing services.
    src: https://picsum.photos/300
    alt: Private Events
  - title: Private Parties
    body: Some of our main specialties allows us to provide space for private events to include, birthday parties, bachelor & bachelorette, theme events, baby showers, anniversary or whatever your special occasion is, Echelon Event Center has affordable prices through packages to suite our customer needs.
    src: https://picsum.photos/300
    alt: Private Parties
right-contents:
  - title: Quinceañera
    body: With such an important day we welcome you with a memorable fiesta and celebrate the coming of age and this historic ceremony for your special loved one. As the family party while assisting on young adulthood.
    src: https://picsum.photos/300
    alt: Quinceañera
  - title: Bodas
    body: Info above in Spanish "Create the memories that are forever, as you celebrate the new beginning in our intimate location off the Las Vegas Strip. Echelon Event Center, is elegant, classy, which accommodate all individuals with affordable prices."
    src: https://picsum.photos/300
    alt: Bodas
  - title: Watch parties
    body: Our facility is equipped to provide many different types of watch parties, from live or recorded events, videos, movies, political or social events, allowing the viewers to interact, eat, drink, all while in an appealing atmosphere which also can be seen through news feed and timelines.
    src: https://picsum.photos/300
    alt: Watch parties
  - title: Sporting events
    body: Come and join us as we provide a unique space for all sporting events. With Las Vegas now the place for NHL, NFL, WNBA, and with being the #1 destination for March Madness college basketball, Echelon Event Center is the perfect location to host all sporting events in addition to all major sports draft watch parties.
    src: https://picsum.photos/300
    alt: Sporting events
    
---

<div class="container">
    <br/>
    <h1 class="is-size-3 has-text-centered">Specializations</h1>
    <h2 class="is-size-5 has-text-centered">Welcome to the ultimate experience for all special occasions both public and private.</h2>
    <p>Whether you are celebrating a Wedding, Anniversary, Bridal Shower, Bachelor / Bachelorette,  Sweet 16, Quinceañera, Bar Mitzvah, Repast, Corporate events, Banquets, or watch parties, Echelon Event Center can provide a great space to cater to you with affordable prices. We offer quality packages, to include design, full services food and beverage packages, sound and lighting, professional staff, videographer, photographer. Come and visit us at 6623 Las Vegas Blvd South #139 in Town Square, just south of the Las Vegas Strip. You can also inquire by emailing us at <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
    <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">
            {% for content in left-contents %}
                <div class="tile is-parent">
                    <article class="tile is-child">
                        <figure class="image is-square">
                            <img src="{{content.src}}" alt="{{content.alt}}"/>
                        </figure>
                        <p class="subtitle has-text-centered">{{content.title}}</p>
                        <p>{{content.body}}</p>
                    </article>
                </div>
            {% endfor %}
        </div>
        <div class="tile is-parent is-vertical">
            {% for content in rights-contents %}
                <div class="tile is-parent">
                    <article class="tile is-child">
                        <figure class="image is-square">
                            <img src="{{content.src}}" alt="{{content.alt}}"/>
                        </figure>
                        <p class="subtitle has-text-centered">{{content.title}}</p>
                        <p>{{content.body}}</p>
                    </article>
                </div>
            {% endfor %}
        </div>
    </div>
</div>