<?php

class Theme_PostQueries
{
    /**
     * Holds this instance.
     *
     * @var \Theme_PostQueries
     */
    private static $instance;

    // static variables
    private static $post;
    private static $limit;
    private static $orderby;
    private static $exclude;

    // init class
    public function __construct($limit = 10, $exclude = [])
    {
        self::$limit = isset($limit) ? $limit : $this->post_per_page();
        self::$exclude = $this->build_exclude_list($exclude);
    }

    /**
     * Create an instance and allows multiple copy of class
     *
     * @param integer $limit
     *
     * @param string $orderby
     *
     * @param array $exclude
     *
     * @return instance
     */
    public static function instance(
        $limit = 10,
        $orderby = "date",
        $exclude = []
    ) {
        global $post;
        self::$post = $post;

        return self::$instance = new self($limit, $exclude);
    }

    public function getPosts()
    {
        $args = array(
            'post_type' => 'post',
            'posts_per_page' => self::$limit,
            'post__not_in' => self::$exclude
        );
        return Timber::get_posts($args);
    }

    /**
     *  Get all recent posts, excluding sticky
     *
     * @return object
     */
    public function getRecentPosts()
    {
        $sticky = get_option('sticky_posts');

        $args = array(
            'post_type' => 'post',
            'post__not_in' => $sticky,
            'posts_per_page' => self::$limit
        );

        return Timber::get_posts($args);
    }

    // get a static text
    public function get_static_text($slug = null)
    {
        // echo $slug;
        $args = array(
            'name' => $slug,
            'post_type' => 'texts',
            'post_status' => 'publish',
            'lang' => $this->current_language(),
            'posts_per_page' => self::$limit
        );
        return Timber::get_posts($args);
    }

    // get per page option from WP settings
    private function post_per_page()
    {
        return get_option('posts_per_page');
    }

    private function current_language()
    {
        if (function_exists('pll_current_language')) {
            return pll_current_language();
        } else {
            return "";
        }
    }

    private function build_exclude_list($data)
    {
        if (is_array($data)) {
            return wp_list_pluck($data, 'ID', null);
        } elseif (is_object($data)) {
            return array($data->ID);
        } else {
            return [];
        }
    }
}
