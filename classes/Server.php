<?php
define("ALGORITHMS", "algorithms");
define("CONFIG_PATH", "config.xml");

class Server {
    
    public $algorithms_nav;
    public $config;
    
    public function __construct() {
        $this->config = simplexml_load_file(CONFIG_PATH) or die("Error: Cannot load config...");
    }
    
    public function initLinks() {
        $links = $this->config->{'links'};
        $this->links = array_diff(scandir(ALGORITHMS, 1), array('..', '.'));
        $this->algorithms_nav .= '<ul>'; 
        foreach($this->links as $link) {
        $value = $links->{$link};
            if (in_array($link, $this->links)) {
                if ($link !== 'index.php') {
                    $this->algorithms_nav .= "<li><a href='". ALGORITHMS ."/". $link ."'>". $value  ."</a></li>";
                }
            }
        }
        $this->algorithms_nav .= '</ul>';
    }
    
    public function start() {
    include_once dirname(__FILE__).'/../html-templates/header.php';
        include_once dirname(__FILE__).'/../html-templates/default.php';
    include_once dirname(__FILE__).'/../html-templates/footer.php';
    }

}
