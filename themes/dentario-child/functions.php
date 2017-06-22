<?php
/**
 * Child-Theme functions and definitions
 */
// define('WP_ALLOW_REPAIR', true); 

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

// wp_deregister_script('wp-mediaelement');
// wp_deregister_style('wp-mediaelement');

// add_action('wp_print_styles', 'mytheme_dequeue_css_from_plugins', 100);
// function mytheme_dequeue_css_from_plugins()  {
// 	wp_dequeue_style( "/wp-includes/js/mediaelement/mediaelementplayer.min.css" ); 
// }

// REMOVE EMOJI ICONS
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');


?>