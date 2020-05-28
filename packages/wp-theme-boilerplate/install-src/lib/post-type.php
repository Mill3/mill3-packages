<?php

/**
 * Creating a function to create our Custom Post Type
 */
class Theme_CustomPostTypes {

  /**
   * the theme domain name
   *
   * @var string
   */
  protected $theme_domain = 'mill3wp';

  /**
   * the menu starting position in admin
   *
   * @var integer
   */
  protected $menu_position = 3;

  /**
   * This instance
   *
   * @var object
   */
  private static $instance;

  /**
   * [__construct description]
   *
   * @method __construct
   */
  public function __construct() {
    return true;
  }

  /**
   * Public method from instancing the class
   *
   * @method instance
   * @return class
   */
  public static function instance() {
    if ( ! isset( self::$instance ) ) {
      self::$instance = new self;
    }

    return self::$instance;
  }

  /**
   * Main command for class init
   *
   * @method run
   */
  public function run() {
    $this->texts();
  }

  /**
   * Increment the menu position
   *
   * @method incrementMenuPosition
   * @return integer
   */
  private function incrementMenuPosition() {
    return $this->menu_position += 1;
  }

  /**
   * Register 'text' post-type, serves as static texts accross the site
   *
   * @method texts
   */
  public function texts() {
    $labels = array(
        'name'                => __("Texts"),
        'singular_name'       => __("Text"),
        'menu_name'           => __( 'Texts', $this->theme_domain ),
        'parent_item_colon'   => __( 'Parent Text', $this->theme_domain ),
        'all_items'           => __( 'All Texts', $this->theme_domain ),
        'view_item'           => __( 'View Text', $this->theme_domain ),
        'add_new_item'        => __( 'Add New Text', $this->theme_domain ),
        'add_new'             => __( 'Add New', $this->theme_domain ),
        'edit_item'           => __( 'Edit Text', $this->theme_domain ),
        'update_item'         => __( 'Update Text', $this->theme_domain ),
        'search_items'        => __( 'Search Text', $this->theme_domain ),
        'not_found'           => __( 'Not Found', $this->theme_domain ),
        'not_found_in_trash'  => __( 'Not found in Trash', $this->theme_domain ),
    );

    // Set other options for Custom Post Type
    $args = array(
        'label'               => __( 'Texts', $this->theme_domain ),
        'description'         => __( 'Text details', $this->theme_domain ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'thumbnail' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => $this->incrementMenuPosition(),
        'can_export'          => true,
        'has_archive'         => false,
        'exclude_from_search' => true,
        'publicly_queryable'  => false,
        'capability_type'     => 'post',
        'menu_icon'           => 'dashicons-editor-alignleft',
        'rewrite'             => array('slug' => 'Texts')
    );

    // Register
    register_post_type( 'texts', $args );
  }

}


?>
