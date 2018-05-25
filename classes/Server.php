<?php
// define("ALGORITHMS", dirname(__FILE__).'../algorithms');
// define("ALGORITHMS", $_SERVER['PATH_INFO'].'/algorithms');
define("CONFIG_PATH", dirname(__FILE__) ."../../config.xml");

class Server {
    
    public $algorithms_nav;
    public $algorithms_dir_path;
    public $config;

    public function __construct($url) {
        $this->config = simplexml_load_file(CONFIG_PATH) or die("Error: Cannot load config...");
        $this->algorithms_dir_path = $url;

    }
    
    public function initLinks() {
        $links = $this->config->{'links'};
        $this->links = array_diff(scandir($this->algorithms_dir_path, 1), array('..', '.'));
        $this->algorithms_nav .= '<ul class="algorithms_nav">';
        foreach($this->links as $link) {
        $value = $links->{$link};
            if (in_array($link, $this->links)) {
                if ($link !== 'index.php') {
                    $this->algorithms_nav .= "<li><a href='". $this->algorithms_dir_path ."/". $link ."'>". $value  ."</a></li>";
                }
            }
        }
        $this->algorithms_nav .= '</ul>';
    }
    
    public function start() {
        header("Location: pages/index/");
        /*
    include_once dirname(__FILE__).'/../html-templates/header.php';
        include_once dirname(__FILE__).'/../pages/index/index.php';
    include_once dirname(__FILE__).'/../html-templates/footer.php';
        */
    }

}
