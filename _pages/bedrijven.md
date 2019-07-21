---
layout: country
title: "Bedrijven"
country: bedrijven
img: OverigeLandenCollage.jpg
description: Informatie over visum voor bedrijven en personeel
permalink: /bedrijven/
---

Waar het vaak moeilijk kan zijn voor particulieren om zomaar een werkvergunning te krijgen, omdat bescherming van de arbeidsmarkt betekent dat staatsburgers en permanente inwoners van een land voorrang krijgen boven "buitenlanders", zijn er wel speciale faciliteiten ter bevordering van internationaal zaken doen. Wilt u zaken doen in het buitenland? Of wilt u werknemers uitzenden? Wij helpen u aan het juiste visum. Klik hieronder op het gewenste land voor meer informatie, of neem <a href="{{ site.baseurl }}/contact">contact</a> met ons op.</p>


<!-- Bedrijven paginas van ieder lands -->
{% assign countries = "australie|canada|nieuwzeeland|verenigdestaten" | split: "|" %}

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
