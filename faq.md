---
title: FAQ
layout: default
contents:
  - summary: "Is a deposit required?"
    details: "Yes there is a 50% deposit required prior to booking and final payment 14 days before the event."
  - summary: "How can a make a payment?"
    details: "Major credit cards."
  # - summary: "Is the deposit refundable?"
  #   details: ""
  - summary: "How many people does your venue accommodate?"
    details: "300"
  - summary: "Is there an outdoor area?"
    details: "No"
  - summary: "How many hours will we be able to have the venue?"
    details: "6 hours"
  - summary: "Can we bring in outside vendors such as florist, DJ, Videographer, Photographer, etc? yes, however we have packages to accommodate all needs?"
    details: "All outside vendors will have to be approved prior to booking."
  - summary: "Do you have a preferred vendors list?"
    details: "Yes we do have a list."
  - summary: "Do you have food service on site?"
    details: "Yes we can accommodate any food needs."

---
<br/>
<section class="container content">
    {% for content in page.contents %}
        <br/>
            <details>
                <summary><span class="is-size-4">{{content.summary}}</span></summary>
                {{content.details}}
        </details>
    {% endfor %}
</section>
