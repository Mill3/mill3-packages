<?php

namespace Mill3WP\GravityForm;
use Timber;

// https://docs.gravityforms.com/gform_submit_button/

function form_submit_button( $button, $form ) {
  if( $form['button']['type'] !== 'text' ) return $button;

  $data = array(
    'id' => "gform_submit_button_{$form['id']}",
    'title' => $form['button']['text'],
    'classname' => 'gsubmit',
    'attributes' => array('type="submit"')
  );

  return Timber::compile('partial/button.twig', $data);
}

add_filter('gform_submit_button', __NAMESPACE__ . '\\form_submit_button', 10, 2);


/* Remove jquery.placeholder.js polyfill, because it's 2020 */
function remove_placeholder_polyfill() {
  wp_dequeue_script('gform_placeholder');
}

add_action('gform_enqueue_scripts', __NAMESPACE__ . '\\remove_placeholder_polyfill', 11 );
