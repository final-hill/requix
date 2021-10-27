<template>
    <nav class="global-nav">
        <feather-icon class="global-icon" icon="cpu" />
        <hr>
        <nuxt-link class="global-nav-link" to="/">
            <feather-icon icon="home" />
            Home
        </nuxt-link>
        <nuxt-link class="global-nav-link" to="/projects">
            <feather-icon icon="grid" />
            Projects
        </nuxt-link>
        <nuxt-link class="global-nav-link" to="/settings">
            <feather-icon icon="settings" />
            Settings
        </nuxt-link>
    </nav>
</template>

<style scoped>
.global-nav {
    align-items: center;
    background-color: #222931;
    display: flex;
    flex-direction: column;
    line-height: 2;
    width: 10em;
}

.global-icon {
    height: 3em;
    margin: 1em 0;
    width: 3em;
}

.global-nav hr {
    width: 100%;
}

.global-nav-link {
    border-right: 0.3em solid transparent;
    box-sizing: border-box;
    color: inherit;
    display: flex;
    margin-top: 0.5em;
    text-decoration: none;
    width: 100%;
}

.global-nav-link .feather-icon {
    margin: 0 1em;
}

.nuxt-link-exact-active {
    border-right: 0.3em solid currentColor;
}
</style>