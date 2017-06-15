<?php
/**
 * Child-Theme functions and definitions
 */
define('WP_ALLOW_REPAIR', true); 

function style_theme()
{
  wp_register_style( 'style_theme',
    'https://opensource.keycdn.com/fontawesome/4.7.0/font-awesome.min.css',
    array(),
    none,
    'all' );

  wp_enqueue_style( 'style_theme' );
}
add_action('get_footer', 'style_theme');
function _remove_script_version( $src ){
$parts = explode( '?ver', $src );
return $parts[0];
}
add_filter( 'script_loader_src', '_remove_script_version', 15, 1 );
add_filter( 'style_loader_src', '_remove_script_version', 15, 1 );


?>