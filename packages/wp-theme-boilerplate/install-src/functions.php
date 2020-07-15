<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

if (!class_exists('Timber')) {
    add_action('admin_notices', function () {
        echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' .
            esc_url(admin_url('plugins.php#timber')) .
            '">' .
            esc_url(admin_url('plugins.php')) .
            '</a></p></div>';
    });

    add_filter('template_include', function ($template) {
        return get_stylesheet_directory() . '/static/no-timber.html';
    });

    return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array('templates', 'views');

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;

// include theme custom classes
$includes = [
    'lib/assets.php',
    'lib/post-type.php',
    'lib/post-queries.php',
    'lib/post-functions.php',
    'lib/taxonomies.php',
    'lib/taxonomy-queries.php',
    'lib/customizer.php',
    'lib/extra-timber-filters.php',
    'lib/actions.php',
    'lib/barba.php',
    'lib/gravity-form.php',
    'lib/yoast.php',
    'lib/utils.php',
    'lib/utils.php',
    'lib/setup.php',
    'lib/editor.php',
    'lib/shortcodes.php'
];

foreach ($includes as $file) {
    if (!$filepath = locate_template($file)) {
        trigger_error(
            sprintf(__('Error locating %s for inclusion', 'breather'), $file),
            E_USER_ERROR
        );
    }
    include_once $filepath;
}
unset($file, $filepath);

/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */
class StarterSite extends Timber\Site
{
    /** Add timber support. */
    public function __construct()
    {
        add_filter('timber_context', array($this, 'add_to_context'));
        add_filter('get_twig', array($this, 'add_to_twig'));
        add_action('init', array($this, 'register_post_types'));
        add_action('init', array($this, 'register_taxonomies'));
        parent::__construct();
    }

    /** This is where you can register custom post types. */
    public function register_post_types()
    {
        Theme_CustomPostTypes::instance()->run();
    }

    /** This is where you can register custom taxonomies. */
    public function register_taxonomies()
    {
        Theme_CustomTaxonomies::instance()->run();
    }

    /** This is where you add some context
     *
     * @param string $context context['this'] Being the Twig's {{ this }}.
     */
    public function add_to_context($context)
    {
        $context['foo'] = 'bar';
        $context['stuff'] = 'I am a value set in your functions.php file';
        $context['notes'] =
            'These values are available everytime you call Timber::get_context();';
        $context['menu'] = new Timber\Menu();
        $context['site'] = $this;
        return $context;
    }

    /** This is where you can add your own functions to twig.
     *
     * @param string $twig get extension.
     */
    public function add_to_twig($twig)
    {
        $twig->addExtension(new Twig_Extension_StringLoader());
        $twig->addFilter(
            'slugify',
            new Twig_SimpleFilter('slugify', 'filter_slugify')
        );
        return $twig;
    }
}

new StarterSite();
