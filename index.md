---
title: Home
layout: default
---
  <section class="hero is-fullheight-with-navbar is-white logo">
    <div class="hero-body">
      <!-- <div class="hero-home-image parallax" alt="Echelon Logo" style="background-image: url('{{ site.baseurl }}{% link assets/images/logo-normal.png %}');" ></div> -->
      <img class="hero-home-image" src="{% link assets/images/logo-text.png %}" alt="Echelon Logo"/>
    </div>
  </section>
  <section class="gallery-images">
    {% for image in site.static_files %}
      {% if image.path contains "assets/images/home" %}
        <figure class="figure gallery-image">
          <input type="checkbox" id="zoom-{{ image.basename }}">
          <label for="zoom-{{ image.basename }}">
            <div class="figure-image-caption">
              <img src="{{ image.path }}" alt="{{ image.name }}"/>
              <!-- <figcaption>{{ image.basename }}</figcaption> -->
            </div>
          </label>
        </figure>
      {%- endif %}
    {% endfor %}
  </section>
  <hr>
  <section class="container content">
    <h2 class="is-size-4 has-text-centered" >Echelon Event Center is located minutes from the World-Famous Las Vegas Strip.</h2>
    <br/>
      <h3>We are a space of luxury, romance, ambiance and world-class service combined to make your event extraordinary. An intimate location for your special celebration including weddings, receptions, bah-mitzvahs, quinceañera, birthday celebrations, corporate events, baby showers and celebrations of all kinds.</h3>
      <h3>Echelon Event Center provides an unforgettable experience with amazing services at an affordable price.  We believe that inexpensive prices doesn’t mean you have to sacrifice quality.  We have a well decorated and elegant event space that’s comparable to luxury venues.</h3>
  </section>
  <br/>