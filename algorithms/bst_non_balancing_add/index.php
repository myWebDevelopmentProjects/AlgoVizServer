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
                <item class="init">0</item>
                <item class="init">1</item>
            </p>
                <bst-structure>
                    <bst-item class="root">R</bst-item >
                    <bst-item class="_1_1">0</bst-item>
                    <bst-item class="_1_2">0</bst-item>

                    <bst-item class="_2_1">0</bst-item>
                    <bst-item class="_2_2">0</bst-item>
                    <bst-item class="_2_3">0</bst-item>
                    <bst-item class="_2_4">0</bst-item>



                </bst-structure>
            </active_field>
        </data_structure>
        <right_block>
            <comments_block>
                <title_block class="width_100_percent"><span>&nbsp;</span></title_block>
                <active_field>

                </active_field>
                <audio class="audio-comment" controls>
                    <source id="mp3_src" src="" type="audio/mpeg">
                    <source id="ogg_src" src="" type="audio/ogg">
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
