// Load Page
function loadPage() {
    hash = window.location.hash == '' ? 'home' : window.location.hash.substr(1)
    if (hash == 'home') history.pushState('','','/')

    $('header nav a[href]').removeClass('currentPage')
    $(`header nav a[href="#${hash}"]`).addClass('currentPage')

    $('main#page')
        .attr('page',hash)
        .load(`pages/${hash}.html`)
}; loadPage()
$(window).on('hashchange', loadPage)
