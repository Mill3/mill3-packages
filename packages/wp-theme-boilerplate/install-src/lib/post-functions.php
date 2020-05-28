<?php

namespace Mill3WP\Filters;

/**
 * Add custom classnames to body
 */
/*
function body_class($classes) {
  if(
      is_home() ||
      is_front_page() ||
      is_post_type_archive(['projects', 'post']) ||
      is_singular(['projects', 'post'])
    ) {
    $classes[] = '--theme-inverted';
  }
  return $classes;
}

add_filter('body_class', __NAMESPACE__ . '\\body_class');
*/


/**
 * Wrap any embeded with a responsive wrapper
 */
/*
function responsive_embed($html, $url, $attr) {
    return $html !== '' ? '<div class="embed-responsive box-widescreen"><div class="box-content">' . filter_embeded_settings($html) . '</div></div>' : '';
}

add_filter('embed_oembed_html', __NAMESPACE__ . '\\responsive_embed', 10, 3);
//add_filter('oembed_result', __NAMESPACE__ . '\\responsive_embed', 10, 3);
*/
