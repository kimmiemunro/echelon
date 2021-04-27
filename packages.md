---
layout: default
title: Packages
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
  - title: Military | Law Enforcement | Senior discounts
    alt: Military | Law Enforcement | Senior discounts
    body: 
    src: https://picsum.photos/300
list-items:
  - "Luxurious ballroom can accommodate from 25-270 guests"
  - "Catering: in-house or use licensed caterer of your choice"
  - "Tables & Chairs"
  - "Linens"
  - "Dance Floor"
  - "Private Bridal Room & Area"
  - "A/V Equipment"
  - "Spacious and Well-lighted"
  - "Complimentary Parking"
  - "Outdoor Night Lighting"
  - "Full Cleanup"
  - "Elegant and Posh Decor"
  - "Custom Linen"
  - "Dinner Buffet or Family Style"
  - "Full Staff to include Bartender, Servers, Security & Cleaning during even"
  - "Refreshments: Wine, Beer, Soda, Coffee, Tea and full bar service"
  - "Full Cake Service"
  - "Full Table Decoration, Welcome Table, Sweetheart Table, Center Pieces"
  - "Bride and Groom Champagne"
  - "Gourmet Menu Selections<ul><li>Plated Dinners</li><li>Butler Passed Hors D'oeuvre</li></ul>"
---

<div>
  <div class="container content">
      <br/>
      <h1 class="is-size-3 has-text-centered">{{page.title}}</h1>
      <h2 class="is-size-5 has-text-centered">{{page.subtitle}}</h2>
      <p>VENUE Packages Prices</p>
      <p>Starting at $1,500 to $8500</p>
      <ul>
        {% for item in page.list-items %}
          <li>{{item}}</li>
        {% endfor %}
      </ul>
      <p>Inclusive Packages Customized to Client’s Special Requests</p>
  </div>
  <!-- <div class="tile is-ancestor">
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
  </div> -->
</div>