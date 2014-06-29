var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $url = $('#url'),
    $button = $('#mostrar-form'),
    $list = $('#contenido'),
    $post = $('.item').first();

function mostrarOcultarFormulario(){
    $form.slideToggle();
    $list.slideToggle();
    return false;
}

function agregarPost(){
    var url = $url.val(),
        titulo = $titulo.val(),
        $clone = $post.clone();

    $clone.find('.titulo_item a')
        .text(titulo)
        .attr('href', url);

    $clone.hide();

    $list.prepend($clone);

    mostrarOcultarFormulario();

    $clone.fadeIn();

    return false;
}

// Eventos
$button.click( mostrarOcultarFormulario );
$form.on('submit', agregarPost );