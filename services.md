---
title: Services
layout: default
subtitle: Welcome to the ultimate experience for all special occasions both public and private.
left-contents:
  - title: Weddings
    alt: Weddings
    body: Create the memories that are forever, as you celebrate the new beginning in our intimate location off the Las Vegas Strip. Echelon Event Center, is elegant, classy, which accommodate all individuals with affordable prices
    src: https://picsum.photos/300
  - title: Banquets
    alt: Banquets
    body: Formal occasions for businesses or family and friends gatherings. Echelon is the perfect look to accomplish the goal of providing a beautiful and elegant space with our design team. We will keep the tradition held to enhance the prestige of host, or reinforce social bonds amongst joint contributors
    src: https://picsum.photos/300
  - title: Private Events
    alt: Private Events
    body: We specialize in hosting private events, rather corporate or private events, Echelon Event Center is the place to be. Having a perfect location, and spacious venue to provides intimate and appealing services.
    src: https://picsum.photos/300
  - title: Private Parties
    alt: Private Parties
    body: Some of our main specialties allows us to provide space for private events to include, birthday parties, bachelor & bachelorette, theme events, baby showers, anniversary or whatever your special occasion is, Echelon Event Center has affordable prices through packages to suite our customer needs.
    src: https://picsum.photos/300
right-contents:
  - title: Quinceañera
    alt: Quinceañera
    body: With such an important day we welcome you with a memorable fiesta and celebrate the coming of age and this historic ceremony for your special loved one. As the family party while assisting on young adulthood.
    src: https://picsum.photos/300
  - title: Bodas
    alt: Bodas
    body: Info above in Spanish "Create the memories that are forever, as you celebrate the new beginning in our intimate location off the Las Vegas Strip. Echelon Event Center, is elegant, classy, which accommodate all individuals with affordable prices."
    src: https://picsum.photos/300
  - title: Watch parties
    alt: Watch parties
    body: Our facility is equipped to provide many different types of watch parties, from live or recorded events, videos, movies, political or social events, allowing the viewers to interact, eat, drink, all while in an appealing atmosphere which also can be seen through news feed and timelines.
    src: https://picsum.photos/300
  - title: Sporting events
    alt: Sporting events
    body: Come and join us as we provide a unique space for all sporting events. With Las Vegas now the place for NHL, NFL, WNBA, and with being the &num;1 destination for March Madness college basketball, Echelon Event Center is the perfect location to host all sporting events in addition to all major sports draft watch parties.
    src: https://picsum.photos/300
    
---

<div>
    <div class="container">
      <br/>
      <h1 class="is-size-3 has-text-centered">{{page.title}}</h1>
      <h2 class="is-size-5 has-text-centered">{{page.subtitle}}</h2>
      Whether you are celebrating a Wedding, Anniversary, Bridal Shower, Bachelor &sol; Bachelorette,  Sweet 16, Quinceañera, Bar Mitzvah, Repast, Corporate events, Banquets, or watch parties, Echelon Event Center can provide a great space to cater to you with affordable prices. We offer quality packages, to include design, full services food and beverage packages, sound and lighting, professional staff, videographer, photographer. Come and visit us at <address style="display:inline;">{{site.address}}</address> in Town Square, just south of the Las Vegas Strip. You can also inquire by emailing us at <a href="mailto:{{site.email}}">{{site.email}}</a>
    </div>
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