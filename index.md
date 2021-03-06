---
title: Home
layout: default
---
  <section class="hero is-fullheight-with-navbar is-white logo">
    <div class="hero-body">
      <!-- <div class="hero-home-image parallax" alt="Echelon Logo" style="background-image: url('{{ site.baseurl }}{% link assets/images/logo-normal.png %}');" ></div> -->
      <img class="hero-home-image" src="{{ site.baseurl }}{% link assets/images/logo-normal.png %}" alt="Echelon Logo"/>
    </div>
  </section>
  <section class="home-images">
    {% for image in site.static_files %}
      {% if image.path contains "assets/images/home" %}
        <figure class="figure">
          <input type="checkbox" id="zoom-{{ image.basename }}">
          <label for="zoom-{{ image.basename }}">
          <div></div>
            <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.name }}"/>
          </label>
          <figcaption>{{ image.basename }}</figcaption>
        </figure>
      {%- endif %}
    {% endfor %}
  </section>
  <hr>
  <section class="container">
    <h2 class="is-size-4 has-text-centered" >Echelon Event Center is located in beautiful Town Square, just south of the World-Famous Las Vegas Strip.</h2>
    <br/>
      <h3>We are a space of luxury, romance, ambiance and world-class service combined to make your event extraordinary. An intimate location for your special celebration including weddings, receptions, bah-mitzvahs, quinceañera, birthday celebrations, corporate events, baby showers and celebrations of all kinds.</h3>
      <h3>Echelon Event Center provides an unforgettable experience with amazing services at an affordable price.  We believe that inexpensive prices doesn’t mean you have to sacrifice quality.  We have a well decorated and elegant event space that’s comparable to luxury venues.</h3>
  </section>
  <br/>