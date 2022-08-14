---
title: Contact
layout: default
---

<div class="has-text-centered" >
    <section>
        <h1 class="is-size-1" >Hi 👋 want to get in touch?</h1>
        <h2 class="is-size-4" >We'd love to hear from you. Here's how you can reach us...</h2>
    </section>
    <section class="container has-text-centered">
        <h1>Contact Us</h1>
        <div class="columns">
            <div class="column is-one-quarters"></div>
            <div class="column is-half">
                <form action="https://api.staticforms.xyz/submit" method="post" id="staticform">
                    <input type="hidden" name="accessKey" value="7d6ae1a5-843a-4225-88d7-4bc35943f9e9">
                    <input type="hidden" name="subject" value="contact form">
                    <input type="hidden" name="redirectTo" value="{{ site.url }}/contact/success">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" name="name" placeholder="Enter Your Name" required>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" name="email" placeholder="Enter Your Email" required>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Date</label>
                        <div class="control">
                            <input class="input" type="date" name="date" placeholder="Enter the date of you event." required>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea class="textarea" name="message" placeholder="Enter Your Message" required></textarea>
                        </div>
                    </div>
                    <button class="button is-primary" type="Submit">Submit</button>
                </form>
                </div>
            <div class="column is-one-quarters"></div>
        </div>
    </section>
    <section>
        <br/>
        <br/>
        <p class="is-size-2" ><strong>📞 <a href="tel:+{{site.phone}}">+{{ site.phone-text }}</a></strong></p>
        <br/>
        <br/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.1220405969357!2d-115.10082038419661!3d36.11488441367296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c52bed6e857f%3A0xd4e0865824095b75!2s3495%20E%20Flamingo%20Rd%2C%20Las%20Vegas%2C%20NV%2089121!5e0!3m2!1sen!2sus!4v1658537606287!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <address>{{ site.address }}</address>
    </section>
</div>
