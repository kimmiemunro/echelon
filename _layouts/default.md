---
layout: compress
---

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {% seo %}
    <link rel="apple-touch-icon" sizes="180x180" href="{{ site.baseurl }}{% link assets/icon/apple-touch-icon.png %}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ site.baseurl }}{% link assets/icon/favicon-32x32.png %}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ site.baseurl }}{% link assets/icon/favicon-16x16.png %}">
    <link rel="manifest" href="{{ site.baseurl }}{% link site.webmanifest %}">
    <link rel="mask-icon" href="{{ site.baseurl }}{% link assets/icon/safari-pinned-tab.svg %}" color="#333333">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="{{ site.baseurl }}{% link assets/styles/style-3.scss %}">
</head>
<body>
    <nav class="navbar is-fixed-top navbar-boxshadow" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="{{ site.baseurl }}/">
                    <img src="{{ site.baseurl }}{% link assets/images/logo-text.png %}" height="28" alt="Echelon">
                </a>
                <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="main-navbar" role="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div id="main-navbar" class="navbar-menu">
                <div class="navbar-start is-uppercase">
                    <a class="navbar-item" href="{{ site.baseurl }}/">Home</a>
                    <a class="navbar-item" href="{{ site.baseurl }}/services">Services</a>
                    <a class="navbar-item" href="{{ site.baseurl }}/packages">Packages</a>
                    <a class="navbar-item" href="{{ site.baseurl }}/contact">Contact</a>
                    <a class="navbar-item" href="{{ site.baseurl }}/faq">FAQ</a>
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
        <!-- <div>
            <div class="display-inline"></div>
            <div class="theme-selector display-inline">
                <p class="is-theme-title">Themes: </p>
                <p class="is-theme-option">
                    <input class="theme-radio-option" type="radio" id="theme-default" name="theme" value="{{ site.baseurl }}/assets/styles/style-default.css" data-target='link[rel="stylesheet"]'>
                    <label for="theme-default">Default</label>
                </p>
                <p class="is-theme-option">
                    <input class="theme-radio-option" type="radio" id="theme-1" name="theme" value="{{ site.baseurl }}/assets/styles/style-1.css" data-target='link[rel="stylesheet"]'>
                    <label for="theme-1">Honeydew</label>
                </p>
                <p class="is-theme-option">
                    <input class="theme-radio-option" type="radio" id="theme-2" name="theme" value="{{ site.baseurl }}/assets/styles/style-2.css" data-target='link[rel="stylesheet"]'>
                    <label for="theme-2">Baby Powder</label>
                </p>
                <p class="is-theme-option">
                    <input class="theme-radio-option" type="radio" id="theme-3" name="theme" value="{{ site.baseurl }}/assets/styles/style-3.css" data-target='link[rel="stylesheet"]'>
                    <label for="theme-3">Medium Turquoise</label>
                </p>
                <p class="is-theme-option">
                    <input class="theme-radio-option" type="radio" id="theme-4" name="theme" value="{{ site.baseurl }}/assets/styles/style-4.css" data-target='link[rel="stylesheet"]'>
                    <label for="theme-4">Queen Pink</label>
                </p>
            </div>
            <div class="display-inline"></div>
        </div> -->
    </footer>
    <script src="{{ site.baseurl }}{% link assets/js/main.js %}"></script>
</body>
</html>