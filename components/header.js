class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <!--NavBar-->
        <nav class="navbar sticky-top navbar-expand-lg bg-primary px-4" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/index.html"><h1 style="font-size: 28px;">LeSiteDuProf</h1></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/seconde/seconde.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Seconde
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/seconde/corps-purs-et-melange.html">Corps purs et mélanges</a></li>
                                <li><a class="dropdown-item" href="/seconde/solution-aqueuse/solution-aqueuse.html">Solution aqueuse</a></li>
                                <li><a class="dropdown-item" href="/seconde/echelle micro/main.html">Echelle microscopique</a></li>
                                <li><a class="dropdown-item" href="/seconde/transformation physique/main.html">Transformation Physique</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="/seconde/signaux-sonores/signaux-sonores.html">Signaux sonores</a></li>
                                <li><a class="dropdown-item" href="/seconde/ondes et signaux/lumiere/lumiere.html">Lumière</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="/seconde/décrire un mouvement/main.html">Décrire un mouvement</a></li>
                                <li><a class="dropdown-item" href="/seconde/Modéliser une action sur un système/main.html">Modéliser une action sur un système</a></li>
                                <li><a class="dropdown-item" href="/seconde/principe d'inertie/main.html">principe d'inertie</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Travaux-pratiques
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/TP/support.html">Support</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Evaluations
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/DS/Redaction-DS.html">Rédaction</a></li>
                                <li><a class="dropdown-item" href="/DS/Sujet-et-corrige.html">Sujets et corrigés</a></li>
                                <li><a class="dropdown-item" href="/DS/notes.html">Notes</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/ressources.html">Ressources</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
    }
  }
  
  

  customElements.define('header-component', Header);