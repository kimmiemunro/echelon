---
layout: compress
---

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {% seo %}
    <link rel="apple-touch-icon" sizes="180x180" href="{% link assets/icon/apple-touch-icon.png %}">
    <link rel="icon" type="image/png" sizes="32x32" href="{% link assets/icon/favicon-32x32.png %}">
    <link rel="icon" type="image/png" sizes="16x16" href="{% link assets/icon/favicon-16x16.png %}">
    <link rel="manifest" href="{% link site.webmanifest %}">
    <link rel="mask-icon" href="{% link assets/icon/safari-pinned-tab.svg %}" color="#333333">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="{% link assets/styles/style-3.scss %}">
</head>
<body>
    <nav class="navbar is-fixed-top navbar-boxshadow" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="{% link assets/images/logo-text.png %}" height="28" alt="Echelon">
                </a>
                <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="main-navbar" role="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div id="main-navbar" class="navbar-menu">
                <div class="navbar-start is-uppercase">
                    <a class="navbar-item" href="/">Home</a>
                    <a class="navbar-item" href="/services">Services</a>
                    <a class="navbar-item" href="/packages">Packages</a>
                    <a class="navbar-item" href="/contact">Contact</a>
                    <a class="navbar-item" href="/faq">FAQ</a>
                </div>
            </div>
    </nav>
    <main>
        {{ content }}
    </main>
    <footer class="footer has-text-centered">
        <div class="social-links">
            {% for link in site.social %}
                <a href="{{ link.src }}">{{ link.title }}</a>
                {% if forloop.last != true %}
                |
                {% endif %}
            {% endfor %}
        </div>
        <div>
            &copy;2021 Echelon Event Center All rights Reserved
        </div>
    </footer>
    <script src="{% link assets/js/main.js %}"></script>
</body>
</html>