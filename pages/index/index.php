<?php
include "../../classes/Server.php";
//
//$url_to_algorithms = dirname(__FILE__)."../algorithms";
$url_to_algorithms = $_SERVER['PATH_INFO'].'/algorithms';
//
echo "GGGG" . dirname(__FILE__);
$Server = new Server($url_to_algorithms);
$initLinks = $GLOBALS['Server']->initLinks();
$start = $GLOBALS['Server']->start();
//
?>
<?php include_once dirname(__FILE__) . '../../../html-templates/header.php';?>
        <content_view>
            <view_header>
                <title_block class="width_100_percent">&nbsp;</title_block>
            </view_header>
            <view_page>
                <content_of_page>&nbsp;</content_of_page>

        <?= $GLOBALS['Server']->algorithms_nav;?>
            </view_page>
        </content_view>
        <script src="js/app.dom_elements.js" defer></script>
        <script src="js/app.init_localization.js" defer></script>
        <script src="js/ready.js" defer></script>

<?php
include_once dirname(__FILE__) . '../../../html-templates/footer.php';