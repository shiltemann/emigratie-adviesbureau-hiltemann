---
layout: country
title: "Bedrijven"
country: bedrijven
img: OverigeLandenCollage.jpg
description: Informatie over visum voor bedrijven en personeel
permalink: /bedrijven/
---

Voor bedrijven bieden wij


<!-- Bedrijven paginas van ieder lands -->
{% assign countries = "australie|canada|newzealand" | split: "|" %}

<section class="chapters cf">
  <div class="wrapper flex-row">
    {% for country in countries %}
    {% for post in site.categories[country] %}
    {% if post.title == "Personeel uitzenden" %}
    <div class="chapter">
      <a href="{{post.url | prepend: site.baseurl}}">
        {% if post.img %}
        <img src="{{ "/assets/img/" | prepend: site.baseurl | append: post.img }}" alt="{{country}}">
        {% endif %}
      </a>
      <a href="{{post.url | prepend: site.baseurl}}">
        <div class="service">
          <div class="chapter_inner">
            <h3 class="chapter_title">{{post.country}}</h3>
          </div>
        </div>
      </a>
    </div>
    {% endif %}
    {% endfor %}
    {% endfor %}
  </div>
</section> <!-- End Section Bedrijven per Country -->

