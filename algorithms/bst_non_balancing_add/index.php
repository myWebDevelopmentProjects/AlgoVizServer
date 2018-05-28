<?php include_once dirname(__FILE__) . '../../../html-templates/header.php'; ?>
<content_view>
    <view_header>
        <back_btn><double_arrow_left>&nbsp;</double_arrow_left><span>&nbsp;</span></back_btn><title_block class="width_100_percent"><span>&nbsp;</span></title_block>
    </view_header>
    <view_row>
        <data_structure>
            <title_block class="width_100_percent"><arrow_down>&nbsp;</arrow_down><span>Додавання елемента до BST без балансування</span></title_block>
            <active_field>
            <p>Елементи:
                <items-wrapper>
                    <item-list class="init">0</item-list>
                    <item-list class="compare">1</item-list>
                </items-wrapper>
            </p>
                <bst-structure>
                    <bst-item  id="bst_item_0" class="_0" >0</bst-item>

                    <bst-item  id="bst_item_1" class="_1_1" >1</bst-item>
                    <bst-item  id="bst_item_2" class="_1_2" >2</bst-item>

                    <bst-item  id="bst_item_3" class="_2_1" >3</bst-item>
                    <bst-item  id="bst_item_4" class="_2_2" >4</bst-item>
                    <bst-item  id="bst_item_5" class="_2_3" >5</bst-item>
                    <bst-item  id="bst_item_6" class="_2_4" >6</bst-item>

                    <bst-item  id="bst_item_7" class="_3_1" >7</bst-item>
                    <bst-item  id="bst_item_8" class="_3_2" >8</bst-item>
                    <bst-item  id="bst_item_9" class="_3_3" >9</bst-item>
                    <bst-item  id="bst_item_10" class="_3_4" >10</bst-item>
                    <bst-item  id="bst_item_11" class="_3_5" >11</bst-item>
                    <bst-item  id="bst_item_12" class="_3_6" >12</bst-item>
                    <bst-item  id="bst_item_13" class="_3_7" >13</bst-item>
                    <bst-item  id="bst_item_14" class="_3_8" >14</bst-item>

                    <bst-item  id="bst_item_15" class="_4_1" >15</bst-item>
                    <bst-item  id="bst_item_16" class="_4_2" >16</bst-item>
                    <bst-item  id="bst_item_17" class="_4_3" >17</bst-item>
                    <bst-item  id="bst_item_18" class="_4_4" >18</bst-item>
                    <bst-item  id="bst_item_19" class="_4_5" >19</bst-item>
                    <bst-item  id="bst_item_20" class="_4_6" >20</bst-item>
                    <bst-item  id="bst_item_21" class="_4_7" >-</bst-item>
                    <bst-item  id="bst_item_22" class="_4_8" >-</bst-item>
                    <bst-item  id="bst_item_23" class="_4_9" >-</bst-item>
                    <bst-item  id="bst_item_24" class="_4_10" >-</bst-item>
                    <bst-item  id="bst_item_25" class="_4_11" >-</bst-item>
                    <bst-item  id="bst_item_26" class="_4_12" >-</bst-item>
                    <bst-item  id="bst_item_27" class="_4_13" >-</bst-item>
                    <bst-item  id="bst_item_28" class="_4_14" >-</bst-item>
                    <bst-item  id="bst_item_29" class="_4_15" >-</bst-item>
                    <bst-item  id="bst_item_30" class="_4_16" >-</bst-item>

                </bst-structure>
            </active_field>
        </data_structure>
        <right_block>
            <comments_block>
                <title_block class="width_100_percent"><span>&nbsp;</span></title_block>
                <active_field>

                </active_field>
                <audio class="audio-comment" controls>
                    Браузер не підтримує програвання звукових файлів!
                </audio>
            </comments_block>
        </right_block>
    </view_row>
    <view_row>
        
        <data_pseudocode>
            <title_block class="width_100_percent"><arrow_down>&nbsp;</arrow_down><span class="localization">&nbsp;</span><span class="js_procedure_name red"></span></title_block>
            <active_field>

            </active_field>
        </data_pseudocode>
        <right_block>
            <procedures_block>
                <title_block class="width_100_percent"><span></span>&nbsp;</title_block>
                <active_field>

                </active_field>
            </procedures_block>
        </right_block>
    </view_row>
    <view_row>
        <help_btn><help_btn_icon>&nbsp;</help_btn_icon><span>&nbsp;</span></help_btn>
        <control_btn class="start"><span>&nbsp;</span><control_icon>&nbsp;</control_icon></control_btn>
        <control_btn class="back"><control_icon>&nbsp;</control_icon><span>&nbsp;</span></control_btn>
        <control_btn class="pause"><span>&nbsp;</span><control_icon>&nbsp;</control_icon></control_btn>
        <control_btn class="forward"><span>&nbsp;</span><control_icon>&nbsp;</control_icon></control_btn>
        <control_btn class="stop"><span>&nbsp;</span><control_icon>&nbsp;</control_icon></control_btn>
    </view_row>
    <?php
    include_once dirname(__FILE__) . '../../../html-templates/software-info.php';
    ?>
</content_view>
<script src="js/app.dom_elements.js" defer></script>
<script src="js/app.init_localization.js" defer></script>
<script src="js/scenario.js" defer></script>
<script src="js/ready.js" defer></script>
<?php

include_once dirname(__FILE__) . '../../../html-templates/footer.php';
